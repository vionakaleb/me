
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
    descriptions: string[];
    projects: string[];
    website: string;
    skills: string[];
    logo: string;
  }
  
  export interface SkillItem {
    name: string;
    level: string;
  }
  
  export interface ProjectLink {
    name: string;
    url: string;
    github: string;
    technology: string[];
  }
  
  export interface PortfolioContentData {
    project: string;
    project_web: ProjectLink[];
    projects: unknown[]; // Using any for simplicity as it was an empty array in the source
  }
  
  export interface PortfolioData {
    main: MainData;
    resume: {
        skillmessages: unknown[];
        education: EducationItem[];
        work: WorkItem[];
        skills: SkillItem[];
    };
    portfolio: PortfolioContentData;
  }