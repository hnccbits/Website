import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hamburger.module.css';
import Logo from '../../assets/hncc-logo.png';
import Button from '../button/Button';

const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 300ms ease-in-out',
};

function Sidebar({ isMounted, unmount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const documentWidthRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      documentWidthRef.current = document.documentElement.clientWidth;
      document.documentElement.classList.add('scroll-lock');

      /*
        After locking the body scroll, the scrollbar is hidden, so we have to compensate for the extra space
        created due to no scrollbar by giving the document an extra right padding according to the extra created space
      */
      if (documentWidthRef.current !== document.documentElement.clientWidth) {
        document.documentElement.style.paddingRight = `${
          document.documentElement.clientWidth - documentWidthRef.current
        }px`;
      }
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove('scroll-lock');
        document.documentElement.style.paddingRight = 0;
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
      if (
        document.documentElement.classList.contains('scroll-lock') &&
        isTransitioning
      ) {
        document.documentElement.classList.remove('scroll-lock');
        document.documentElement.style.paddingRight = 0;
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <section
      className={`${isTransitioning && isMounted ? styles.active : ''} ${
        styles.navbarWrapper
      }`.trim()}
    >
      <div className={styles.navbar}>
        <div>
          <Link href="/">
            <a className="flex items-center" onClick={unmount}>
              <Image src={Logo} alt="HnCC" height="60px" width="60px" />
            </a>
          </Link>
        </div>
        <div onClick={unmount} className="cursor-pointer">
          <CgClose size={32} className={styles.closeIcon} />
        </div>
      </div>

      <div id="navList" className={styles.navItems}>
        <Link href="/about">
          <a className={styles.navLink} onClick={unmount}>
            About Us
          </a>
        </Link>
        <Link href="/teams">
          <a className={styles.navLink} onClick={unmount}>
            Team
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink} onClick={unmount}>
            Contact Us
          </a>
        </Link>
        <Link href="/events">
          <a className={styles.navLink} onClick={unmount}>
            Events
          </a>
        </Link>
        <Link href="/faqs">
          <a className={styles.navLink} onClick={unmount}>
            FAQs
          </a>
        </Link>
        <a
          href="https://forms.gle/bGAauorD4Vj752z68"
          target="_blank"
          className="flex rounded-full"
          rel="noreferrer"
        >
          <Button
            style={{ border: 'none' }}
            className="bg-primary-light text-primary hover:text-primary-light xs:!py-3"
          >
            <span style={SpanStyle}>Join Us</span>
          </Button>
        </a>
      </div>
    </section>,
    document.getElementById('overlay')
  );
}
export default Sidebar;
