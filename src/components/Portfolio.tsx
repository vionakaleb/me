import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { useCallback, useState } from "react";
import type { PortfolioItem } from "../interface";
import { ArrowLeft, ArrowRight, Github, Link, X } from "lucide-react";

export const Portfolio: React.FC = () => {
  const portfolioData = usePortfolioStore((state) => state.data.portfolio);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);

  const projects: PortfolioItem[] = portfolioData.projects || [];

  const openModal = useCallback((index: number) => {
    setInitialSlideIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const sectionTitle = "My Work & Projects";

  return (
    <section id="portfolio" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {sectionTitle}
        </h2>

        {/* <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">
          Web Development Projects
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project: PortfolioItem, index: number) => (
            <div
              key={`web-${index}`}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl group border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              <img
                src={`/me/images/portfolio/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                onClick={() => openModal(index)}
              />
              <div className="p-6">
                <div onClick={() => openModal(index)}>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technology.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="bg-indigo-600/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start gap-4 mt-4 border-t pt-4 border-gray-700">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-white transition-colors flex items-center"
                      title="Live Demo"
                    >
                      <Link className="w-5 h-5 mr-1" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-white transition-colors flex items-center"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5 mr-1" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-3">
          Visual Portfolio Gallery (Click to View Fullscreen)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project: PortfolioItem, index: number) => (
            <div
              key={`img-${index}`}
              className="group relative cursor-pointer rounded-xl overflow-hidden shadow-xl"
              onClick={() => openModal(index)}
            >
              <img
                src={getPlaceholderImage(project.title)}
                alt={project.title}
                className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Monitor className="w-6 h-6 text-indigo-400 mb-1" />
                <p className="text-sm font-semibold text-white">
                  {project.title}
                </p>
                <p className="text-xs text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Swiper Slideshow */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            initialSlide={initialSlideIndex}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{ clickable: true, type: "fraction" }}
            keyboard={true}
            className="w-full max-w-6xl h-full max-h-[90vh]"
            loop={true}
            parallax
            zoom
          >
            {projects.map((project: PortfolioItem, index: number) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="h-full w-full flex items-center justify-center relative">
                  <img
                    src={`/me/images/portfolio/${project.image}`}
                    alt={project.title}
                    className="max-h-[80vh] max-w-full object-contain shadow-2xl rounded-lg"
                  />

                  <div className="absolute bottom-0 text-center w-full p-4">
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-400">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 text-sm mt-1 inline-flex items-center"
                      >
                        <Link className="w-4 h-4 mr-1" /> View Live Project
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons in Swiper */}
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 text-white cursor-pointer hover:bg-white/40 transition hidden md:block">
              <ArrowLeft className="w-6 h-6" />
            </div>
            <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full bg-white/20 text-white cursor-pointer hover:bg-white/40 transition hidden md:block">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Swiper>
        </div>
      )}
    </section>
  );
};
