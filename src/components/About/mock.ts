import { union_developers, freelancer } from "@/assets/companies";
import { StaticImageData } from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface CompaniesMockProps {
  name: string;
  src: StaticImageData;
  alt: string;
  techs: string;
}

export const companiesMock: CompaniesMockProps[] = [
  {
    name: "union",
    src: union_developers,
    alt: "Union Developers",
    techs:
      "Next.js | Sass | TypeScript | StoryBook | Jest |React Testing Library | GraphQl | Apollo Client",
  },
  {
    name: "freelancer",
    src: freelancer,
    alt: "Freelance",
    techs: "Next.js | React | Sass | TypeScript | Firebase | Node",
  },
];

export const socialMedias = [
  {
    icon: FaGithub,
    link: "https://github.com/davimgfx",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/davifncosta/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/davifn_/",
  },
  {
    icon: FaWhatsapp,
    link: "https://wa.me//5571996338832",
  },
];
