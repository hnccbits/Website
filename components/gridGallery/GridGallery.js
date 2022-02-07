import GalleryImages from '../../lib/data/GalleryData';
import BottomGlitter from '../StyledText/BottomGlitter';
import styles from './grid-gallery.module.css';

function GridGallery() {
  return (
    <section className={styles.section}>
      <div className="mt-2 mb-16">
        <BottomGlitter text="Glimpses" />
      </div>
      <div className={styles.container}>
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
    <div className={`${styles.wrapper}`}>
      <div className={styles.image}>
        <img src={src} alt={title} />
      </div>
      <div className={styles.text}>{title}</div>
    </div>
  );
}
