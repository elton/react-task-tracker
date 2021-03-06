import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <header className='flex justify-between items-center mb-5'>
      <h1>{title}</h1>
      <Button color='cyan' text='Add' onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

// 控制传入 props 的类型
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
