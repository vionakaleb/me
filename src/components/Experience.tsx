import { Briefcase, GraduationCap } from "lucide-react";
import type { EducationItem, WorkItem } from "../interface";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { SectionTitle } from "./SectionTitle";

export const Experience: React.FC = () => {
    const workHistory = usePortfolioStore(state => state.data.resume.work);
    const education = usePortfolioStore(state => state.data.resume.education);

    const TimelineItem: React.FC<{ item: WorkItem | EducationItem, isEducation: boolean, index: number }> = ({ item, isEducation, index }) => {
        const isOdd = index % 2 !== 0;
        const baseClasses = "relative mb-12 flex items-center w-full";
        
        // Dynamic positioning for timeline line and circle
        const circleStyle = "absolute left-1/2 -ml-4 w-8 h-8 bg-indigo-600 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg z-10";
        const titleClasses = "text-xl font-bold text-white mb-1";
        const subtitleClasses = "text-gray-400";
        const periodClasses = "text-indigo-400 font-medium text-sm mt-1";
        const descClasses = "text-gray-300 leading-relaxed text-sm";
        const sideClasses = "md:w-5/12 p-4 rounded-xl shadow-xl border border-gray-700 bg-gray-800 transition-transform duration-300 hover:scale-[1.02]";

        return (
            <div className={baseClasses + (isOdd ? ' justify-start' : ' justify-end')}>
                {/* Timeline Circle */}
                <div className={circleStyle}>
                    {isEducation ? <GraduationCap className="w-4 h-4 text-white" /> : <Briefcase className="w-4 h-4 text-white" />}
                </div>

                {/* Content Panel (Left/Right alternating) */}
                <div className={sideClasses + (isOdd ? ' ml-auto md:mr-12 text-left' : ' mr-auto md:ml-12 text-left')}>
                    <h3 className={titleClasses}>{isEducation ? (item as EducationItem).school : (item as WorkItem).company}</h3>
                    <p className={subtitleClasses}>
                        {isEducation ? (item as EducationItem).degree : (item as WorkItem).title}
                    </p>
                    <p className={periodClasses}>
                        {isEducation ? (item as EducationItem).graduated : (item as WorkItem).years}
                    </p>
                    <div className="mt-3">
                        {isEducation ? 
                            <p className={descClasses}>{(item as EducationItem).description}</p> 
                            : 
                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
                                {(item as WorkItem).descriptions.slice(0, 3).map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                                {(item as WorkItem).descriptions.length > 3 && <li className="font-semibold">... and more.</li>}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="experience" className="py-24 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Career & Education Journey" id="experience-title" />
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-700 hidden md:block"></div>
                    
                    {/* Education Items */}
                    <h3 className="text-2xl font-bold text-indigo-400 text-center mb-8 pt-4">Education</h3>
                    {education.map((edu: EducationItem, index: number) => (
                        <TimelineItem key={`edu-${index}`} item={edu} isEducation={true} index={index + 1} />
                    ))}

                    {/* Work Items */}
                    <h3 className="text-2xl font-bold text-indigo-400 text-center mb-8 pt-12">Work Experience</h3>
                    {workHistory.map((work: WorkItem, index: number) => (
                        <TimelineItem key={`work-${index}`} item={work} isEducation={false} index={workHistory.length - index} />
                    ))}
                </div>
            </div>
        </section>
    );
};