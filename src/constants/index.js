import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  youtube,
  mongodb,
  git,
  figma,
  coders,
  bot,
  docker,
  chatgpt,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  Metaverse_Madness,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MongoDB ",
    icon: web,
  },
  {
    title: "Express.js ",
    icon: mobile,
  },
  {
    title: "React.js ",
    icon: creator,
  },
  {
    title: "Node.js ",
    icon: backend,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next-JS",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8x0zx8ykjWoRP-YBskfjjLt78mUJ0quQDg5apyL6wiCwsueHv1pvwbkeREtTqgYyNto&usqp=CAU",
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
    name: "Java",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    name: "Github",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Schooling ",
    company_name: "Counian Matriculation Higher Secondary School",
    icon: "	https://scontent-tir2-2.xx.fbcdn.net/v/t39.30808-6/276292186_7192963170745592_5915334406281602100_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RgqX45ssyhkAX8mhtZe&_nc_ht=scontent-tir2-2.xx&oh=00_AfBgVwzQgrbmFzObTjHVNznq-sZyLjVMGpFnh-wBD0V1qA&oe=6432775C",
    iconBg: "#fff",
    date: "March 2005 - May 2020",
    points: [
      "SSLC - 94.6%",
      "HSC - 84.6%",
      // "Scored centum in Computer_Science Public Exam",
      "Won the District basketball championship six times in a row",
      // "Member of Junior Red Cross",
    ],
  },
  {
    title: "College",
    company_name: "National Engineering College",
    icon: "https://cdn-icons-png.flaticon.com/512/0/422.png",
    iconBg: "#fff",
    date: "Nov 2020 - May 2024 expected graduation",
    points: [
      "CGPA: 8.6 till 5th Sem",
      "Started developing efficient and high-quality websites in college",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in a CSI Web-A-Fest contest in BIT-College,Sathyamangalam",
    ],
  },
  {
    title: "Internship ",
    company_name: "Vyasn IT Consultancy",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE8b5tQbPA_K5TOErOfbId87H5EpU3gKhfw&usqp=CAU",
    iconBg: "#fff",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Worked as a paid React developer in the company",
      "Created and managed the entire Hotel and Ship section in the website",
      "Developed excellent mobile-responsive UI/UX designs",
      "Learned from an experienced team and used Scrum methodology",
    ],
  },
  {
    title: "Future Plans",
    company_name: "Learning Goals:",
    icon: "https://cdn-images-1.medium.com/max/1200/1*fIzg0ShjGtI-iKt5JF1xBA@2x.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Master Three.js and TypeScript to enhance web development skills",
      "Expand expertise in mobile development by learning React Native and Flutter frameworks",
      "Stay current with emerging technologies by exploring Web3 and Blockchain",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web  who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Image Generation",
    description:
      "I built this website using MERN stack and integrated Cloudinary for image storage and management. The user interface was designed using Tailwind to provide a modern and responsive experience. It my ability to combine cutting-edge AI technology with robust web development ",
    tags: [
      {
        name: "MONGODB",
        color: "green-text-gradient",
      },
      {
        name: "Express_JS",
        color: "blue-text-gradient",
      },
      {
        name: "React_JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node_JS",
        color: "green-text-gradient",
      },

      {
        name: "Dalle",
        color: "blue-text-gradient",
      },
    ],
    // image:
    // "https://media.discordapp.net/attachments/1008571080300052482/1093168725995307079/Nata_sha_demon_anime_girl_whispers_in_full_growth_wings_40d8fdba-e7e9-4ac3-9356-5616f04bbc3b.png?width=610&height=610",
    image:
      "https://media.discordapp.net/attachments/1008571080300052482/1093172205208215714/doudou6_A_donkey_is_a_rapper_dressed_in_West_Coast_style_clothi_274d12aa-b0e9-4ea8-a8cb-06a75c6ea8a3.png?width=610&height=610",
    source_code_link:
      "https://github.com/Hariharan107/Messi_X-AI_Image_Generation",
    website_demo_link: "https://dalle-x.vercel.app/",
  },

  {
    name: "An UI/UX Design",
    description:
      " This website serves as a showcase of my skills and experience in UI/UX design. I have carefully curated a selection of my best work to demonstrate my ability to create beautiful and functional figma designs. Please take your time to explore the site and do not hesitate to contact me if you have any questions",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Metaverse_Madness,
    source_code_link: "https://github.com/Hariharan107/MetaVerse_Madness",
    website_demo_link: "https://messi-verse.vercel.app",
  },
  {
    name: "Conversational_AI",
    description:
      "As a developer with a keen interest in AI and natural language processing, I recently undertook a project to create a conversational AI using the Codex API. This project allowed me to explore the capabilities of AI technology and develop a personal AI assistant. The result is a fully functional Conversational AI",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Node_JS",
        color: "pink-text-gradient",
      },
      {
        name: "Codex API",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://images.hindustantimes.com/tech/img/2023/02/02/960x540/OPENAI-CHATGPT-29_1673677367866_1673677367866_1675339563493_1675339563493.jpg",
    source_code_link: "https://github.com/Hariharan107/Messi_X-ChatGPT-Clone",
    website_demo_link: "https://messi-x.vercel.app",
  },
  {
    name: "Youtube-v3",
    description:
      "As a developer.I always loved to work with API's. So to test my skills I have cloned the YouTube using Youtube-V3 API, React, and Material UI. This project showcases my ability to work with APIs and create responsive and user-friendly interfaces using popular front-end libraries. Take a look at the live demo to see my work in action!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React-Router",
        color: "green-text-gradient",
      },
      {
        name: "Material-UI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Hariharan107/YouTube_Clone",
    website_demo_link: "https://messi-tube.vercel.app",
  },
  {
    name: "Spotify",
    description:
      "This project is a clone of the popular music streaming service, Spotify. I built the application using the Spotify Web API and integrated Styled Components for a sleek and modern user interface. This project demonstrates my ability to work with APIs and create a seamless user experience that closely mimics the original application.",
    tags: [
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Styled_Components",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],

    image:
      "https://helios-i.mashable.com/imagery/articles/050bXhdmNaL9bDGAINptcrL/hero-image.fill.size_1200x1200.v1617973265.jpg",
    source_code_link: "https://github.com/Hariharan107/Spotify",
    website_demo_link: "https://spotify-hari.netlify.app/",
  },
  {
    name: "My Projects Collections",
    description:
      "For more examples of my work, please visit my GitHub profile. There you will find a diverse range of projects that showcase my skills and expertise in various technologies. I am always open to new collaborations and opportunities to work with others on exciting projects. If you’re interested in working with me, please don’t hesitate to get in touch!",
    tags: [
      {
        name: "Ready_To_Collab",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Express_JS",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "React_JS",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "Node_JS",
      //   color: "green-text-gradient",
      // },

      // {
      //   name: "Dalle",
      //   color: "blue-text-gradient",
      // },
    ],
    // image:
    // "https://media.discordapp.net/attachments/1008571080300052482/1093168725995307079/Nata_sha_demon_anime_girl_whispers_in_full_growth_wings_40d8fdba-e7e9-4ac3-9356-5616f04bbc3b.png?width=610&height=610",
    image:
      "https://github.githubassets.com/images/modules/signup/launch_codes/launch-codes-mona-fallback@1x.jpg",
    // image:
    //   "https://media.discordapp.net/attachments/1008571147853504612/1093156398482866356/magata_Systemic._Gorgeous_goddess_of_charity._A_dress_made_of_t_704c7e8e-b246-45b7-b06b-66afb74155bc.png?width=610&height=610",
    source_code_link: "https://github.com/Hariharan107",
    website_demo_link: "https://www.instagram.com/ig_messi__10/",
  },
];

export { services, technologies, experiences, testimonials, projects };
