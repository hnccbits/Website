import { useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './Navbar.module.css';
import Logo from '../../assets/hncc-logo.png';

const Navbar = () => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const navList = document.getElementById('navList');
      const navbar = document.getElementById('navbar');
      const height = navbar.offsetHeight;

      const scroll = window.scrollY;
      if (scroll > height + 60) {
        navList.classList.add('fade-up');
      } else {
        navList.classList.remove('fade-up');
      }
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
        <Link href="/teams">
          <a className={Styles.navLink}>Team</a>
        </Link>
        <Link href="/contact">
          <a className={Styles.navLink}>Contact Us</a>
        </Link>
      </div>
      <HiMenuAlt4 size={32} className={Styles.humburgerMenu} />
    </section>
  );
};

export default Navbar;
