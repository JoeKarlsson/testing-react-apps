const React = require('react');
const multiply = require('../multiply');

const Button = (props) => {

	const { alertNumber } = props;

  return (
		<button
			className="Button-Bad"
			onClick={alertNumber.bind(this, multiply(3, 2))}
		>
	    Multiply
		</button>
  );
};

export default Button;
