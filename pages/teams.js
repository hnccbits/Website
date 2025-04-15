import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { TeamData2k20, TeamData2k21, TeamData2k22, TeamData2k23 } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Amazing Team ✨</title>
        <meta
          name="description"
          content="Teams of HnCC (Hackathon & Coding Club), BIT Sindri, Dhanbad"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Team of HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>
        <h2 className={Styles.postHead}>Board Of Directors</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k21.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k21/${item.imageSrc}.JPG`}
                lazyImageSrc={`/teams/2k21/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        {/* <h2 className={Styles.postHead}>Post Bearers</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k21.slice(0, 11).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k21/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k21/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Technical Head</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k21.slice(11, 19).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k21/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k21/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Event Manager</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k21.slice(19, 26).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k21/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k21/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div> */}
        <h2 className={Styles.postHead}>Post Bearers</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k22.slice(0, 12).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k22/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k22/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Technical Head</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k22.slice(12, 19).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k22/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k22/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Event Manager</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k22.slice(19, 23).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k22/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k22/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>
        {/* <h2 className={Styles.postHead}>Our 2K22 Members</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k22.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k22/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k22/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div> */}
        <h2 className={Styles.postHead}>Our 2K23 Members</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k23.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k23/${item.imageSrc}.jpg`}
                lazyImageSrc={`/teams/2k23/lazy/${item.imageSrc}-min.png`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default Teams;
