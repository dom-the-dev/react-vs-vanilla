import React from 'react';
import PropTypes from 'prop-types';
import {coldarkDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

const CodeHighlighter = ({code}) => {
	return (
		<SyntaxHighlighter showLineNumbers={true} language="javascript" style={coldarkDark}>
			{code}
		</SyntaxHighlighter>
	);
};

CodeHighlighter.propTypes = {

};

export default CodeHighlighter;