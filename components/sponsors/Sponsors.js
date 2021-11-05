import SponsorsData from '../../lib/data/SponsorsData';
import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './sponsors.module.css';

const Sponsors = () => {
  return (
    <section className="container-70 my-16 py-16">
      <BottomGlitter text="our Sponsors" />
      <div className={Styles.sponsorsContainer}>
        {SponsorsData.map((src, index) => {
          return (
            <div className={Styles.images} key={String(index)}>
              <div className="z-20">
                <img width="100%" height="100%" src={src} alt="Sponsors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
