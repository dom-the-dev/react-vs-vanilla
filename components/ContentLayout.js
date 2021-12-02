import React from 'react';
import PropTypes from 'prop-types';

const ContentLayout = ({children}) => {
	return (
		<div className="container lg:max-w-3xl px-4 md:px-2 py-7 px-2">
			{children}
		</div>
	);
};

ContentLayout.propTypes = {

};

export default ContentLayout;