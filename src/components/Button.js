import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'bg-' +
        color +
        '-500 ' +
        'inline-block text-white border-none rounded cursor-pointer no-underline text-sm py-2 px-5 m-1 focus:outline-none'
      }>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'cyan',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
