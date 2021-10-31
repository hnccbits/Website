import { useState } from 'react';
import Styles from './Video.module.css';

const Video = () => {
  const [video, setVideo] = useState('design');
  const VideoPlay = (src) => {
    setVideo(src);
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
  };
  const VideoPause = () => {
    document.getElementById('videoContainer').style.opacity = 0;
    document.getElementById('video').pause();
    setVideo('');
  };

  const Heading = ({ src, text }) => {
    return (
      <h1
        onMouseEnter={() => VideoPlay(src)}
        onMouseLeave={VideoPause}
        onTouchStart={() => VideoPlay(src)}
      >
        {text}
      </h1>
    );
  };

  return (
    <section className={Styles.video}>
      <div id="videoContainer" className={Styles.designVideoContainer}>
        <video
          src="/video/design.mp4"
          autoPlay
          muted="muted"
          loop
          controls={false}
          id="video"
          className={video === 'design' ? 'top-0 left-0 z-40' : 'z-0 -top-full'}
          style={{
            width: video === 'design' ? '100vw' : '0vw',
          }}
        >
          <track kind="captions" />
        </video>
        <video
          src="/video/develop.mp4"
          autoPlay
          muted="muted"
          loop
          controls={false}
          id="video"
          className={
            video === 'develop' ? 'top-0 left-0 z-40' : 'z-0 -top-full'
          }
          style={{
            width: video === 'develop' ? '100vw' : '0vw',
          }}
        >
          <track kind="captions" />
        </video>
        <video
          src="/video/code.mp4"
          autoPlay
          muted="muted"
          loop
          controls={false}
          id="video"
          className={video === 'code' ? 'top-0 left-0 z-40' : 'z-0 -top-full'}
          style={{
            width: video === 'code' ? '100vw' : '0vw',
          }}
        >
          <track kind="captions" />
        </video>
      </div>
      <div className={Styles.content}>
        <Heading src="design" text="Design." />
        <Heading src="develop" text="Develop." />
        <Heading src="code" text="Code." />
      </div>
      <div className={Styles.mobileVideo}>
        <video
          muted="muted"
          controls={false}
          autoPlay
          loop
          src="/video/develop.mp4"
        >
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
};

export default Video;
