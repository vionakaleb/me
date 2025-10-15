import { usePortfolioStore } from "../store/usePortfolioStore";
import ScrollLink from "../utils/ScrollLink";

export const Hero: React.FC = () => {
  const { name, description, bg, resume } = usePortfolioStore(
    (state) => state.data.main
  );

  const heroStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(17, 24, 39, 0), rgba(17, 24, 39, 1)), url('/me/images/${bg}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center"
      style={heroStyle}
    >
      <div className="max-w-4xl mx-auto px-4 p-8 rounded-xl backdrop-blur-sm bg-gray-900/40 border border-indigo-700/50 shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fadeInDown">
          Hi, I'm *{name}*
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fadeInUp delay-200">
          {description} Building Modern & Accessible Web Apps.
        </p>
        <div className="flex justify-center gap-4">
          <ScrollLink
            to="#portfolio"
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/40"
          >
            View My Work
          </ScrollLink>
          <a
            href={`/me/${resume}`}
            download
            className="bg-gray-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
