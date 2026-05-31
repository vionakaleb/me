import { extractTwoColumns } from "./pdfText.mjs";
import {
  joinWrappedParagraphs,
  mergeWrappedListItems,
  rejoinWrappedUrls,
  collapseSpaces,
} from "./reflow.mjs";

const SIDEBAR_HEADERS = [
  "Contact",
  "Top Skills",
  "Languages",
  "Certifications",
  "Honors-Awards",
];
const MAIN_HEADERS = ["Summary", "Experience", "Education"];

const DATE_RANGE =
  /\b\d{4}\b\s*-\s*(Present|\d{4}|January|February|March|April|May|June|July|August|September|October|November|December)/i;
const URL = /^https?:\/\//i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?\d[\d\s()-]{6,}/;
const LOCATION_HINT =
  /\b(Indonesia|Singapore|Jakarta|Tangerang|Selatan|Provinsi|Kota|Barat|Timur|Utara|Bandung|Bekasi|Malaysia)\b/i;

function groupByHeaders(lines, headers) {
  const sections = {};
  let active = null;

  for (const line of lines) {
    if (headers.includes(line)) {
      active = line;
      sections[active] = [];
    } else if (active) {
      sections[active].push(line);
    }
  }

  return sections;
}

function parseContact(contactLines) {
  const contact = {
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    city: "",
    country: "",
  };

  for (const line of contactLines) {
    if (EMAIL.test(line)) contact.email = line;
    else if (PHONE.test(line))
      contact.phone = collapseSpaces(line.replace(/\(Mobile\)/i, ""));
    else if (/linkedin\.com/i.test(line))
      contact.linkedin = line.startsWith("http") ? line : `https://${line}`;
    else if (
      /\(Personal\)/i.test(line) ||
      /\.(io|dev|com|app|me)\b/i.test(line)
    ) {
      const url = collapseSpaces(line.replace(/\((Personal|LinkedIn)\)/gi, ""));
      if (!/linkedin\.com/i.test(url))
        contact.website = url.startsWith("http") ? url : `https://${url}`;
    } else if (LOCATION_HINT.test(line)) {
      const parts = line.split(",").map((part) => part.trim());
      contact.city = parts[0] || "";
      contact.country = parts[parts.length - 1] || "";
    }
  }

  return contact;
}

function looksLikeLocation(line) {
  const wordCount = line.split(/\s+/).length;
  return (
    wordCount <= 6 &&
    !line.endsWith(":") &&
    !URL.test(line) &&
    LOCATION_HINT.test(line)
  );
}

function parseExperience(experienceLines) {
  const dateIndexes = [];
  experienceLines.forEach((line, index) => {
    if (DATE_RANGE.test(line)) dateIndexes.push(index);
  });

  const jobs = [];

  for (let position = 0; position < dateIndexes.length; position += 1) {
    const dateIndex = dateIndexes[position];
    const company = experienceLines[dateIndex - 2] || "";
    const title = experienceLines[dateIndex - 1] || "";
    const years = collapseSpaces(
      experienceLines[dateIndex].replace(/\s*\([^)]*\)\s*$/, ""),
    );

    const isLastJob = position + 1 >= dateIndexes.length;
    const bodyEnd = isLastJob
      ? experienceLines.length
      : dateIndexes[position + 1] - 2;
    const bodyLines = experienceLines.slice(dateIndex + 1, bodyEnd);

    let location = "";
    let workingLines = rejoinWrappedUrls(bodyLines);
    if (workingLines.length && looksLikeLocation(workingLines[0])) {
      location = workingLines[0];
      workingLines = workingLines.slice(1);
    }

    const website = workingLines.find((line) => URL.test(line)) || "";
    const descriptions = joinWrappedParagraphs(
      workingLines.filter((line) => !URL.test(line)),
    );

    jobs.push({ company, title, years, location, website, descriptions });
  }

  return jobs;
}

function parseEducation(educationLines) {
  const entries = [];

  for (let index = 0; index < educationLines.length; index += 2) {
    const school = educationLines[index];
    const detail = educationLines[index + 1] || "";
    if (!school) continue;

    const years = detail.match(/\((\d{4})\s*-\s*(\d{4}|Present)\)/i);
    const degree = detail.split(/[,·(]/)[0].trim();
    const fieldMatch = detail.match(/,\s*([^·(]+)/);

    entries.push({
      school,
      degree,
      field: fieldMatch ? fieldMatch[1].trim() : "",
      start: years ? years[1] : "",
      graduated: years ? years[2] : "",
      raw: detail,
    });
  }

  return entries;
}

export async function parseLinkedIn(buffer) {
  const { sidebar, main } = await extractTwoColumns(buffer);

  const sidebarSections = groupByHeaders(sidebar, SIDEBAR_HEADERS);
  const mainSections = groupByHeaders(main, MAIN_HEADERS);

  const firstHeaderIndex = main.findIndex((line) =>
    MAIN_HEADERS.includes(line),
  );
  const headerBlock = main.slice(
    0,
    firstHeaderIndex === -1 ? main.length : firstHeaderIndex,
  );
  const fullname = headerBlock[0] || "";
  const headlineAndLocation = headerBlock.slice(1);
  const location = headlineAndLocation[headlineAndLocation.length - 1] || "";
  const headline = headlineAndLocation.slice(0, -1).join(" ");

  return {
    source: "linkedin",
    fullname,
    headline,
    location,
    summary: (mainSections.Summary || []).join(" "),
    ...parseContact(sidebarSections.Contact || []),
    topSkills: sidebarSections["Top Skills"] || [],
    technicalSkills: [],
    certifications: mergeWrappedListItems(sidebarSections.Certifications || []),
    honorsAwards: mergeWrappedListItems(sidebarSections["Honors-Awards"] || []),
    work: parseExperience(mainSections.Experience || []),
    education: parseEducation(mainSections.Education || []),
    projects: [],
  };
}
