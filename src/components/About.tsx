import { MapPin } from "lucide-react";
import { usePortfolioStore } from "../store/usePortfolioStore";
import { SectionTitle } from "./SectionTitle";

export const About: React.FC = () => {
  const { fullname, image, bios, bios2, address } = usePortfolioStore(
    (state) => state.data.main
  );
  const bioText = bios;
  // const bioText = [...bios, ...bios2]
  //   .filter((line) => line.trim() !== "My daily tasks are to: ")
  //   .join(" ");

  const getJobDuties = () => {
    return bios2
      .filter((line: string) => line.startsWith("- "))
      .map((line: string, index: number) => (
        <li key={index} className="text-gray-400 list-disc list-inside ml-4">
          {line.substring(2)}
        </li>
      ));
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" id="about-title" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
            <img
              src={`/me/images/` + image}
              alt={`A portrait of ${fullname}`}
              className="rounded-full w-48 h-48 object-cover shadow-2xl border-4 border-indigo-600/50 mb-6"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://placehold.co/400x400/374151/d1d5db?text=Profile";
              }}
            />
            <h3 className="text-2xl font-bold text-white mb-2">{fullname}</h3>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2 text-indigo-400" />
              <span>
                {address.city}, {address.country}
              </span>
            </div>
            {/* <a
              href={address.gmaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm mt-1 flex items-center"
            >
              <Globe className="w-3 h-3 mr-1" /> View on Map
            </a> */}
          </div>
          <div className="md:col-span-2 md:py-4">
            {/* <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              My Story
            </h3> */}
            <p className="mb-6 text-gray-300 leading-relaxed">{bioText}</p>

            <h4 className="text-xl font-semibold text-white mb-3">
              Responsibilities:
            </h4>
            <ul className="space-y-2 mb-6 ml-4">{getJobDuties()}</ul>

            {/* <h4 className="text-xl font-semibold text-white mb-3">
              Key Technical Insights:
            </h4>
            <div className="text-gray-400 border border-gray-700 rounded-xl p-4 bg-gray-800/50">
              {bios3[1].substring("Skills in Software Development: ".length)}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
