import Link from "next/link";
import { FaLinkedin, FaTwitch } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

export enum SOCIALS {
  TWITCH = "https://www.twitch.tv/chantooladreams",
  INSTAGRAM = "https://www.instagram.com/chantooladreams/",
  CARA_APP = "https://cara.app/chantooladreams",
  LINKEDIN = "https://ie.linkedin.com/in/chantoola-williams",
}

export const SocialIcons = {
  [SOCIALS.CARA_APP]: () => (
    <span className="text-2xl font-bold">
      {" "}
      <span className="underline">C</span>ara{" "}
    </span>
  ),
  [SOCIALS.LINKEDIN]: () => <FaLinkedin size="2rem" />,
  [SOCIALS.TWITCH]: () => <FaTwitch size="2rem" />,
  [SOCIALS.INSTAGRAM]: () => <TiSocialInstagram size="2rem" />,
} as const;

const Socials = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-start gap-9">
      {Object.values(SOCIALS).map((social: SOCIALS) => (
        <Link
          key={social}
          href={social}
          className="transform transition-transform hover:scale-110 hover:text-pblue300"
          target="_blank"
        >
          {SocialIcons[social]()}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
