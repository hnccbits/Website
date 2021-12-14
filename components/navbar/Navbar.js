/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './Navbar.module.css';
import Hamstyles from './Hamburger.module.css'
import Logo from '../../assets/hncc-logo.png';
import Button from '../button/Button';

const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 300ms ease-in-out',
};

const Navbar = () => {
  const [sidebar,setSidebar] = useState(false) 
  function sidebarclicked(){
    setSidebar(!sidebar)
    console.log(sidebar)
  }
  function sidebarclosed(){
    setSidebar(!sidebar)
    console.log(sidebar)
  }
  useEffect(() => {
      if(sidebar){
        document.body.style.overflow = "hidden"
        document.body.classList.add("no-scroll")
      }
      
        // const hamburger = document.getElementById('hamburger');
        // const navbar = document.getElementById('navbar');
        // hamburger.addEventListener('click',() => {
        //   navbar.classList.add('navbarClicked');
        // })
  
      let prevScroll = window.pageYOffset;
      document.addEventListener('scroll', () => {
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
          navList.classList.add('fade-up');
          title.classList.add('fade-up');
          navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        } else {
          navList.classList.remove('fade-up');
          title.classList.remove('fade-up');
        }

        prevScroll = currentScrollPos;
      });
    
    return () => document.removeEventListener('scroll', null);
  }, []);

  if(!sidebar){
    return (
      <section id="navbar" className={`${Styles.navbar}`}>
        <div className={`${Styles.navBrand}`}>
          <Link href="/">
            <a className="flex items-center">
              <Image src={Logo} alt="HnCC" height="60px" width="60px" />
              <h2 id="hnccTitle" className={Styles.navTitle}>
                Hackathon and Coding Club
              </h2>
            </a>
          </Link>
        </div>
        <div id="navList" className={`${Styles.navbarList}`}>
          <Link href="/about">
            <a className={Styles.navLink}>About Us</a>
          </Link>
          {/* <Link href="/event">
            <a className={Styles.navLink}>Events</a>
          </Link> */}
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
        <div id='hamburger' 
        onClick={sidebarclicked}
        className={`${Styles.hamburger}`}>
        <HiMenuAlt4 size={32} className={Styles.humburgerMenu} />
        </div>
        </section>
    
    );
        }
        else{
          return(
            <div className={`${Hamstyles.hamburger}`}>
              <section id="navbar" className={`${Hamstyles.navbar}`}>
              <div className={`${Styles.navBrand} ${Hamstyles.navBrand}`}>
          <Link href="/">
            <a className="flex items-center">
              <Image src={Logo} alt="HnCC" height="60px" width="60px" />
              <h2 id="hnccTitle" className={Styles.navTitle}>
                Hackathon and Coding Club
              </h2>
            </a>
          </Link>
          <div onClick={sidebarclosed} className={Hamstyles.closeIconDiv}>
          <AiOutlineClose size={32} className={Hamstyles.closeIcon}/>
          </div>
        </div>
        <div id="navList" className={`${Hamstyles.hamburgerActive}`}>
          <Link href="/about">
            <a className={`${Styles.navLink} ${Hamstyles.navLink}`}>About Us</a>
          </Link>
          {/* <Link href="/event">
            <a className={Styles.navLink}>Events</a>
          </Link> */}
          <Link href="/teams">
            <a className={`${Styles.navLink} ${Hamstyles.navLink}`}>Team</a>
          </Link>
          <Link href="/contact">
            <a className={`${Styles.navLink} ${Hamstyles.navLink}`} >Contact Us</a>
          </Link>
          <Button
            style={{ border: 'none' }}
            className={`${Hamstyles.joinButton}`}
            onClick={() => alert('We are currently not inducting')}
          >
            <span style={SpanStyle}>Join Us</span>
          </Button>
        </div>
        </section>
        </div>
          
          );
        }
};
export default Navbar;
