import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Ciao sono Fabio
        <br />
        Vieni a scoprire il mio mondo
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Scopri di più su di me, sulla mia storia e sulla passione che mi guida nella creazione di soluzioni digitali su misura
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Scopri di più
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Esplora i progetti che ho realizzato e scopri come trasformo le idee in soluzioni web innovative e funzionali
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Vedi i progetti
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Vuoi collaborare o hai un'idea da realizzare? Contattami e costruiremo insieme qualcosa di straordinario
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contattami
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
