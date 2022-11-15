import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import BottomGlitter from '../StyledText/BottomGlitter';

function HomeAbout() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      ref={ref}
      className="container-70 my-16 py-16 fadeonscroll sm:transform-none sm:opacity-100"
    >
      <BottomGlitter text="About HnCC" />
      <div className="my-6 py-2">
        <p className="text-xl w-10/12 md:w-full md:text-lg sm:text-base">
          HnCC or Hackathon and Coding Club is the official club of BIT Sindri
          that has the motto to instill a coding culture, collaborate, and
          arrange events relevant to Open Source, Graphics and Game Development,
          Web Development, App Development, and many other topics. Many students
          at the institute are doing well, but they can do even more if they get
          proper guidance. These students invariably maintain contact with a
          select lot of elite, wise seniors who act as mentors or friends. The
          purpose of HnCC is to provide an official platform for these efforts
          to encourage them by officially endorsing them and helping them
          surmount the hostel boundaries for a healthier and fruitful network.
        </p>
      </div>
      <Link href="/about">
        <a className="flex w-[fit-content] rounded-full">
          <Button>
            <span className="z-50 block">View More</span>
          </Button>
        </a>
      </Link>
    </section>
  );
}

export default HomeAbout;
