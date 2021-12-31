import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
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

const Sidebar = ({ isMounted, unmount }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <section
      className={`${isTransitioning && isMounted ? styles.active : ''} ${
        styles.navbarWrapper
      }`}
    >
      <div className={styles.navbar}>
        <div className={styles.navBrand}>
          <Link href="/">
            <a className="flex items-center">
              <Image src={Logo} alt="HnCC" height="60px" width="60px" />
            </a>
          </Link>
        </div>
        <div onClick={unmount} className="cursor-pointer">
          <AiOutlineClose size={32} className={styles.closeIcon} />
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
        <Button
          style={{ border: 'none' }}
          className="bg-primary-light text-primary hover:text-primary-light xs:!py-3"
          onClick={() => alert('We are currently not inducting')}
        >
          <span style={SpanStyle}>Join Us</span>
        </Button>
      </div>
    </section>,
    document.getElementById('overlay')
  );
};
export default Sidebar;
