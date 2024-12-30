import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projectsData } from "../constants";
import { arrow } from "../assets/icons";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Servizi = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {t.services.title}{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {t.nav.services}
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='text-lg leading-relaxed'>
          {t.services.intro}
        </p>
      </div>

      <div className='mt-12 flex flex-col gap-12'>
        <div className='flex flex-col gap-8'>
          <h2 className='subhead-text'>{t.services.mainServices}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projectsData[language].map((project) => (
              <div 
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300' 
                key={project.name}
              >
                <div className='block-container w-12 h-12 mb-5'>
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>

                <h3 className='text-2xl font-bold mb-3 text-slate-800'>
                  {project.name}
                </h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>
                  {project.description}
                </p>
                <div className='mt-auto'>
                  <Link
                    to='/contact'
                    className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300'
                  >
                    {t.services.requestQuote}
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='subhead-text'>{t.services.whyChooseMe.title}</h2>
          <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {t.services.whyChooseMe.reasons.map((reason, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-3 text-slate-800'>{reason.title}</h3>
                <p className='text-slate-600'>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className='border-slate-200 mt-16' />

      <CTA />
    </section>
  );
};

export default Servizi;