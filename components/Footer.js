import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
	return (
		<div className={"text-center py-5"}>
			By <a href="https://www.domthedev.com" target={"_blank"} rel={"noreferrer"} className={"no-underline"}>
			<span className={`font-bold`}>dom</span> <span  style={{color: '#00FFD1'}}>the dev</span>
		</a>
		</div>
	);
};

Footer.propTypes = {};

export default Footer;