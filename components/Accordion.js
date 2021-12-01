import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Accordion = ({title, children, react}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={`tab`}>
			<button onClick={() => setIsOpen(!isOpen)} className={`font-bold py-3 mt-4 block w-full  border-gray-600 ${react ? 'bg-react' : 'bg-vanilla'}`}>{title}</button>
			<div className={`${isOpen ? 'max-h-auto' : 'max-h-0'} content overflow-hidden transition-all duration-500`}>{children}</div>
		</div>
	);
};

Accordion.propTypes = {};

export default Accordion;