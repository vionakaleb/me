const CONNECTOR_AT_END = /\b(at|of|in|on|the|and|for|to|a|with)$/i;

function hasOpenParenthesis(text) {
  const open = (text.match(/\(/g) || []).length;
  const close = (text.match(/\)/g) || []).length;
  return open > close;
}

export function collapseSpaces(text) {
  return text.replace(/\s+/g, " ").trim();
}

export function joinWrappedParagraphs(physicalLines) {
  const paragraphs = [];

  for (const rawLine of physicalLines) {
    const line = rawLine.trim();
    if (!line) continue;

    const startsNewBlock = /^[-•]/.test(line);
    if (paragraphs.length === 0 || startsNewBlock) {
      paragraphs.push(line);
      continue;
    }

    const previous = paragraphs[paragraphs.length - 1];
    const joinsWithoutSpace = /[-/]$/.test(previous);
    paragraphs[paragraphs.length - 1] = joinsWithoutSpace
      ? previous.slice(0, -1) + line
      : previous + " " + line;
  }

  return paragraphs
    .map((line) => collapseSpaces(line.replace(/^[-•]\s*/, "")))
    .filter(Boolean);
}

export function rejoinWrappedUrls(physicalLines) {
  const out = [];

  for (const rawLine of physicalLines) {
    const line = rawLine.trim();
    const previous = out[out.length - 1];
    const previousIsUrl = previous && /^https?:\/\//i.test(previous);
    const lineIsUrlFragment =
      /^[\w./?=&%#-]+$/.test(line) && !/^https?:/i.test(line);

    if (previousIsUrl && lineIsUrlFragment) {
      out[out.length - 1] = previous + line;
    } else {
      out.push(line);
    }
  }

  return out;
}

export function mergeWrappedListItems(physicalLines) {
  const items = [];

  for (const rawLine of physicalLines) {
    const line = collapseSpaces(rawLine);
    if (!line) continue;

    const previous = items[items.length - 1];
    const looksLikeContinuation =
      /^[(a-z]/.test(line) ||
      (previous && CONNECTOR_AT_END.test(previous)) ||
      (previous && hasOpenParenthesis(previous));

    if (previous && looksLikeContinuation) {
      items[items.length - 1] = collapseSpaces(previous + " " + line);
    } else {
      items.push(line);
    }
  }

  return items;
}
