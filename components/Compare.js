import React from 'react';
import PropTypes from 'prop-types';

const Compare = ({react, demo}) => {

	const reactButton = `bg-react text-reactBg`
	const vanillaButton = `bg-black text-vanilla`

	return (
		<div className={`w-1/2 ${react ? "bg-reactBg text-react" : "bg-vanilla text-black"}`}>
			<div className={"text-center"}>
				<h2>{react ? 'react' : 'vanilla'}</h2>
			</div>
			<a className={`p-5 ${react ? reactButton : vanillaButton} `} href={demo} target={"_blank"} rel={"noreferrer noopener"}>Demo</a>
		</div>
	);
};

Compare.propTypes = {
	react: PropTypes.boolean,
	demo: PropTypes.string.isRequired
};

Compare.defaultProps = {
	react: false
}

export default Compare;