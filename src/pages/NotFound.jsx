import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const { language } = useLanguage();
  const text = language === 'it' ? {
    title: 'Pagina non trovata',
    message: 'La pagina che stai cercando non esiste.',
    button: 'Torna alla home'
  } : {
    title: 'Page not found',
    message: 'The page you are looking for does not exist.',
    button: 'Back to home'
  };

  return (
    <section className='max-container'>
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)]'>
        <h1 className='head-text mb-4'>{text.title}</h1>
        <p className='text-slate-500 text-xl mb-8'>{text.message}</p>
        <Link 
          to='/' 
          className='btn'
        >
          {text.button}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;