import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='flex justify-between items-center mb-5'>
      <h1 className='text-2xl text-cyan-900 font-semibold'>{title}</h1>
      <Button color='cyan' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

// 控制传入 props 的类型
Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
};

export default Header;
