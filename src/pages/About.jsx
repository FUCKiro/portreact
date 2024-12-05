import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Ciao, sono{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Fabio
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Mi chiamo Fabio e sono uno sviluppatore web dal 2020. La mia passione è trasformare idee in esperienze digitali funzionali e coinvolgenti.
        </p>
        <p>
          Mi occupo di progettare e realizzare siti web personalizzati e piattaforme e-commerce, mettendo sempre al centro le esigenze del cliente e degli utenti finali. Che si tratti di un sito vetrina per la tua attività o di un e-commerce per vendere online, il mio obiettivo è offrire soluzioni che combinano design moderno, funzionalità avanzate e performance eccellenti.
        </p>
        <p>
          Con ogni progetto, porto esperienza, creatività e dedizione per garantire un risultato che faccia davvero la differenza.
        </p>
        <p>
          Se hai un'idea o un progetto in mente, sono qui per aiutarti a realizzarlo.
        </p>
        
        <div className='mt-8 flex flex-col gap-3'>
          <h3 className='text-xl font-semibold'>Competenze Tecniche:</h3>
          <ul className='list-disc ml-5 space-y-2 text-slate-500'>
            <li>Sviluppo Frontend: HTML5, CSS3, JavaScript (ES6+), framework come React o Vue.js.</li>
            <li>Gestione CMS: WordPress (temi, plugin, personalizzazioni), Shopify, Magento.</li>
            <li>E-commerce: Configurazione, ottimizzazione e integrazione di soluzioni per negozi online.</li>
            <li>Responsive Design: Creazione di interfacce ottimizzate per dispositivi mobili e desktop.</li>
            <li>SEO Tecnico: Ottimizzazione per i motori di ricerca, miglioramento della velocità e della struttura del sito.</li>
            <li>Version Control: Utilizzo di Git e piattaforme come GitHub o GitLab.</li>
          </ul>
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Le mie competenze</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Esperienza Lavorativa</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Ho collaborato con diverse realtà, sviluppando competenze e lavorando in team. Ecco il mio percorso:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
