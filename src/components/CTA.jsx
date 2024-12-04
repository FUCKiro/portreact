import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Hai un progetto in mente? <br className='sm:block hidden' />
        Realizziamolo insieme!
      </p>
      <Link to='/contact' className='btn'>
        Contattami
      </Link>
    </section>
  );
};

export default CTA;
