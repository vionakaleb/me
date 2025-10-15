import { Code, Github, Mail } from "lucide-react";
import { usePortfolioStore } from "../store/usePortfolioStore";
import type { SocialLink } from "../interface";

export const Footer: React.FC = () => {
    const socialLinks = usePortfolioStore(state => state.data.main.social);
  
    const getSocialIcon = (name: string) => {
      const lowerName = name.toLowerCase();
      if (lowerName.includes('github')) return <Github className="h-6 w-6" />;
      if (lowerName.includes('linkedin')) return <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>;
      if (lowerName.includes('email')) return <Mail className="h-6 w-6" />;
      return <Code className="h-6 w-6" />; // Default icon
    };
  
    return (
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((link: SocialLink, index: number) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">{link.name}</span>
                {getSocialIcon(link.name)}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            &copy; {new Date().getFullYear()} {usePortfolioStore.getState().data.main.fullname}. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };