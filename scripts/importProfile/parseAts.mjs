import { extractLines } from "./pdfText.mjs";
import { collapseSpaces } from "./reflow.mjs";

const SECTION_HEADERS = [
  "PROFESSIONAL SUMMARY",
  "TECHNICAL SKILLS",
  "PROFESSIONAL EXPERIENCE",
  "NOTABLE PROJECTS",
  "EDUCATION",
];

const BULLET = /^[-•]\s*/;
const EMAIL = /[^\s@|]+@[^\s@|]+\.[^\s@|]+/;
const URL = /https?:\/\/\S+/i;
const EDUCATION_LINE = /^(.+?),\s*(.+?),\s*(\d{4}.*)$/;

function groupBySections(lines) {
  const sections = {};
  let active = null;

  for (const line of lines) {
    if (
      SECTION_HEADERS.includes(line.toUpperCase()) &&
      line === line.toUpperCase()
    ) {
      active = line.toUpperCase();
      sections[active] = [];
    } else if (active) {
      sections[active].push(line);
    }
  }

  return sections;
}

function parseHeaderContact(headerLines) {
  const contact = { email: "", website: "", city: "", country: "" };
  const contactLine = headerLines.find((line) => line.includes("|")) || "";

  for (const rawPart of contactLine.split("|")) {
    const part = collapseSpaces(rawPart);
    if (EMAIL.test(part)) contact.email = part.match(EMAIL)[0];
    else if (URL.test(part)) contact.website = part.match(URL)[0];
    else if (part.includes(",")) {
      const places = part.split(",").map((place) => place.trim());
      contact.city = places[0] || "";
      contact.country = places[places.length - 1] || "";
    }
  }

  return contact;
}

function parseSkills(skillLines) {
  const skills = [];
  for (const line of skillLines) {
    const afterColon = line.includes(":")
      ? line.slice(line.indexOf(":") + 1)
      : line;
    for (const skill of afterColon.split(",")) {
      const cleaned = collapseSpaces(skill).replace(/\.$/, "");
      if (cleaned) skills.push(cleaned);
    }
  }
  return skills;
}

function parseExperienceLine(line) {
  const parts = line.split(",").map((part) => part.trim());
  if (parts.length < 3 || !/^\d{4}/.test(parts[parts.length - 1])) return null;

  const title = parts[0];
  const years = parts[parts.length - 1];
  let company = parts.slice(1, -1).join(", ");
  let location = "";

  const locationMatch = company.match(/\(([^)]+)\)/);
  if (locationMatch) {
    location = locationMatch[1].trim();
    company = collapseSpaces(company.replace(/\(([^)]+)\)/, ""));
  }

  return { title, company, location, years, website: "", descriptions: [] };
}

function parseExperience(experienceLines) {
  const jobs = [];
  let current = null;

  for (const line of experienceLines) {
    if (BULLET.test(line)) {
      if (current)
        current.descriptions.push(collapseSpaces(line.replace(BULLET, "")));
      continue;
    }

    const job = parseExperienceLine(line);
    if (job) {
      current = job;
      jobs.push(current);
    } else if (current && current.descriptions.length) {
      const lastIndex = current.descriptions.length - 1;
      current.descriptions[lastIndex] = collapseSpaces(
        `${current.descriptions[lastIndex]} ${line}`,
      );
    }
  }

  return jobs;
}

function parseProjects(projectLines) {
  const projects = [];

  for (const line of projectLines) {
    if (!BULLET.test(line)) {
      if (projects.length) {
        const last = projects[projects.length - 1];
        last.description = collapseSpaces(`${last.description} ${line}`);
      }
      continue;
    }

    const content = line.replace(BULLET, "");
    const colonIndex = content.indexOf(":");
    const titlePart =
      colonIndex === -1 ? content : content.slice(0, colonIndex);
    const description =
      colonIndex === -1 ? "" : collapseSpaces(content.slice(colonIndex + 1));
    const title = collapseSpaces(titlePart.replace(/\(([^)]+)\)/, "")).trim();

    projects.push({ title, description });
  }

  return projects;
}

function parseEducation(educationLines) {
  const entries = [];

  for (const line of educationLines) {
    const match = line.match(EDUCATION_LINE);
    if (!match) continue;
    entries.push({
      school: collapseSpaces(match[2]),
      degree: collapseSpaces(match[1].replace(/\(([^)]+)\)/, "").trim()),
      field: "",
      start: "",
      graduated: collapseSpaces(match[3]),
      raw: line,
    });
  }

  return entries;
}

export async function parseAts(buffer) {
  const lines = await extractLines(buffer);
  const sections = groupBySections(lines);

  const firstHeaderIndex = lines.findIndex(
    (line) =>
      SECTION_HEADERS.includes(line.toUpperCase()) &&
      line === line.toUpperCase(),
  );
  const headerBlock = lines.slice(
    0,
    firstHeaderIndex === -1 ? lines.length : firstHeaderIndex,
  );

  return {
    source: "ats",
    fullname: headerBlock[0] || "",
    headline: headerBlock[1] || "",
    location: parseHeaderContact(headerBlock).city,
    summary: (sections["PROFESSIONAL SUMMARY"] || []).join(" "),
    phone: "",
    linkedin: "",
    ...parseHeaderContact(headerBlock),
    topSkills: [],
    technicalSkills: parseSkills(sections["TECHNICAL SKILLS"] || []),
    certifications: [],
    honorsAwards: [],
    work: parseExperience(sections["PROFESSIONAL EXPERIENCE"] || []),
    education: parseEducation(sections.EDUCATION || []),
    projects: parseProjects(sections["NOTABLE PROJECTS"] || []),
  };
}
