/** Archive fields are plain text, including inside HTML attributes. */
export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

/** Render HTTPS links in résumé entries as safe, clickable links. */
export function linkifyHttps(value: string) {
  const pattern = /https:\/\/[^\s<>"']+/g;
  let result = "";
  let cursor = 0;
  for (const match of value.matchAll(pattern)) {
    const raw = match[0];
    const trailing = raw.match(/[.,，。!！?？:：;；)）】]+$/u)?.[0] ?? "";
    const address = trailing ? raw.slice(0, -trailing.length) : raw;
    let href: string;
    try {
      const url = new URL(address);
      if (url.protocol !== "https:") continue;
      href = url.href;
    } catch {
      continue;
    }
    const start = match.index!;
    result += escapeHtml(value.slice(cursor, start));
    result += `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(address)}</a>${escapeHtml(trailing)}`;
    cursor = start + raw.length;
  }
  return result ? result + escapeHtml(value.slice(cursor)) : escapeHtml(value);
}
