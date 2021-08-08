import PropTypes from "prop-types";

const Exact = ({ person }) => {
  return (
    <div>
      <h2>{person?.name}</h2>
      <h3>{person?.age}</h3>
      {person.admin && <h3>Admin</h3>}
    </div>
  );
};

Exact.propTypes = {
  person: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    admin: PropTypes.bool,
  }).isRequired,
};

export default Exact;
