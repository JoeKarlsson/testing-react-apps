
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button/Button';

const alertNumber = (num) => {
	const body = document.getElementById('root');
	const newNum = document.createElement('div');
	newNum.innerHTML = `${num} `
	body.appendChild(newNum);
};

ReactDOM.render((
	<Button alertNumber={alertNumber}/>
), document.getElementById('root'));
