import {
  backend,
  creator,
  web,
  mobile,
  javascript,
  typescript,
  vue,
  nuxt,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  immobilien,
  good_feeling,
  yz,
  threejs,
  dog_food,
  it,
  music,
  map_3d,
  printmystride,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Social Media Manager",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Nuxt JS",
    icon: nuxt,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "IT Deutschland Immobilien",
    icon: immobilien,
    iconBg: "#E6DEDD",
    date: "Okt. 2022 – Feb. 2024",
    points: [
      "Developing and maintaining web applications using Nuxt.js, Typescript and other related technologies.",
      "development of the CMS ( (60 Base Components and 66 Pages))",
      "expansion of cutting-edge software",
      "Todo App",
    ],
  },
  {
    title: "Social Media and Marketing Manager",
    company_name: "Good Feeling Products",
    icon: good_feeling,
    iconBg: "#383E56",
    date: "Sept. 2019 – Aug. 2020 ",
    points: [
      "220 Werbungsvideo und 220 Posten, 35 Produktfotografie, 35 Gestaltete Broschüren auf Chinesisch, 1 Buch Design und Ausstellung Design",
      "Betrieb von Social-Media-Konten (WeChat, TikTok, Kuaishou, Scret)",
    ],
  },
  {
    title: "Freelance Web Designer | Developer",
    company_name: "Freelance",
    icon: yz,
    iconBg: "#E6DEDD",
    date: "Okt. 2020 – now",
    points: [
      "Brochure, Book, Exhibition, Video, and App Design",
      "Frontend Developer",
      "Chinese Instructor",
    ],
  },
];

const projects = [
  {
    name: "printmystride",
    description:
      "PrintMyStride is an innovative 3D printing shoe store that offers custom footwear tailored to each customer’s unique foot shape. After making a purchase, customers receive a foot impression, which is then used by the store to create personalized shoes using advanced 3D printing technology. This project is a full-stack application with the backend built using Express and the frontend developed with React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: printmystride,
    source_code_link: "https://github.com/yongqi8899/FE_PrintMyStride",
    deploy_link: "https://fe-printmystride.onrender.com/",
  },
  {
    name: "printmystride CMS",
    description:
      "PrintMyStride CMS is the content management system designed to support PrintMyStride. It allows for the management of the store's operations, including creating, reading, updating, and deleting (CRUD) information related to products, orders, and customer data. This CMS ensures efficient and streamlined management of the custom shoe-making process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: printmystride,
    source_code_link: "https://github.com/yongqi8899/CMS_PrintMyStride",
    deploy_link: "https://cms-printmystride.onrender.com/",
  },
  {
    name: "3D Map",
    description:
      "The 3D Interactive Flight Map is a dynamic, real-time visualization tool designed for large-screen displays, showcasing flight routes across China. Featuring an immersive 3D map, the system allows users to click on any airport or location to instantly display all active flights departing from at that point. Flight paths are smoothly animated across the map, providing a clear and engaging view of air traffic. This interactive tool is ideal for aviation monitoring, control centers, or public information displays, offering a user-friendly experience and comprehensive insights into China's airspace and flight patterns.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
    ],
    image: map_3d,
    source_code_link: "https://github.com/yongqi8899/map",
  },
  {
    name: "CMS for IT Deutschland Immobilien",
    description:
      "Project CMS for IT Deutschland Immobilien is a specialized digital platform designed to centralize and optimize real estate management in Germany. It streamlines property management by consolidating data, documents, and processes into a user-friendly system. Key features include comprehensive Property and Tenant Management, Financial Tracking, and secure Document Management. The platform ensures compliance with local regulations through automated reporting and offers real-time insights into asset performance. This CMS enhances operational efficiency, reduces costs, and improves service quality, making it an essential tool for managing residential, commercial, and industrial real estate portfolios.",
    tags: [
      {
        name: "nuxt",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: it,
  },
  {
    name: "Canine Cuisine",
    description:
      "This project highlights UI/UX design, leveraging the psychological principle that eye direction in images can subtly influence where users focus their attention. Scientific studies show that when a person in an image looks in a certain direction, viewers are subconsciously guided to follow that gaze. This concept is often used in marketing to direct attention to products or key information. Inspired by this, the website design incorporates visual elements that guide users naturally. The focus is on optimizing user interaction, alongside performance enhancements such as route lazy loading, caching with keep-alive, and image lazy loading, creating a seamless browsing experience.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "vuex",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: dog_food,
    source_code_link: "https://github.com/yongqi8899/hundfutter",
    deploy_link: "https://hundfutter.netlify.app",
  },
  {
    name: "RhythmWave 3D",
    description:
      "This website is my first venture into the world of 3D web design using Three.js, reflecting the growing trend of 3D websites. It's a music-focused platform where the visual experience is as dynamic as the audio. The highlight of the site is a wave animation that moves in sync with the rhythm of the music, creating an immersive experience where sound and visuals blend seamlessly. This project showcases the potential of 3D elements in web design, adding a unique, interactive layer to the user experience.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/yongqi8899/first-3D-Web",
    deploy_link: "https://first-3d-web.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
