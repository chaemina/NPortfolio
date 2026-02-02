import { TimelineItem } from "../../constants/timeline";
import TypeBadge from "../atoms/TypeBadge";
import Text from "../atoms/Text";
import Caption from "../atoms/Caption";

export default function TimelineItemCard({ item }: { item: TimelineItem }) {
  return (
    <li className="relative pl-[16px] md:pl-[24px]">
      <span className="absolute left-0 top-2 block h-2 w-2 rounded-full bg-gray-400" />
      <div className="flex flex-col gap-2 md:gap-1">
        <div className="flex items-center gap-2">
          <TypeBadge type={item.type} />
          <Text>{item.title}</Text>
        </div>
        {item.org && <Caption className="text-gray-600">{item.org}</Caption>}
        {item.displayDate && (
          <Caption className="text-gray-500">{item.displayDate}</Caption>
        )}
      </div>
    </li>
  );
}
