import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './Navbar.module.css';
import Hamstyles from './Hamburger.module.css';
import Logo from '../../assets/hncc-logo.png';
import Button from '../button/Button';

const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 300ms ease-in-out',
};

const Sidebar = (props) => {
  console.log(props.sidebar);
  function sidebarclosed() {
    props.setSidebar('false');
  console.log(props.sidebar);
  }
  useEffect(() => {
  console.log(props.sidebar);
    const navbar = document.getElementById('navbar');
    if (props.sidebar === true) {
      console.log(props.sidebar);
      navbar.classList.add('navbarClicked');
    }
    if (props.sidebar === false) navbar.classList.remove('navbarClicked'); 
  }, []);
  
    return (
      <section id='sidebarSection' className={`${Hamstyles.hamburger}`}>
        <section id="navbar" className={`${props.sidebar?'navbarClicked':'hide'} ${Hamstyles.navbar}`}>
          <div className={`${Styles.navBrand} ${Hamstyles.navBrand}`}>
            <Link href="/">
              <a className="flex items-center">
                <Image src={Logo} alt="HnCC" height="60px" width="60px" />
                <h2 id="hnccTitle" className={Styles.navTitle}>
                  Hackathon and Coding Club
                </h2>
              </a>
            </Link>
            <div
              onClick={sidebarclosed}
              className={Hamstyles.closeIconDiv}
            >
              <AiOutlineClose size={32} className={Hamstyles.closeIcon} />
            </div>
          </div>
          <div id="navList" className={`${Hamstyles.hamburgerActive}`}>
            <Link href="/about">
              <a className={`${Styles.navLink} ${Hamstyles.navLink}`}>
                About Us
              </a>
            </Link>
            {/* <Link href="/event">
            <a className={Styles.navLink}>Events</a>
          </Link> */}
            <Link href="/teams">
              <a className={`${Styles.navLink} ${Hamstyles.navLink}`}>Team</a>
            </Link>
            <Link href="/contact">
              <a className={`${Styles.navLink} ${Hamstyles.navLink}`}>
                Contact Us
              </a>
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
      </section>
    );
  
};
export default Sidebar;
