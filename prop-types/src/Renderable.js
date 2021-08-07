import PropTypes from "prop-types";

const Renderable = ({ renderable }) => {
  return <div>{renderable}</div>;
};

Renderable.propTypes = {
  renderable: PropTypes.node.isRequired,
};

export default Renderable;
