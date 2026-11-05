export type Lang = "es" | "en";

export interface Link {
  label: string;
  href: string;
  kind?: "demo" | "code" | "doc";
}

export interface Project {
  id: string;
  title: string;
  kicker: string;
  question: string;
  result: { value: string; text: string };
  summary: string;
  image: string;
  imageAlt: string;
  fit?: "cover" | "contain";
  position?: string;
  tags: string[];
  stack: string[];
  links: Link[];
}

export interface Role {
  title: string;
  org: string;
  place?: string;
  dateRange: string;
  bullets: string[];
}

export interface Study {
  degree: string;
  school: string;
  dateRange: string;
  details: string[];
}

export interface Hobby {
  title: string;
  text: string;
  icon: "palette" | "mic" | "chart" | "mountain" | "book" | "ball" | "boxing" | "target" | "bike" | "wave" | "pencil";
  detail?: string;
  image?: string;
  imageAlt?: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}

export interface SiteContent {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { about: string; projects: string; experience: string; education: string; beyond: string; contact: string };
  ui: {
    switchLang: string;
    switchLangHref: string;
    themeToggle: string;
    menu: string;
    viewProjects: string;
    downloadCv: string;
    question: string;
    result: string;
    all: string;
    skills: string;
    certifications: string;
    achievements: string;
    languages: string;
    contactTitle: string;
    contactText: string;
    writeMe: string;
    rights: string;
    built: string;
  };
  person: {
    name: string;
    role: string;
    location: string;
    tagline: string;
    photo?: string;
    initials: string;
    cv: string;
    email: string;
    linkedin: string;
    github: string;
  };
  highlights: { value: string; label: string }[];
  about: { title: string; paragraphs: string[]; skillGroups: { name: string; items: string[] }[] };
  projects: { title: string; intro: string; filters: string[]; items: Project[] };
  experience: { title: string; items: Role[] };
  education: {
    title: string;
    items: Study[];
    certifications: string[];
    achievements: string[];
    languages: string;
  };
  beyond: { title: string; intro: string; items: Hobby[]; galleryTitle: string; gallery: Photo[] };
}
