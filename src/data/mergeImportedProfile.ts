import type { PortfolioData } from "../interface";

type Imported = {
  main: {
    fullname: string;
    description: string;
    bios: string[];
    email: string;
    phone: string;
    address: { city: string; country: string };
    social: { name: string; url: string; className: string }[];
  };
  resume: {
    education: {
      school: string;
      degree: string;
      graduated: string;
      description: string;
    }[];
    work: {
      company: string;
      title: string;
      years: string;
      website: string;
      descriptions: string[];
    }[];
    skills: { name: string; level: string }[];
  };
};

function normalizeCompany(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(pt|tbk|persero|inc|ltd|llc|co|com|group)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function companiesMatch(left: string, right: string): boolean {
  const normalizedLeft = normalizeCompany(left);
  const normalizedRight = normalizeCompany(right);
  if (!normalizedLeft || !normalizedRight) return false;
  return (
    normalizedLeft.includes(normalizedRight) ||
    normalizedRight.includes(normalizedLeft)
  );
}

function pickText(incoming: string, fallback: string): string {
  return incoming && incoming.trim() ? incoming : fallback;
}

export function mergeImportedProfile(
  base: PortfolioData,
  imported: Imported,
): PortfolioData {
  const mergedSocial = base.main.social.map((entry) => {
    const match = imported.main.social.find((item) => item.name === entry.name);
    return match ? { ...entry, url: pickText(match.url, entry.url) } : entry;
  });

  const mergedWork = base.resume.work.map((entry) => {
    const match = imported.resume.work.find((item) =>
      companiesMatch(item.company, entry.company),
    );
    if (!match) return entry;
    return {
      ...entry,
      years: pickText(match.years, entry.years),
      website: pickText(match.website, entry.website),
      descriptions: match.descriptions.length
        ? match.descriptions
        : entry.descriptions,
    };
  });

  const mergedEducation = base.resume.education.map((entry) => {
    const match = imported.resume.education.find(
      (item) =>
        companiesMatch(item.school, entry.school) &&
        item.degree.includes(entry.degree.slice(0, 3)),
    );
    if (!match) return entry;
    return {
      ...entry,
      graduated: pickText(match.graduated, entry.graduated),
      description: pickText(match.description, entry.description),
    };
  });

  const existingSkillNames = new Set(
    base.resume.skills.map((skill) => skill.name.toLowerCase()),
  );
  const addedSkills = imported.resume.skills.filter(
    (skill) => !existingSkillNames.has(skill.name.toLowerCase()),
  );

  return {
    ...base,
    main: {
      ...base.main,
      description: pickText(imported.main.description, base.main.description),
      bios: imported.main.bios.length ? imported.main.bios : base.main.bios,
      email: pickText(imported.main.email, base.main.email),
      phone: pickText(imported.main.phone, base.main.phone),
      address: {
        ...base.main.address,
        city: pickText(imported.main.address.city, base.main.address.city),
        country: pickText(
          imported.main.address.country,
          base.main.address.country,
        ),
      },
      social: mergedSocial,
    },
    resume: {
      ...base.resume,
      education: mergedEducation,
      work: mergedWork,
      skills: [...base.resume.skills, ...addedSkills],
    },
  };
}

// Frontend Engineer
// BMICG Jakarta | May-Aug 2017
// Took aging codebases and improved them, refreshing the frontend to match updated brand guidelines. One of the projects was for Bank Muamalat, Indonesia's established Islamic banking institutions.
// Skills: PHP, Jquery, CodeIgniter, MySQL

// Frontend Engineer
// Tristan Artha Media | Jan-Jun 2021
// Developing a responsive sport tournament platform, delivering a seamless experience across mobile and desktop for spectators.
// Skills: Next.js, Angular, GraphQL

// Frontend Engineer
// Hukumonline.com | Jul-Dec 2021
// Taking a short project to help building Indonesia's reg-tech platform and legal news provider that democratizes access to the law.
// Skills: Vue.js

// Frontend Engineer
// PT. Indolima Perkasa | Jan-Jun 2022
// As a single, founding front-end developer, I am responsible for building the Igooana's core dashboard from the ground up. Shaping the architecture decisions and delivered a working product that operations teams relied on daily; to handle B2B sales operations, pipeline management, warehouse coordination, and logistics fleet tracking, all under one roof.
// Skills: React.js and Firebase

// Frontend Engineer
// Yummy Corp | Jul-Dec 2022
// Aiding ride-hailing drivers, end users, and kitchen staff to bridge cloud kitchens with point-of-sale systems, creating a seamless order flow. Building the interfaces that let users place orders which are instantly printed at the restaurant's POS for preparation. Resulting in faster turnaround, fewer order mistakes, and a smoother kitchen operation from screen to plate.
// Skills: React.js and Firebase

// Frontend Engineer
// Telkomsel | Jan-Jun 2023
// Helping Tekomsel to develop Verona, a collaborative website that allows vendors to register or update data independently.
// Skills: Vue.js and Front-End Development
