import Caption from "./Caption";
import { Tag, StackStyle } from "../../constants/stacks";

export default function StackTag({ tag }: { tag: Tag }) {
  if (tag.type === "date") {
    return (
      <Caption className={StackStyle.date}>
        {tag.value}
      </Caption>
    );
  }

  return (
    <Caption className={StackStyle[tag.name] ?? StackStyle.stack}>
      {tag.name}
    </Caption>
  );
}
