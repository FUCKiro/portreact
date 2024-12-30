import { Link } from "react-router-dom";
import { linkedin } from "../assets/icons";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          {t.footer.copyright}
        </p>

        <div className='flex gap-3 justify-center items-center'>
          <Link to="https://www.linkedin.com/in/fabio-la-rocca-582aba43" target='_blank'>
            <img
              src={linkedin}
              alt="LinkedIn"
              className='w-6 h-6 object-contain'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
