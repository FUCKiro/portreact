import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiencesData = {
  it: [
      {
          title: "Visual e Business Specialist",
          company_name: "Apple",
          date: "2010 - 2020",
          points: [
              "Durante la mia esperienza decennale in Apple, ho sviluppato competenze nella gestione del visual merchandising e nelle strategie di vendita, lavorando a stretto contatto con i clienti per offrire soluzioni su misura.",
              "Ho acquisito una profonda conoscenza dell'esperienza utente e dei processi aziendali, elementi che oggi applico nello sviluppo dei miei progetti web."
          ],
      },
      {
          title: "Sviluppatore Web",
          company_name: "Freelance",
          date: "2020 - Presente",
          points: [
              "Da oltre 4 anni mi dedico alla creazione di siti web e piattaforme e-commerce.",
              "Le mie competenze includono lo sviluppo frontend e backend, la gestione di CMS, l'ottimizzazione SEO tecnica e il design responsive.",
              "Collaboro con aziende e professionisti per realizzare soluzioni digitali che soddisfano le loro esigenze e superano le aspettative."
          ],
      }
  ],
  en: [
      {
          title: "Visual and Business Specialist",
          company_name: "Apple",
          date: "2010 - 2020",
          points: [
              "During my decade-long experience at Apple, I developed skills in visual merchandising management and sales strategies, working closely with customers to provide tailored solutions.",
              "I gained deep knowledge of user experience and business processes, elements that I now apply in developing my web projects."
          ],
      },
      {
          title: "Web Developer",
          company_name: "Freelance",
          date: "2020 - Present",
          points: [
              "For over 4 years, I've been dedicated to creating websites and e-commerce platforms.",
              "My skills include frontend and backend development, CMS management, technical SEO optimization, and responsive design.",
              "I collaborate with companies and professionals to create digital solutions that meet their needs and exceed expectations."
          ],
      }
  ]
};

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projectsData = {
  it: [
      {
          iconUrl: estate,
          theme: 'btn-back-blue',
          name: 'Web Design',
          description: 'Progettazione e realizzazione di siti web con particolare attenzione al design, all\'usabilità e all\'esperienza utente.',
          link: '#',
      },
      {
          iconUrl: nextjs,
          theme: 'btn-back-green',
          name: 'Sviluppo Web',
          description: 'Sviluppo di applicazioni web moderne e responsive utilizzando le più recenti tecnologie frontend e backend.',
          link: '#',
      },
      {
          iconUrl: shopify,
          theme: 'btn-back-pink',
          name: 'eCommerce',
          description: 'Creazione di negozi online completi e personalizzati, con focus sulla user experience e sulla conversione.',
          link: '#',
      }
  ],
  en: [
      {
          iconUrl: estate,
          theme: 'btn-back-blue',
          name: 'Web Design',
          description: 'Design and development of websites with special attention to design, usability, and user experience.',
          link: '#',
      },
      {
          iconUrl: nextjs,
          theme: 'btn-back-green',
          name: 'Web Development',
          description: 'Development of modern and responsive web applications using the latest frontend and backend technologies.',
          link: '#',
      },
      {
          iconUrl: shopify,
          theme: 'btn-back-pink',
          name: 'eCommerce',
          description: 'Creation of complete and customized online stores, focusing on user experience and conversion.',
          link: '#',
      }
  ]
};