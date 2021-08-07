import PropTypes from "prop-types";

const OneChild = ({ children }) => {
  return <div>{children}</div>;
};

OneChild.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OneChild;
