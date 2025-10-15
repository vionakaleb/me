import { Github, Link } from "lucide-react";
import type { ProjectLink } from "../interface";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { SectionTitle } from "./SectionTitle";

export const Portfolio: React.FC = () => {
    const projects = usePortfolioStore(state => state.data.portfolio.project_web);

    return (
        <section id="portfolio" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Selected Web Projects" id="portfolio-title" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: ProjectLink, index: number) => (
                        <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl group border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                                    {project.technology.join(', ')} focused application.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technology.map((tech, i) => (
                                        <span key={i} className="bg-indigo-600/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-start gap-4 mt-4 border-t pt-4 border-gray-700">
                                    {project.url && (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors flex items-center" title="Live Demo">
                                            <Link className="w-5 h-5 mr-1" /> Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors flex items-center" title="Source Code">
                                            <Github className="w-5 h-5 mr-1" /> Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href={usePortfolioStore.getState().data.portfolio.project} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300 inline-flex items-center">
                        View More on Behance &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};