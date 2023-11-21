import { union_developers, freelancer } from "@/assets/companies";
import { StaticImageData } from "next/image";

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
