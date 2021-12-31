import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import TeamData2k19 from '../lib/data/TeamData';
import BottomGlitter from '../components/StyledText/BottomGlitter';

const Teams = () => {
  return (
    <Screen>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>

        <h2 className={Styles.postHead}>Post Bearers</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k19.slice(0, 8).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={item.imageSrc}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Technical Head</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k19.slice(8, 15).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={item.imageSrc}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Event Manager</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k19.slice(15, 20).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={item.imageSrc}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
};

export default Teams;
