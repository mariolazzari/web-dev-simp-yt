import PropTypes from "prop-types";

const Component = ({ name, age }) => {
  return (
    <div>
      In 5 years {name} wiil be {age + 5} years old
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Component;
