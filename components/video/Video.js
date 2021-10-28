import { useState } from 'react';
import Styles from './Video.module.css';

const Video = () => {
  const [video, setVideo] = useState('/video/test.mp4');
  const VideoPlay = (src) => {
    setVideo(src);
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
  };
  const VideoPause = () => {
    document.getElementById('videoContainer').style.opacity = 0;
    document.getElementById('video').pause();
  };

  const Heading = ({ src, text }) => {
    return (
      <h1
        onMouseEnter={() => VideoPlay(src)}
        onMouseLeave={VideoPause}
        onTouchStart={() => VideoPlay(src)}
      >
        {text}
        {/* <span /> */}
      </h1>
    );
  };

  return (
    <section className={Styles.video}>
      <div id="videoContainer" className={Styles.designVideoContainer}>
        <video
          src={video}
          autoPlay
          muted="muted"
          loop
          controls={false}
          id="video"
        >
          <track kind="captions" />
        </video>
      </div>
      <div className={Styles.content}>
        <Heading src="/video/design.mp4" text="Design." />
        <Heading src="/video/develop.mp4" text="Develop." />
        <Heading src="/video/code.mp4" text="Code." />
      </div>
      <div className={Styles.mobileVideo}>
        <video controls={false} autoPlay src="/video/develop.mp4">
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
};

export default Video;
