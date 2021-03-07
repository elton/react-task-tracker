import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='mt-5  text-center text-sm text-gray-700'>
      <p>Copyright &copy; 2021</p>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
