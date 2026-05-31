import { Briefcase, GraduationCap } from "lucide-react";
import type { EducationItem, WorkItem } from "../interface";

export const TimelineItem: React.FC<{
  item: WorkItem | EducationItem;
  isEducation: boolean;
  index: number;
}> = ({ item, isEducation, index }) => {
  const isOdd = index % 2 !== 0;
  const baseClasses = "relative mb-12 flex items-center w-full";

  const circleStyle =
    "absolute left-1/2 p-[4px] -ml-5 w-10 h-10 bg-indigo-600 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg z-10 hidden md:block";
  const titleClasses = "text-xl font-bold text-white mb-1";
  const subtitleClasses = "text-gray-400";
  const periodClasses = "text-indigo-400 font-medium text-sm mt-1";
  const descClasses = "text-gray-300 leading-relaxed text-sm";
  const sideClasses =
    "md:w-5/12 w-full p-4 rounded-xl shadow-xl border border-gray-700 bg-gray-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20";

  return (
    <div className={baseClasses + (isOdd ? " justify-start" : " justify-end")}>
      <div className={circleStyle}>
        {isEducation ? (
          <GraduationCap className="w-6 h-6 text-white" />
        ) : (
          <Briefcase className="w-6 h-6 text-white" />
        )}
      </div>

      <div
        className={
          sideClasses +
          (isOdd
            ? " ml-auto md:mr-12 text-left"
            : " mr-auto md:ml-12 text-left")
        }
      >
        <div className="flex gap-4 items-center">
          <img
            src={`/images/${item.logo}`}
            alt={item.description}
            className="h-16 w-16 rounded-md"
          />
          <div>
            <h3 className={titleClasses}>
              {isEducation
                ? (item as EducationItem).school
                : (item as WorkItem).company}
            </h3>
            <p className={subtitleClasses}>
              {isEducation
                ? (item as EducationItem).degree
                : (item as WorkItem).title}
            </p>
            <p className={periodClasses}>
              {isEducation
                ? (item as EducationItem).graduated
                : (item as WorkItem).years}
            </p>
          </div>
        </div>
        <div className="mt-3">
          {isEducation ? (
            <p className={descClasses}>{(item as EducationItem).description}</p>
          ) : (
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
              {(item as WorkItem).descriptions.slice(0, 3).map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
              {(item as WorkItem).descriptions.length > 3 && (
                <li className="font-semibold">... and more.</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
