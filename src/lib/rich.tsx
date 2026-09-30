import { Fragment } from "react";

/** Renders `**trecho**` as <strong>, keeping the rest of the text untouched. */
export function rich(text: string) {
  if (!text.includes("**")) return text;
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>,
  );
}

/** Strips the `**` markers (for keys, alt text and plain-text uses). */
export function plain(text: string) {
  return text.replaceAll("**", "");
}
