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
  SalesSavvy,
  BlogPost,
  SnapTalk,
  chess,
  DEX,
  imageAI,
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
      "Currently pursuing my 7th sem B.Tech in CSE, have participated in numerous hackathons with my fellow teamates like SIH and Tata InnoVent. Learning an developing Full Stack along with Machine Learning Algorithms. Part of Societies like Qutopia and KindleKnack."
    ],
  },
  {
    title: "Class-XII (ISC)",
    company_name: "St.Joan's School",
    icon: stjoans,
    iconBg: "#383E56",
    date: "Mar 2019 - Jun 2021",
    points: [
      "completed ISC with 93.2% in Science scoring 100 in Computer, participated in various coding challenges and exhibitions winning some.",
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
    name: "SalesSavvy",
    description:
      "SalesSavvyAI is an innovative platform that transforms your website into a fully automated sales executive. Our website builds AI-powered chatbot assists users with booking appointments, showcasing products, and completing purchases through integrated payment gateways. Enhance your customer experience and streamline sales process with SalesSavvyAI.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: SalesSavvy,
    source_code_link: "https://github.com/Abhrajitdas02/SalesSavvyAI",
  },
  {
    name: "BlogPost",
    description:
      "A blogpost demonstration using mern stack technologies inlcuding features like read,share,like,comment and edit. Moreover the admin can view and control number of users,posts and comments in the dashboard.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      }
    ],
    image: BlogPost,
    source_code_link: "https://github.com/Abhrajitdas02/BlogPost",
  },
  {
    name: "SnapTalk",
    description:
      "SnapTalk is a modern and intuitive real-time chatting website designed to bring people together. With seamless user experience and robust features, SnapTalk allows users to connect, communicate, and share moments effortlessly in real time.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      }
    ],
    image: SnapTalk,
    source_code_link: "https://github.com/Abhrajitdas02/SnapTalk",
  },
  {
    name: "ImageAI",
    description:
      "Website to generate images from the given text prompts.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      }
    ],
    image: imageAI,
    source_code_link: "https://github.com/Abhrajitdas02/Image-Generator",
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
    name: "Decentralized Exchange",
    description:
      "A decentralized website using web3 to convert your crypto coins from one token to another while connecting the MetaMask wallet with the website.",
    tags: [
      {
        name: "web3",
        color: "blue-text-gradient",
      },
      {
        name: "rectjs",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: DEX,
    source_code_link: "https://github.com/Abhrajitdas02/CryptoCoin-Exchange-DEX",
  },
  {
    name: "ChessMate",
    description:
      "Website that allows players to play multiplayer chess and video chat with other players along with microphone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Socketio",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/Abhrajitdas02/chess-socketio",
  },
  {
    name: "MyCube",
    description:
      "Rubik's Cube game for solving the cube with timer and leadership board",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: myCube,
    source_code_link: "https://github.com/Abhrajitdas02/MyCube",
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
];

export { services, technologies, experiences, projects };
