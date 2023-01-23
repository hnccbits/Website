import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import {
  TeamData2k16,
  TeamData2k17,
  TeamData2k18,
} from '../lib/data/AlumniData';

function Alumni() {
  return (
    <Screen>
      <Head>
        <title>Our Notable Alumni ✨</title>
        <meta
          name="description"
          content="Alumni of HnCC (Hackathon & Coding Club), BIT Sindri, Dhanbad"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Team of HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Notable Alumni ✨" />
          <h3 className="text-lg mt-8">
            Nobody is bothered about an institution more than its alumni.
            <br />- N.R. Narayan Murthy
          </h3>
        </div>
        <h2 className={Styles.postHead}>Batch 2K16</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k16.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                company={item.company}
                imageSrc={`/teams/2k16/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k16/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Batch 2K17</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k17.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                company={item.company}
                imageSrc={`/teams/2k17/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k17/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Batch 2K18</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k18.slice(0, 24).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                company={item.company}
                imageSrc={`/teams/2k18/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k18/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default Alumni;
