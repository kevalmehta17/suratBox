import PropTypes from "prop-types";

const Input = ({ ...props }) => {
  return (
    <div className="relative mb-6">
      <input
        {...props}
        className="w-full pl-[2.5em] pr-3 py-2 bg-gray-800 opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
      />
    </div>
  );
};

Input.propTypes = {
  // Only props related to input remain
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
