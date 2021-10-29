/* eslint-disable no-alert */
import { useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './Navbar.module.css';
import Logo from '../../assets/hncc-logo.png';
import Button from '../button/Button';

const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 400ms ease-in-out',
};

const Navbar = () => {
  useEffect(() => {
    let prevScroll = window.pageYOffset;
    document.addEventListener('scroll', () => {
      const navList = document.getElementById('navList');
      const navbar = document.getElementById('navbar');
      const height = navbar.offsetHeight;

      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navbar.style.border = 'none';
      }

      if (prevScroll < currentScrollPos) {
        navList.classList.add('fade-up');
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navList.classList.remove('fade-up');
      }

      prevScroll = currentScrollPos;
    });

    return () => document.removeEventListener('scroll', null);
  }, []);
  return (
    <section id="navbar" className={`${Styles.navbar}`}>
      <div className={`${Styles.navBrand}`}>
        <Link href="/">
          <a>
            <Image src={Logo} alt="HnCC" height="60px" width="60px" />
          </a>
        </Link>
      </div>
      <div id="navList" className={`${Styles.navbarList}`}>
        <Link href="/about">
          <a className={Styles.navLink}>About Us</a>
        </Link>
        <Link href="/event">
          <a className={Styles.navLink}>Events</a>
        </Link>
        <Link href="/teams">
          <a className={Styles.navLink}>Team</a>
        </Link>
        <Link href="/contact">
          <a className={Styles.navLink}>Contact Us</a>
        </Link>
        <Button
          style={{ border: 'none' }}
          className="bg-primary-light text-primary hover:text-primary-light"
          onClick={() => alert('We are currently not inducting')}
        >
          <span style={SpanStyle}>Join Us</span>
        </Button>
      </div>
      <HiMenuAlt4 size={32} className={Styles.humburgerMenu} />
    </section>
  );
};

export default Navbar;
