import PropTypes from 'prop-types';

export const Button = ({ children, color, ...props }) => {
  return (
    <button type='button' {...props} className={`block ${color} w-[196px] mx-auto py-3.5 rounded-regular shadow-regular text-lg uppercase font-semibold`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string
}