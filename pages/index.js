/* eslint-disable jsx-a11y/media-has-caption */
// import Head from 'next/head';
import Associations from '../components/associations/Associations';
import GridGallery from '../components/gridGallery/GridGallery';
import Screen from '../components/screen/Screen';
import Sponsors from '../components/sponsors/Sponsors';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Video />
      <TechStack />
      <GridGallery />
      <Sponsors />
      <Associations />
    </Screen>
  );
}
