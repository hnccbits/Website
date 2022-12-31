/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
// import Logo from '../../assets/hncc-logo.png';
// this is the logo for the current theme
import Logo from '../../assets/christmas_theme/christmas-theme-logo.png';
import Button from '../button/Button';
import Sidebar from './Sidebar';

const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 300ms ease-in-out',
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Creating a dynamic parent div for the sidebar to act as portal's root
    const div = document.createElement('div');
    div.setAttribute('id', 'overlay');
    document.querySelector('body').appendChild(div);
    return () => div.remove();
  }, []);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      const navList = document.getElementById('navList');
      const navbar = document.getElementById('navbar');
      const title = document.getElementById('hnccTitle');
      const height = navbar.offsetHeight;

      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navbar.style.border = 'none';
      }

      if (prevScroll < currentScrollPos) {
        // navList.classList.add('fade-up');
        // title.classList.add('fade-up');
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navList.classList.remove('fade-up');
        title.classList.remove('fade-up');
      }

      prevScroll = currentScrollPos;
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="navbar" className={`${styles.navbar}`}>
      <div>
        <Link href="/">
          <a className="flex items-center">
            <Image src={Logo} alt="HnCC" height="60px" width="60px" />
            <h2 id="hnccTitle" className={styles.navTitle}>
              Hackathon and Coding Club
            </h2>
          </a>
        </Link>
      </div>
      <div id="navList" className={styles.navbarList}>
        <Link href="/about">
          <a className={styles.navLink}>ABOUT US</a>
        </Link>
        <Link href="/teams">
          <a className={styles.navLink}>TEAM</a>
        </Link>
        <Link href="/events">
          <a className={styles.navLink}>EVENTS</a>
        </Link>
        <Link href="/faqs">
          <a className={styles.navLink}>FAQs</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink}>CONTACT US</a>
        </Link>
        <a
          href="https://docs.google.com/forms/d/1eOZsO1X6qmqyS48nEw43RJnOhwEBuAvXpXZXMtOOLaY/viewform?edit_requested=true"
          target="_blank"
          className="flex rounded-full"
          rel="noreferrer"
        >
          <Button
            style={{ border: 'none' }}
            className="bg-primary-light text-primary hover:text-primary-light"
          >
            <span style={SpanStyle}>Join Us</span>
          </Button>
        </a>
      </div>
      <div
        id="hamburger"
        onClick={() => setIsOpen(true)}
        className={styles.humburgerMenu}
      >
        <HiMenuAlt4 size={32} className="block" />
      </div>
      <Sidebar isMounted={isOpen} unmount={() => setIsOpen(false)} />
    </section>
  );
}
export default Navbar;
