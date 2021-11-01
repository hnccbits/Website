import Image from 'next/image';
import Style from './Team.module.css';

const TeamCard = ({ name, title, socials, imageSrc }) => {
  return (
    <div className={Style.card}>
      <div className="z-10 w-full text-center h-2/3 mb-18 mt-4 overflow-hidden rounded-lg">
        <Image
          className="z-10 rounded-lg object-cover"
          height="100%"
          width="100%"
          layout="responsive"
          src={imageSrc}
          alt={name}
        />
      </div>
      <div className="z-10 text-center my-6">
        <h3 className="text-xl">{name}</h3>
        <h4>{title}</h4>
      </div>
      <div>{socials}</div>
    </div>
  );
};

export default TeamCard;
