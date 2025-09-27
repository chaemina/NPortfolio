import { ExperienceType } from "../../constants/experience";

export default function ExperienceItem({ exp }: { exp: ExperienceType }) {
  return (
    <div className="p-12 md:p-20 bg-white dark:bg-gray-800 border-2 border-gray-200 hover:border-black dark:border-gray-700 ">
      <div className="flex flex-col items-center justify-center mb-6 text-center">
        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
          {exp.title}
        </h4>
        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-mono mb-2">
          {exp.year}
        </span>
        {exp.link && (
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 text-sm md:text-base hover:underline"
          >
            바로가기
          </a>
        )}
      </div>

      {/* 상세 내용 */}
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
        {exp.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
