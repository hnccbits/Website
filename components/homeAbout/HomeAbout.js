import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import BottomGlitter from '../StyledText/BottomGlitter';

const HomeAbout = () => {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    });

    return () => window.removeEventListener('scroll', null);
  }, []);
  return (
    <section ref={ref} className="container-70 my-16 py-16 fadeonscroll">
      <BottomGlitter text="About HnCC" />
      <div className="my-6 py-2">
        <p className="text-xl w-10/12 md:w-full md:text-lg sm:text-base">
          Irure ullamco in dolor ea cillum dolor ex. Ut aute enim adipisicing
          officia Lorem ipsum ipsum officia. Anim reprehenderit laboris quis ut
          aliquip pariatur dolor consectetur deserunt labore do proident tempor.
          In mollit voluptate ad reprehenderit voluptate dolore officia. Eu
          eiusmod aliquip deserunt cupidatat aliqua ea amet Lorem ad sunt ipsum
          officia labore.
        </p>
      </div>
      <a href="/about">
        <Button>
          <span className="z-50 block">View More</span>
        </Button>
      </a>
    </section>
  );
};

export default HomeAbout;
