import PropTypes from "prop-types"

const Button = ({ type, id, value, onClick }) => {
  return (
    <button type={type} id={id} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;