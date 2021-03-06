import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
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
