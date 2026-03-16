export const StackStyle: Record<string, string> = {
  date:
    "px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200",

  Swift:
    "px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200",

  "Swift UI":
    "px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200",

  ReactNative:
    "px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200",

  React:
    "px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200",

  JS:
    "px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200",

  TS:
    "px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200",

  "styled-components":
    "px-2 py-0.5 rounded-full bg-pink-100 text-pink-800 border border-pink-200",

  tailwind:
    "px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 border border-teal-200",

  axios:
    "px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200",

  "TanStack Query":
    "px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 border border-pink-200",

  "Redux Toolkit":
    "px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200",
  
  Jotai:
    "px-2 py-0.5 rounded-full bg-black text-white border border-violet-200",
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

export const GardenTags: Tag[] = [
  { type: "stack", name: "React" },
  { type: "stack", name: "JS" },
  { type: "stack", name: "tailwind" },
  { type: "stack", name: "axios" },
  { type: "stack", name: "TanStack Query" },
    { type: "stack", name: "Jotai" },
  { type: "date", value: "2023.09.26 ~ 2023.11.11" },
];

export const BusTags: Tag[] = [
  { type: "stack", name: "Swift" },
  { type: "stack", name: "Swift UI" },
  { type: "date", value: "2023.12.12 – 2023.12.25" },
];

export const MaeumTags: Tag[] = [
  { type: "stack", name: "ReactNative" },
  { type: "stack", name: "JS" },
  { type: "stack", name: "tailwind" },
  { type: "stack", name: "axios" },
  { type: "stack", name: "TanStack Query" },
    { type: "stack", name: "Redux Toolkit" },
  { type: "date", value: "2024.03.29 – 2024.08.27" },
];

export const WasteTags: Tag[] = [
  { type: "stack", name: "ReactNative" },
  { type: "stack", name: "TS" },
  { type: "stack", name: "styled-components" },
  { type: "stack", name: "axios" },
  { type: "stack", name: "TanStack Query" },
    { type: "stack", name: "Redux Toolkit" },
  { type: "date", value: "2024.06.01 – 2024.09.13" },
];
