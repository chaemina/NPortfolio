import { TimelineItem } from "../../constants/timeline";
import Caption from "./Caption";

const typeBadge: Record<NonNullable<TimelineItem["type"]>, string> = {
  career:
    "px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200",
  experience:
    "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200",
  award:
    "px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-200",
  qualification:
    "px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200",
  education:
    "px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200",
};

export default function TypeBadge({
  type,
}: {
  type?: TimelineItem["type"];
}) {
  if (!type) return null;
  return <Caption className={typeBadge[type]}>{type}</Caption>;
}
