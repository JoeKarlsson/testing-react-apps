const React = require('react');
const multiply = require('../multiply');

const Button = (props) => {

	const { alertNumber } = props;

  return (
		<button
			className="Button-Bad"
			onClick={alertNumber(multiply(2, 3))}
		>
	    Multiply
		</button>
  );
};

export default Button;
