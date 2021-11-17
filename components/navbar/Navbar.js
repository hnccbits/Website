/* eslint-disable no-alert */
import { useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/hncc-logo.png';
import Button from '../button/Button';
import Styles from './Navbar.module.css';

/**
 * @param {Object} SpanStyle
 * It contains the styling of Join Us button text.
 */
const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 300ms ease-in-out',
};

/**
 * Navbar
 * @returns {JSX.Element}
 * It return the navbar of the website.
 * Contents of Navbar are
 * - Logo and Club Name
 * - Quick Links
 * - Join Us Button
 */

const Navbar = () => {
  useEffect(() => {
    /**
     * @param {Number} prevScroll
     * It stores the previous page offset in y scale.
     */
    let prevScroll = window.pageYOffset;

    document.addEventListener('scroll', () => {
      /**
       * @param {HTMLElement} navList
       * Targets the nav links menu in the navbar
       */
      const navList = document.getElementById('navList');
      /**
       * @param {HTMLElement} navbar
       * Targets the navbar
       */
      const navbar = document.getElementById('navbar');
      /**
       * @param {Number} height
       * Stores the height of Navbar.
       */
      const height = navbar.offsetHeight;

      /**
       * @param {Number} currentScrollPos
       * Stores current windows offset in the y scale
       */
      const currentScrollPos = window.pageYOffset;

      /**
       * @todo
       * When the windows offset is 60 more than height of Navbar apply styling else remove the styling
       */

      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navbar.style.border = 'none';
      }

      /**
       * @todo
       * Check if scrolling upwards or downwards my comparing the current offset position with the previous offset position
       */
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
