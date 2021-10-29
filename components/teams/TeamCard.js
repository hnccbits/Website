import Image from 'next/image';
import Style from './Team.module.css';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaGithubSquare,
} from 'react-icons/fa';

const TeamCard = ({ name, title, socials, imageSrc }) => {
  return (
    <div className={Style.card}>
      <div className="z-10 w-full text-center h-2/3 mb-18 mt-4">
        <Image
          className="z-10 rounded-lg"
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
      <div className="z-10 text-left w-full">
        {socials?.fb && (
          <div className="flex mt-1">
            <FaFacebookSquare size={24} />
            <a href={socials?.fb} className="ml-2">
              {socials?.fb}
            </a>
          </div>
        )}
        {socials?.linkedin && (
          <div className="flex mt-1">
            <FaLinkedin size={24} />
            <a href={socials?.linkedin} className="ml-2">
              {socials?.linkedin}
            </a>
          </div>
        )}
        {socials?.insta && (
          <div className="flex mt-1">
            <FaInstagram size={24} />
            <a href={socials?.insta} className="ml-2">
              {socials?.insta}
            </a>
          </div>
        )}
        {socials?.gb && (
          <div className="flex mt-1">
            <FaGithubSquare size={24} />
            <a href={socials?.gb} className="ml-2">
              {socials?.gb}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
