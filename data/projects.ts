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
    title: "Umurava skills Challenge",
    owner: "Umurava",
    summary: "Comprehensive workforce solutions for Africa.",
    description: "A centralized platform focused on delivering an engaging user experience for challenge participation and management. Administrators can create and approve challenges, while users can join and submit work.",
    timeline: "Feb 2025",
    role: "Frontend Engineer",
    stack: "Next.js, Tailwind CSS, Tanstack Query, React Hook Form",
    link: "https://umurava-challenge-1-frontend.vercel.app/",
    repo: "https://github.com/wakaflorien/umurava-skills-challenge",
    isPrivate: false,
    image: "https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2Fumurava.png?alt=media&token=2b265e34-666d-4794-aed1-41773b468593",
    featured: true
  },
  {
    id: 1,
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
    image: "https://firebasestorage.googleapis.com/v0/b/mybrand-app-9594a.appspot.com/o/images%2Fadminpanel.png?alt=media&token=285051c1-c52d-48cb-a4a4-d000a013e4ce",
    featured: true
  }
];
