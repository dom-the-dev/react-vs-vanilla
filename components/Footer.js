import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
	return (
		<div className={"text-center"}>
			By <a href="https://dom-the-dev.vercel.app/" target={"_blank"} rel={"noreferrer"}>
			<span className={`font-bold`}>dom</span> <span  style={{color: '#00FFD1'}}>the dev</span>
		</a>
		</div>
	);
};

Footer.propTypes = {};

export default Footer;