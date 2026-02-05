export const StackStyle: Record<string, string> = {
  date:
    "px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200",
  "Swift":
    "px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200",
  "Swift UI":
    "px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200",
};


export type Tag =
  | {
      type: "stack";
      name: string;
    }
  | {
      type: "date";
      value: string;
    };

export const BusTags: Tag[] = [
  { type: "stack", name: "Swift" },
  { type: "stack", name: "Swift UI" },
  { type: "date", value: "2023.12.12 – 2023.12.25" },
];
