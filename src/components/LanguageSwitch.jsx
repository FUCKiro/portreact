import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-white/80 hover:bg-white/90 transition-colors duration-300 text-sm font-medium shadow-sm"
    >
      {language === 'it' ? '🇬🇧 EN' : '🇮🇹 IT'}
    </button>
  );
};

export default LanguageSwitch;