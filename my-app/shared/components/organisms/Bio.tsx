"use client";

import { useMemo } from "react";
import { TimelineItem } from "../../constants/timeline";
import { extractYear, sortByDateDesc } from "../../utils/timeline";
import TimelineItemCard from "../molecules/TimelineItemCard";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Caption from "../atoms/Caption";

export default function Bio({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  const ordered = useMemo(() => [...items].sort(sortByDateDesc), [items]);

  const grouped = useMemo(() => {
    return ordered.reduce<Record<string, TimelineItem[]>>((acc, cur) => {
      const y = extractYear(cur.displayDate);
      (acc[y] ||= []).push(cur);
      return acc;
    }, {});
  }, [ordered]);

  const years = useMemo(
    () =>
      Object.keys(grouped).sort((a, b) => {
        if (a === "기타") return 1;
        if (b === "기타") return -1;
        return Number(b) - Number(a);
      }),
    [grouped]
  );

  return (
    <section className="mb-[16px] md:mb-[24px]">
      <Title>{title}</Title>
      <div className="space-y-[16px] md:space-y-[24px] mt-[16px] md:mt-[24px]">
        {years.map((year) => (
          <div key={year}>
            {year !== "기타" && (
              <div className="flex items-center gap-3 mb-[16px] md:mb-[24px]">
                <Text className="font-bold">{year}</Text>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}
            <ol className="relative border-l border-gray-200 pl-[16px] md:pl-[24px] space-y-[16px] md:space-y-[24px]">
              {grouped[year].map((item, idx) => (
                <TimelineItemCard key={`${item.title}-${idx}`} item={item} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
