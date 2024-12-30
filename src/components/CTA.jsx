import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const CTA = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='cta'>
      <p className='cta-text'>
        {t.cta.text} <br className='sm:block hidden' />
        {t.cta.subtext}
      </p>
      <Link to='/contact' className='btn'>
        {t.cta.button}
      </Link>
    </section>
  );
};

export default CTA;
