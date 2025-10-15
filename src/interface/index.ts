export interface SocialLink {
  name: string;
  url: string;
  className: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  gmaps: string;
}

export interface MainData {
  name: string;
  fullname: string;
  description: string;
  image: string;
  bg: string;
  bios: string[];
  bios2: string[];
  bios3: string[];
  contactmessage: string;
  email: string;
  phone: string;
  address: Address;
  social: SocialLink[];
}

export interface EducationItem {
  school: string;
  degree: string;
  graduated: string;
  description: string;
  logo: string;
}

export interface WorkItem {
  company: string;
  title: string;
  years: string;
  description: string;
  descriptions: string[];
  projects?: string[];
  website: string;
  skills: string[];
  logo: string;
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
  technology: string[];
}

export interface PortfolioContentData {
  projectUrl: string;
  projects: PortfolioItem[];
}

export interface PortfolioData {
  main: MainData;
  resume: {
    skillmessages: string[];
    education: EducationItem[];
    work: WorkItem[];
    skills: SkillItem[];
  };
  portfolio: PortfolioContentData;
}
