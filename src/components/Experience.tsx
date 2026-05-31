import type { WorkItem } from "../interface";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { SectionTitle } from "./SectionTitle";
import { TimelineItem } from "./TimelineItem";

export const Experience: React.FC = () => {
  const workHistory = usePortfolioStore((state) => state.data.resume.work);

  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Career Experience" id="experience-title" />
        <div className="relative">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-700 hidden md:block"></div>
          {workHistory.map((work: WorkItem, index: number) => (
            <TimelineItem
              key={`work-${index}`}
              item={work}
              isEducation={false}
              index={workHistory.length - index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
