// readability-score: Flesch Reading Ease adapted for PT-BR
function countSyllables(word: string): number {
  const w = word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const groups = w.match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
}

export interface ReadabilityResult {
  sentences: number;
  words: number;
  syllables: number;
  fleschPt: number;
  level: string;
}

export function fleschPt(text: string): ReadabilityResult {
  const sentences = (text.match(/[.!?]+/g) ?? []).length || 1;
  const words = text.match(/[\p{L}]+/gu) ?? [];
  const wordCount = words.length || 1;
  const syllables = words.reduce((a, w) => a + countSyllables(w), 0);
  // PT-BR adapted Flesch (Martins et al.)
  const score = 248.835 - 1.015 * (wordCount / sentences) - 84.6 * (syllables / wordCount);
  const level = classify(score);
  return { sentences, words: wordCount, syllables, fleschPt: Math.round(score * 100) / 100, level };
}

function classify(score: number): string {
  if (score >= 75) return "muito fácil";
  if (score >= 50) return "fácil";
  if (score >= 25) return "difícil";
  return "muito difícil";
}

export default fleschPt;
