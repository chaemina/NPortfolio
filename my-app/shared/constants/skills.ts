export interface SkillTag {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}

export const tags1: SkillTag[] = [
  { label: 'vite', bgColor: 'bg-purple-600', textColor: 'text-white' },
  { label: 'React', bgColor: 'bg-blue-200', textColor: 'text-blue-700' },
  { label: "React Native", bgColor: "bg-blue-200", textColor: "text-blue-700" },
  { label: 'Next.js', bgColor: 'bg-black', textColor: 'text-white' },
  { label: 'Swift', bgColor: 'bg-orange-500', textColor: 'text-white' },
  { label: 'Swift UI', bgColor: 'bg-blue-400', textColor: 'text-black' },
  { label: "JavaScript", bgColor: "bg-yellow-200", textColor: "text-black" },
  { label: 'TypeScript', bgColor: 'bg-blue-600', textColor: 'text-white' },
  { label: "React Query", bgColor: "bg-pink-500", textColor: "text-white" },
  { label: 'axios', bgColor: 'bg-yellow-200', textColor: 'text-yellow-700' },
  { label: "Redux-toolkit", bgColor: "bg-purple-200", textColor: "text-black" },
  { label: 'Jotai', bgColor: 'bg-black', textColor: 'text-white' },
  { label: 'tailwindcss', bgColor: 'bg-sky-500', textColor: 'text-white' },
  { label: 'styledcomponent', bgColor: 'bg-pink-200', textColor: 'text-pink-600' },
  { label: 'vercel', bgColor: 'bg-white', textColor: 'text-black', borderColor:'border-black'},
];

export const tags2: SkillTag[] = [
  { label: 'github', bgColor: 'bg-black', textColor: 'text-white' },
  { label: 'figma', bgColor: 'bg-green-600', textColor: 'text-white' },
  { label: 'notion', bgColor: 'bg-white', textColor: 'text-black', borderColor:'border-black'},
  { label: 'slack', bgColor: 'bg-blue-600', textColor: 'text-white' },
];
