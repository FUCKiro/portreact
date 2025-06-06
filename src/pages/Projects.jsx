import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        I Miei{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Servizi
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Offro una gamma completa di servizi web professionali:
      </p>
      
      <ul className='text-slate-500 mt-4 leading-relaxed list-disc pl-6'>
        <li>Creazione di siti web personalizzati</li>
        <li>Sviluppo di piattaforme e-commerce su misura</li>
        <li>Restyling di siti web esistenti</li>
        <li>Manutenzione e aggiornamento di siti</li>
        <li>Consulenza per la strategia digitale e la presenza online</li>
      </ul>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 cursor-not-allowed opacity-50'
                >
                  Progetti in arrivo
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
