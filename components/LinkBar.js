import React from 'react';
import PropTypes from 'prop-types';

const LinkBar = ({links}) => {
	const renderLinks = () => {
		return links.map((link, index) => (
			<a key={link.platform + index} href={`${link.link}`} target={"_blank"} rel={"noreferrer"}>
				{link.platform}
			</a>
		))
	}

	return (
		<div className={"flex justify-around my-2"}>
			{renderLinks()}
		</div>
	);
};

LinkBar.propTypes = {
	links: PropTypes.array.isRequired
};

export default LinkBar;