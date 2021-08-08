import PropTypes from "prop-types";

const Shape = ({ person }) => {
  return (
    <div>
      <h2>{person?.name}</h2>
      <h3>{person?.age}</h3>
    </div>
  );
};

Shape.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

export default Shape;
