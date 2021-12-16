import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import SocialsBar from '../socialsbar/SocialsBar';
import { useState } from 'react';
const Screen = ({ children }) => {
  const[sidebar,setSidebar]=useState('false');
  return (
    <main id="overlayScreen" className="h-full relative">
      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      <SocialsBar />
      <>{children}</>
      <Footer />
    </main>
  );
};

export default Screen;
