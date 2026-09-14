const SENTENCES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
];

function paragraph(length: number) {
  let out = "";
  let index = 0;
  while (out.length < length) {
    out += (out ? " " : "") + SENTENCES[index % SENTENCES.length];
    index += 1;
  }
  return out.slice(0, Math.max(length, SENTENCES[0].length)).trim();
}

export function loremFor(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return value;
  if (/^https?:\/\//.test(trimmed) || trimmed.startsWith("/")) return trimmed;
  if (/^\d+([.:]\d+)*$/.test(trimmed)) return trimmed;
  if (trimmed.includes("@") && trimmed.includes(".")) return "lorem@ipsum.com";
  if (trimmed.length <= 3) return trimmed;
  if (trimmed.length <= 7) return "Lorem";
  if (trimmed.length <= 14) return "Lorem ipsum";
  if (trimmed.length <= 28) return "Lorem ipsum dolor sit";
  if (trimmed.length <= 55) return SENTENCES[0];
  return paragraph(trimmed.length);
}

export function loremizeStrings<T>(value: T): T {
  if (typeof value === "string") return loremFor(value) as T;
  if (Array.isArray(value)) return value.map((item) => loremizeStrings(item)) as T;
  if (value && typeof value === "object") {
    const next: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(value)) {
      next[key] = loremizeStrings(nested);
    }
    return next as T;
  }
  return value;
}
