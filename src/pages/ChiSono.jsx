import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiencesData, skills } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

import "react-vertical-timeline-component/style.min.css";

const ChiSono = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {t.about.intro.title}{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Fabio
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        {t.about.intro.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>{t.about.skills.technical.title}</h3>
        
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          {t.about.skills.technical.list.map((skill, index) => (
            <p key={index}>
              <strong>{skill.title}:</strong> {skill.description}
            </p>
          ))}
        </div>

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
        
        <div className='mt-10'>
          <h3 className='subhead-text'>{t.about.skills.soft.title}</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            {t.about.skills.soft.list.map((skill, index) => (
              <p key={index}>
                <strong>{skill.title}:</strong> {skill.description}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>{t.experience.title}</h3>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiencesData[language].map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "#2b77e7",
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

export default ChiSono;