"use client";

import { useMemo } from "react";
import { TimelineItem } from "../../constants/timeline";
import { extractYear, sortByDateDesc } from "../../utils/timeline";
import TimelineItemCard from "../molecules/TimelineItemCard";

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
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-6">
        {years.map((year) => (
          <div key={year}>
            {year !== "기타" && (
              <div className="flex items-center gap-3 mb-3">
                <div className="text-lg font-bold">{year}</div>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            )}
            <ol className="relative border-l border-gray-200 pl-4 space-y-4">
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
