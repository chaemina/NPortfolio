import { TimelineItem } from "../../constants/timeline";
import TypeBadge from "../atoms/TypeBadge";

export default function TimelineItemCard({ item }: { item: TimelineItem }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-gray-400" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <TypeBadge type={item.type} />
          <span className="font-medium">{item.title}</span>
        </div>
        {item.org && <div className="text-sm text-gray-600">{item.org}</div>}
        {item.displayDate && (
          <div className="text-xs text-gray-500">{item.displayDate}</div>
        )}
        {item.link && (
          <a
            className="text-xs underline text-blue-600 hover:text-blue-800"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            관련 링크
          </a>
        )}
      </div>
    </li>
  );
}
