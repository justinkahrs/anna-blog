// src/reading-time.ts
export function getReadingTime(text: string): string {
  if (!text) return "1 min read";

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 225)); // ~225 wpm

  return `${minutes} min read`;
}