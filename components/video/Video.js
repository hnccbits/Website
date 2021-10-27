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
  return (
    <section className={Styles.video}>
      <div id="videoContainer" className={Styles.designVideoContainer}>
        <video src={video} autoPlay loop controls={false} id="video">
          <track kind="captions" />
        </video>
      </div>
      <div className={Styles.content}>
        <h1
          onMouseOver={() => VideoPlay('/video/design.mp4')}
          onMouseOut={VideoPause}
          onTouchStart={() => VideoPlay('/video/design.mp4')}
        >
          Design.
          <span />
        </h1>
        <h1
          onMouseOver={() => VideoPlay('/video/develop.mp4')}
          onMouseOut={VideoPause}
          onTouchStart={() => VideoPlay('/video/develop.mp4')}
        >
          Develop.
          <span />
        </h1>
        <h1
          onMouseOver={() => VideoPlay('/video/code.mp4')}
          onMouseOut={VideoPause}
          onTouchStart={() => VideoPlay('/video/code.mp4')}
        >
          Code.
          <span />
        </h1>
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
