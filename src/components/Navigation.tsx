import { Menu, X } from "lucide-react";
import ScrollLink from "../utils/ScrollLink";
import { portfolioData } from "../data/portfolioData";
import { useCallback, useEffect, useState } from "react";

interface NavItem {
  id: string;
  name: string;
}

const navItems: NavItem[] = [
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      setIsScrolled(window.scrollY > 50);

      // Active link highlighting
      let current = 'hero';
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - 70) {
          current = item.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id: string) => `
    text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium
    ${activeSection === id ? 'bg-indigo-600 text-white shadow-md' : ''}
  `;
  const mobileLinkClass = (id: string) => `
    ${navLinkClass(id)} block text-base font-medium transition-all duration-200
  `;

  return (
    <header className={`bg-gray-800/80 backdrop-blur-sm fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : ''}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ScrollLink to="#hero" className="text-white font-bold text-xl hover:text-indigo-400 transition-colors">
              {portfolioData.main.name}
            </ScrollLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map(item => (
                <ScrollLink key={item.id} to={`#${item.id}`} className={navLinkClass(item.id)}>
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
          {navItems.map(item => (
            <ScrollLink key={item.id} to={`#${item.id}`} className={mobileLinkClass(item.id)} onClick={toggleMenu}>
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </header>
  );
};