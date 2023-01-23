import Image from 'next/image';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Style from './Team.module.css';

const ICON_SIZE = 28;

function TeamCard({ name, title, company, socials, imageSrc, lazyImageSrc }) {
  return (
    <div className={Style.card}>
      <div className="z-10 w-full text-center h-2/3 mb-18 mt-4 overflow-hidden rounded-lg">
        <Image
          className="z-10 rounded-lg object-cover object-top"
          height="100%"
          width="100%"
          layout="responsive"
          src={imageSrc}
          alt={name}
          quality={100}
          placeholder="blur"
          blurDataURL={lazyImageSrc}
        />
      </div>
      <div className="z-10 text-center my-5">
        <h3 className="text-xl">{name}</h3>
        <h4>{title}</h4>
        <h2>{company}</h2>
      </div>
      <div className={Style.socials}>
        {socials.gb || socials.email || socials.linkedin ? (
          <>
            {socials.gb && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${socials.gb}/`}
              >
                <FaGithub size={ICON_SIZE} width={ICON_SIZE} />
              </a>
            )}

            {socials.linkedin && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/${socials.linkedin}/`}
              >
                <FaLinkedin size={ICON_SIZE} />
              </a>
            )}
            {socials.email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${socials.email}`}
              >
                <FaEnvelope size={ICON_SIZE} />
              </a>
            )}
          </>
        ) : (
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>
            Socially Invisible
          </span>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
