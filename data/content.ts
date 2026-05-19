import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ProjectCategory,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Project, ProjectCategory } from "./types";

// ─── Achievements ────────────────────────────────────────────────────
export const myAchievements = [
  {
    title: "Starting a journey in IT",
    date: "July 2022",
    description: "Embarking on an IT learning journey with a strong focus on web development and UI/UX design."
  },
  {
    title: "Won 3rd place in a regional poster design competition across Jabodetabek.",
    date: "February 2023",
    description: "Proudly secured 3rd place in the prestigious Liwaul Furqan Championship poster competition."
  },
  {
    title: "Bento Portfolio Project Released",
    date: "Desember 2024",
    description: "Berhasil mendeploy dan merilis portofolio interaktif berbasis Next.js."
  }
];

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I am XXX",
  titles: ["a template", "still a template", "just a template"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "claude, chatgpt, copilot, openclaw, gemini, deepseek ",
  highlights: ["claude", "chatgpt"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/pic.png",
  imageAlt: " Character Illustration",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [
  {
    type: "Email",
    value: "xxxxxxxx@g123.com",
    href: "mailto:xxxxxxxx@g123.com",
  },
];

// ─── Work / Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [
  {
    category: "Web Development",
    projects: [
      {
        title: "Siyoyamu",
        image: "/projects/Siyoyamu.svg",
        techStack: ["React", "Tailwind CSS"],
        href: "https://shiyo-yamu.vercel.app/",
        decs: "A modern Japanese restaurant landing page with a clean UI, showcasing the restaurant's ambiance and menu. Built with React and Tailwind CSS for a responsive and visually appealing design."
      },
      {
        title: "MonoStroke",
        image: "/projects/Mono.svg",
        techStack: ["React", "Tailwind CSS"],
        href: "https://mono-stroke.vercel.app/",
        decs: "An online drawing course platform with a clean UI, offering structured art lessons and tutorials. Built with React and Tailwind CSS for a responsive and creative design.",
      },
      {
        title: "All Page",
        image: "/projects/pages.svg",
        techStack: ["WordPress", "Elementor"],
        decs: "This website is an online bookstore I built, where people can easily explore and buy quality books at affordable prices.",
      },
      {
        title: "Hijai",
        image: "/projects/Hijai.svg",
        techStack: ["MIT App Inventor"],
        decs: "Hijai is an Android app I built with App Inventor to help people learn tajwid easily—like a tajwid teacher in your pocket.",
      },
    ],
  },
];
