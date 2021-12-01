import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
	return (
		<div className={"container text-center"}>
			By <a href="https://dom-the-dev.vercel.app/" target={"_blank"} rel={"noreferrer"}>
			dom the dev
		</a>
		</div>
	);
};

Footer.propTypes = {};

export default Footer;