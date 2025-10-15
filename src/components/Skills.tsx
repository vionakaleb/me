import { Code, GitBranch, Globe, Zap } from "lucide-react";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { SectionTitle } from "./SectionTitle";
import React from "react";
import type { SkillItem } from "../interface";

export const Skills: React.FC = () => {
    const skills = usePortfolioStore(state => state.data.resume.skills);

    const getIconForSkill = (skillName: string) => {
        const lowerName = skillName.toLowerCase();
        if (lowerName.includes('react') || lowerName.includes('redux')) return <Code className="text-indigo-400" />;
        if (lowerName.includes('type') || lowerName.includes('angular') || lowerName.includes('vue') || lowerName.includes('next')) return <Zap className="text-indigo-400" />;
        if (lowerName.includes('tailwind') || lowerName.includes('scss')) return <GitBranch className="text-indigo-400" />;
        if (lowerName.includes('graphql') || lowerName.includes('firebase')) return <Globe className="text-indigo-400" />;
        return <Code className="text-indigo-400" />;
    };

    return (
        <section id="skills" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Core Technologies & Skills" id="skills-title" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill: SkillItem, index: number) => (
                        <div key={index} className="flex flex-col items-start p-5 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-300 group">
                            <div className="w-full flex justify-between items-center mb-3">
                                <div className="p-2 bg-indigo-900/50 rounded-lg group-hover:bg-indigo-700/50 transition-colors">
                                    {React.cloneElement(getIconForSkill(skill.name), { className: 'w-8 h-8' })}
                                </div>
                                <span className="text-xs font-semibold text-white bg-indigo-600 px-3 py-1 rounded-full">{skill.level}</span>
                            </div>
                            <span className="font-semibold text-lg text-white">{skill.name}</span>
                            <div className="w-full h-2 bg-gray-600 rounded-full mt-2">
                                <div 
                                    className="h-2 bg-indigo-500 rounded-full transition-all duration-1000" 
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};