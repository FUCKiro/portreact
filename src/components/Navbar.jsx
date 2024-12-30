import { NavLink } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LanguageSwitch from "./LanguageSwitch";

import { logo } from "../assets/images";

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className='header backdrop-blur-sm bg-white/70 rounded-full px-10 shadow-lg transition-all duration-300'>
      <NavLink to='/' className="hover:scale-110 transition-transform duration-300">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">FL</div>
      </NavLink>
      <nav className='flex text-lg gap-8 font-medium items-center'>
        <NavLink to='/chi-sono' className={({ isActive }) => 
          `${isActive ? 'text-blue-600' : 'text-black'} hover:text-blue-500 transition-colors duration-300`
        }>
          {t.nav.about}
        </NavLink>
        <NavLink to='/servizi' className={({ isActive }) => 
          `${isActive ? 'text-blue-600' : 'text-black'} hover:text-blue-500 transition-colors duration-300`
        }>
          {t.nav.services}
        </NavLink>
        <LanguageSwitch />
      </nav>
    </header>
  );
};

export default Navbar;
