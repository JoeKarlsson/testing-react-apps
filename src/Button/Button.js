/*
  eslint
	react/jsx-no-bind: 0
*/

import React from 'react';
import PropTypes from 'prop-types';
import multiply from '../multiply';

const Button = (props) => {
	const { alertNumber } = props;

	return (
		<button
			className="Button"
			id="react-button"
			onClick={alertNumber.bind(this, multiply(3, 2))}
		>
			Multiply
		</button>
	);
};

Button.propTypes = {
	alertNumber: PropTypes.func.isRequired,
};

Button.defaultProps = {};

export default Button;
