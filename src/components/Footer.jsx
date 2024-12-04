import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />
      <div className='footer-container'>
        <p>
          © 2025 <strong>Fabio La Rocca</strong>. All rights reserved.
        </p>
        <Link to="https://www.linkedin.com/in/fabio-la-rocca-582aba43" target='_blank'>
          <img
            src={socialLinks[2].iconUrl}
            alt="LinkedIn"
            className='w-6 h-6 object-contain'
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
