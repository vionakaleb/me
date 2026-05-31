import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { collapseSpaces } from "./reflow.mjs";

const PAGE_MARKER = /^Page \d+ of \d+$/;
const SIDEBAR_COLUMN_RATIO = 0.32;
const LINE_GROUPING_TOLERANCE = 3;

function itemsToLines(items) {
  const sorted = [...items].sort((first, second) => {
    const verticalGap = Math.abs(second.y - first.y);
    return verticalGap > LINE_GROUPING_TOLERANCE
      ? second.y - first.y
      : first.x - second.x;
  });

  const lines = [];
  let currentLine = null;

  for (const item of sorted) {
    const sameLine =
      currentLine &&
      Math.abs(currentLine.y - item.y) <= LINE_GROUPING_TOLERANCE;
    if (sameLine) {
      currentLine.parts.push(item.str);
    } else {
      currentLine = { y: item.y, parts: [item.str] };
      lines.push(currentLine);
    }
  }

  return lines
    .map((line) => collapseSpaces(line.parts.join(" ")))
    .filter((line) => line && !PAGE_MARKER.test(line));
}

async function loadPages(buffer) {
  const document = await getDocument({
    data: new Uint8Array(buffer),
    useSystemFonts: true,
  }).promise;

  const pages = [];
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const width = page.getViewport({ scale: 1 }).width;
    const content = await page.getTextContent();
    const items = content.items
      .filter((item) => item.str && item.str.trim())
      .map((item) => ({
        x: item.transform[4],
        y: item.transform[5],
        str: item.str,
      }));
    pages.push({ width, items });
  }

  return pages;
}

export async function extractTwoColumns(buffer) {
  const pages = await loadPages(buffer);
  const sidebar = [];
  const main = [];

  for (const page of pages) {
    const splitX = page.width * SIDEBAR_COLUMN_RATIO;
    sidebar.push(...itemsToLines(page.items.filter((item) => item.x < splitX)));
    main.push(...itemsToLines(page.items.filter((item) => item.x >= splitX)));
  }

  return { sidebar, main };
}

export async function extractLines(buffer) {
  const pages = await loadPages(buffer);
  return pages.flatMap((page) => itemsToLines(page.items));
}
