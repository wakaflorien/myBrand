export interface Project {
  id: number;
  title: string;
  owner: string;
  summary: string;
  description: string;
  timeline: string;
  role: string;
  stack: string;
  link: string;
  repo: string;
  isPrivate: boolean;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Umurava Skills Challenge",
    owner: "Umurava",
    summary: "Build work experience through real-world skills challenges.",
    description: "A centralized platform focused on delivering an engaging user experience for challenge participation and management. Talents can join hackathons, competitions, and task challenges from various businesses to enhance their employability and accelerate career growth.",
    timeline: "Feb 2025",
    role: "Frontend Engineer",
    stack: "Next.js, Tailwind CSS, Tanstack Query, React Hook Form",
    link: "https://umurava-skills-challenge-fe.vercel.app/",
    repo: "https://github.com/wakaflorien/umurava-skills-challenge-fe.git",
    isPrivate: false,
    image: "/umurava.png",
    featured: true
  },
  // {
  //   id: 1,
  //   title: "PIS – Ecofleet Solutions",
  //   owner: "RMSoft",
  //   summary: "Real-time public bus tracking for Kigali commuters.",
  //   description: "A public information system that modernizes public transportation in Kigali by providing commuters with live bus tracking, smart route planning, and real-time ETAs. Covers all major city transit routes to help passengers move around without the wait.",
  //   timeline: "2024",
  //   role: "Frontend Engineer",
  //   stack: "Next.js, Tailwind CSS, Maps API, React Query",
  //   link: "https://pis.rmsoft.rw/",
  //   repo: "",
  //   isPrivate: true,
  //   image: "/pis.png",
  //   featured: true
  // },
  {
    id: 1,
    title: "Eagle Mark Holdings Ltd",
    owner: "Eagle Mark Holdings",
    summary: "Engineering excellence and infrastructure development in Rwanda.",
    description: "A corporate website for a holding company managing subsidiaries in civil engineering, construction, and high-end logistics. Showcases services including infrastructure development, project management, technical consulting, and supply chain operations through Proxima Supplies & Logistics.",
    timeline: "2024",
    role: "Frontend Engineer",
    stack: "Next.js, Tailwind CSS, TypeScript",
    link: "https://eaglemarkholdingltd.vercel.app/",
    repo: "",
    isPrivate: false,
    image: "/eaglemark.png",
    featured: true
  },
  {
    id: 2,
    title: "Seven Star Journeys",
    owner: "Seven Star Journeys Ltd",
    summary: "Travel smooth, explore more — 200+ destinations worldwide.",
    description: "A travel and tourism platform for a Rwandan agency offering curated tour packages, flight ticketing, and destination guides. Provides seamless local and international travel experiences with personalized planning, serving over 20,000 happy travelers across more than 200 destinations.",
    timeline: "2024",
    role: "Frontend Engineer",
    stack: "Next.js, Tailwind CSS, TypeScript",
    link: "https://www.sevenstarjourneys.rw/",
    repo: "",
    isPrivate: false,
    image: "/sevenstar.png",
    featured: true
  },
  {
    id: 3,
    title: "Fixa Admin panel",
    owner: "Fixa Ltd",
    summary: "Centralized assets and workforce management.",
    description: "Streamlined management of projects, workforce, and payments. Provides tools to oversee on-ground workers, attendances, and payroll accuracy.",
    timeline: "2022 - 2024",
    role: "Fullstack Engineer",
    stack: "Next.js, Redux, Node.js, Strapi, MySQL, Redis, AWS",
    link: "https://fixahr.com/",
    repo: "https://github.com/fixaltd/admin_panel/",
    isPrivate: true,
    image: "/adminpanel.png",
    featured: true
  }
];
