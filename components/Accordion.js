import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Accordion = ({title, children, type}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={`tab`}>
			<button onClick={() => setIsOpen(!isOpen)} className={`font-bold py-3 mt-4 block w-full  border-gray-600 ${type === "react" ? 'bg-react' : type === 'vanilla' ? 'bg-vanilla' : 'bg-reactBg text-white'}`}>{title}</button>
			<div className={`${isOpen ? 'max-h-auto' : 'max-h-0'} content overflow-hidden transition-all duration-500`}>{children}</div>
		</div>
	);
};

Accordion.propTypes = {
	type: PropTypes.oneOf(["react", "vanilla", "other"])
};

export default Accordion;