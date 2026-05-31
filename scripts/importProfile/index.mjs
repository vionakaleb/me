import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, basename, join } from "node:path";
import { parseLinkedIn } from "./parseLinkedIn.mjs";
import { parseAts } from "./parseAts.mjs";
import { toPortfolioData } from "./toPortfolioData.mjs";

const PDF_LOOKUP_DIR = "src/data/input";
const TYPE_NAME_PATTERNS = {
  ats: ["ats"],
  linkedin: ["profile", "linkedin"],
};

function parseArguments(argv) {
  const options = {
    input: "",
    type: "auto",
    out: "src/data/output/profile.imported.json",
  };

  for (const arg of argv) {
    if (arg.startsWith("--type=")) options.type = arg.split("=")[1];
    else if (arg.startsWith("--out=")) options.out = arg.split("=")[1];
    else if (!arg.startsWith("--")) options.input = arg;
  }
  return options;
}

function detectType(fileName) {
  return /profile|linkedin/i.test(basename(fileName)) ? "linkedin" : "ats";
}

function findPdf(directory) {
  const files = readdirSync(directory).sort();
  return files.find((file) => file.toLowerCase().endsWith(".pdf")) || null;
}

function resolveInput(options) {
  if (options.input) return options.input;
  if (!existsSync(PDF_LOOKUP_DIR)) {
    throw new Error(
      `Folder ${PDF_LOOKUP_DIR} does not exist — create it and drop your PDF in there.`,
    );
  }
  const match = findPdf(PDF_LOOKUP_DIR);
  if (!match) {
    throw new Error(`No PDF found in ${PDF_LOOKUP_DIR}.`);
  }
  return join(PDF_LOOKUP_DIR, match);
}

async function run() {
  const options = parseArguments(process.argv.slice(2));

  const inputPath = resolve(process.cwd(), resolveInput(options));
  const buffer = readFileSync(inputPath);
  const type = options.type === "auto" ? detectType(inputPath) : options.type;

  const profile =
    type === "linkedin" ? await parseLinkedIn(buffer) : await parseAts(buffer);
  const portfolio = toPortfolioData(profile);

  const outputPath = resolve(process.cwd(), options.out);
  writeFileSync(outputPath, `${JSON.stringify(portfolio, null, 2)}\n`, "utf8");

  console.log(`Parsed ${type} PDF: ${basename(inputPath)}`);
  console.log(`  work entries:      ${portfolio.resume.work.length}`);
  console.log(`  education entries: ${portfolio.resume.education.length}`);
  console.log(`  skills:            ${portfolio.resume.skills.length}`);
  console.log(`  certifications:    ${portfolio.certifications.length}`);
  console.log(`  honors & awards:   ${portfolio.honorsAwards.length}`);
  console.log(`  projects:          ${portfolio.portfolio.projects.length}`);
  console.log(`Wrote ${options.out}`);
}

run().catch((error) => {
  console.error("Failed to import profile:", error.message);
  process.exitCode = 1;
});
