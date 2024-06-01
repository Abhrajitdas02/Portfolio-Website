import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  java,
  cpp,
  linux,
  flask,
  mysql,
  kiit,
  stjoans,
  Mediquity,
  SpamDetective,
  myCube,
  ChatScribe
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "UI/UX",
    icon: backend,
  },
  {
    title: "AI/ML",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "linux",
    icon: linux,
  }
];

const experiences = [
  {
    title: "B.Tech (CSE)",
    company_name: "Kalinga Institute of Industrial technology University",
    icon: kiit,
    date: "Sept 2021 - Present",
    points: [
      "Currently pursuing my 7th sem in CSE with a CGPA of 8.83, have participated in numerous hackathons with my fellow teamates like SIH. Learning an developing Full Stack along with Machine Learning Algorithms. Part of Societies like Qutopia nd KindleKnack."
    ],
  },
  {
    title: "Class-XII (ISC)",
    company_name: "St.Joan's School",
    icon: stjoans,
    iconBg: "#383E56",
    date: "Mar 2019 - Jun 2021",
    points: [
      "cOMPLETED ISC with 93.2% in Science scoring 100 in Computer, participated in various coding challenges and exhibitions winning some.",
    ],
  },
  {
    title: "Class-X (ICSE)",
    company_name: "St.Joan's School",
    icon: stjoans,
    iconBg: "#383E56",
    date: "Mar 2018- Mar 2019",
    points: [
      "Completed ICSE(CLass-X) with a percentage of 94% and participated in various exhibitions and events.",
    
    ],
  }
];

const projects = [
  {
    name: "Mediquity",
    description:
      "A pinnacle of healthcare innovation, where cutting-edge AI meets compassionate care. Our platform is a symphony of precision and efficacy, harnessing the boundless potential of artificial intelligence to revolutionize wellness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: Mediquity,
    source_code_link: "https://github.com/Abhrajitdas02/Mediquity",
  },
  {
    name: "ChatScribe",
    description:
      "A comprehensive website which provides a valubale insights and analysis of the Whatsapp Chat files including activity maps,contribution,emojis using NLP",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: ChatScribe,
    source_code_link: "https://github.com/Abhrajitdas02/Whatsapp_Chat_Analyzer",
  },
  {
    name: "Spam Detective",
    description:
      "Web application that enables users detect Spam SMS or Mails and protect themselves from fraudstars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: SpamDetective,
    source_code_link: "https://github.com/Abhrajitdas02/SpamDetective",
  },
  {
    name: "My Cube",
    description:
      "A comprehensive gaming platform where users can practice and solve Rubik's Cube in record time and also optimise the dimensions of the Cube.It also allows them to learn more creative algorithms",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: myCube,
    source_code_link: "https://github.com/Abhrajitdas02/MyCube",
  },
];

export { services, technologies, experiences, projects };
