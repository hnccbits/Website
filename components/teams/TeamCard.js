import Image from 'next/image';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Style from './Team.module.css';

const ICON_SIZE = 28;

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
      <div className={Style.socials}>
        {socials.gb || socials.fb || socials.linkedin ? (
          <>
            {socials.gb && (
              <a target="_blank" rel="noreferrer" href={socials.gb}>
                <FaGithub size={ICON_SIZE} width={ICON_SIZE} />
              </a>
            )}

            {socials.linkedin && (
              <a target="_blank" rel="noreferrer" href={socials.linkedin}>
                <FaLinkedin size={ICON_SIZE} />
              </a>
            )}
            {socials.fb && (
              <a target="_blank" rel="noreferrer" href={socials.fb}>
                <FaFacebook size={ICON_SIZE} />
              </a>
            )}
          </>
        ) : (
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>
            Social Invisible
          </span>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
