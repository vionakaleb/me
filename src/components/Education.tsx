import type { EducationItem } from "../interface";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { SectionTitle } from "./SectionTitle";
import { TimelineItem } from "./TimelineItem";

export const Education: React.FC = () => {
  const education = usePortfolioStore((state) => state.data.resume.education);

  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education Journey" id="education-title" />
        <div className="relative">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-700 hidden md:block"></div>
          {education.map((edu: EducationItem, index: number) => (
            <TimelineItem
              key={`edu-${index}`}
              item={edu}
              isEducation={true}
              index={education.length - index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
