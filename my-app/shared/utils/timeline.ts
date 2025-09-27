import { TimelineItem } from "../constants/timeline";

export function extractYear(displayDate?: string): string {
  if (!displayDate) return "기타";
  const m = displayDate.match(/\b(20\d{2}|19\d{2})\b/);
  return m ? m[1] : "기타";
}

export function sortByDateDesc(a: TimelineItem, b: TimelineItem) {
  const getKey = (x: TimelineItem) => x.start || x.end || x.displayDate || "";
  return getKey(a) < getKey(b) ? 1 : getKey(a) > getKey(b) ? -1 : 0;
}
