import GalleryImages from '../../lib/data/GalleryData';
import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './grid-gallery.module.css';

function GridGallery() {
  return (
    <section className={Styles.gallerySection}>
      <div className="mt-2 mb-16">
        <BottomGlitter text="Glimpses" />
      </div>
      <div className={Styles.container}>
        {GalleryImages.map((item, index) => {
          return (
            <GridImage key={String(index)} src={item.src} title={item.title} />
          );
        })}
      </div>
    </section>
  );
}

export default GridGallery;

function GridImage({ src, title }) {
  return (
    <div className={`${Styles.w3} ${Styles.h2}`}>
      <div className={`${Styles.galleryItem}`}>
        <div className={Styles.image}>
          <img src={src} alt="nature" />
        </div>
        <div className={Styles.text}>{title}</div>
      </div>
    </div>
  );
}
