import PropTypes from "prop-types";

const Input = ({ type, id, classname, placeholder, value }) => {
  return (
    <input
      type={type}
      id={id}
      classname={classname}
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    classname: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string 
};

Input.defaultProps = {
    type: "text",
    id: "default",
    classname: "default",
    placeholder: "default",
    value: "default",

}

export default Input;