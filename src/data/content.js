import {
  BrowserIcon,
  CircuitryIcon,
  DatabaseIcon,
  EyeIcon,
  GithubLogoIcon,
  GitlabLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WrenchIcon,
} from "@phosphor-icons/react";

export const projects = [
  {
    id: 1,
    title: "E-Parking Management System",
    description:
      "smart parking management system integrated with machine learning components for parking operations and vehicle identification.",
    link: "https://gitlab.com/indralolx/smart-parking-backend",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Axios"],
  },
  {
    id: 2,
    title: "Leage – Anonymous Public Message Platform",
    description:
      "create and share anonymous public messages accessible by other users through a centralized platform.",
    link: "https://github.com/indraplrg/leage-backend",
    technologies: ["Go", "Gin", "PostgreSQL", "Redis", "Gomail"],
  },
  {
    id: 3,
    title: "Fish Quality Classification Using CNN",
    description:
      "image-based fish quality classification system using eye and gill images of Nile Tilapia (Oreochromis niloticus) with a custom-trained MobileNetV4 architecture enhanced by Efficient Channel Attention (ECA-Net)",
    link: "https://github.com/indraplrg/Klasifikasi-Kualitas-Ikan-Nila",
    technologies: ["Python", "Pytorch", "Timm", "Pandas", "Matplotlib"],
  },
];

export const skills = [
  {
    id: 1,
    title: "programming languages",
    items: ["javascript", "typescript", "python", "golang", "c#"],
  },
  {
    id: 2,
    title: "languages",
    items: ["indonesia", "english", "japanese"],
  },
  {
    id: 3,
    title: "backend frameworks",
    items: ["express.js", "asp.net core", "gin", "flask"],
  },
  {
    id: 4,
    title: "frontend frameworks",
    items: ["react", "next.js", "tailwindcss", "bootstrap"],
  },
  {
    id: 5,
    title: "databases",
    items: ["postgresql", "mongodb", "mysql"],
  },
  {
    id: 6,
    title: "others",
    items: ["git", "docker", "linux", "microservices"],
  },
];

export const socials = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/indraplrg",
    icon: GithubLogoIcon,
    weight: "fill",
  },
  {
    id: 2,
    name: "GitLab",
    href: "https://gitlab.com/indralolx",
    icon: GitlabLogoIcon,
    weight: "fill",
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/indra-puluraga/",
    icon: LinkedinLogoIcon,
  },
  {
    id: 4,
    name: "Instagram",
    href: "https://instagram.com/asykarindra",
    icon: InstagramLogoIcon,
  },
];

export const focusAreas = [
  {
    id: 1,
    title: "backend development",
    icon: WrenchIcon,
  },
  {
    id: 2,
    title: "frontend development",
    icon: BrowserIcon,
  },
  {
    id: 3,
    title: "API design & integration",
    icon: CircuitryIcon,
  },
  {
    id: 4,
    title: "database design",
    icon: DatabaseIcon,
  },
  {
    id: 5,
    title: "computer vision",
    icon: EyeIcon,
  },
];
