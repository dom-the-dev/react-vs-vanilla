import React from 'react';
import Layout from "../components/Layout";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkCold} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const SimpleCounter = () => {
	const reactString = 'function App() {\n' +
		'\tconst [counter, setCounter] = useState(0);\n' +
		'\n' +
		'\tconst increment = () => {\n' +
		'\t\tsetCounter(counter + 1)\n' +
		'\t}\n' +
		'\n' +
		'\tfunction decrement() {\n' +
		'\t\tsetCounter(counter - 1)\n' +
		'\t}\n' +
		'\n' +
		'\tfunction reset() {\n' +
		'\t\tsetCounter(0)\n' +
		'\t}\n' +
		'\n' +
		'\treturn (\n' +
		'\t\t<div className="wrapper">\n' +
		'\t\t\t<h1>Counter</h1>\n' +
		'\t\t\t<div>\n' +
		'\t\t\t\t<span id="counter" className="counter">{counter}</span>\n' +
		'\t\t\t</div>\n' +
		'\n' +
		'\t\t\t<div className="button-wrapper">\n' +
		'\t\t\t\t<button onClick={() => increment()} className="button">+</button>\n' +
		'\t\t\t\t<button onClick={() => reset()} className="button">Reset</button>\n' +
		'\t\t\t\t<button onClick={() => decrement()} className="button">-</button>\n' +
		'\t\t\t</div>\n' +
		'\t\t</div>\n' +
		'\t);\n' +
		'}';

	const vanillaString = 'const increment = document.getElementById(\'increment\')\n' +
		'const reset = document.getElementById(\'reset\')\n' +
		'const decrement = document.getElementById(\'decrement\')\n' +
		'const counter = document.getElementById(\'counter\')\n' +
		'let number = parseInt(counter.innerText);\n' +
		'\n' +
		'increment.addEventListener(\'click\', function (e) {\n' +
		'\te.preventDefault()\n' +
		'\tnumber += 1\n' +
		'\tcounter.innerText = number\n' +
		'})\n' +
		'\n' +
		'decrement.addEventListener(\'click\', function (e) {\n' +
		'\te.preventDefault()\n' +
		'\tnumber -= 1\n' +
		'\tcounter.innerText = number\n' +
		'})\n' +
		'\n' +
		'reset.addEventListener(\'click\', function (e) {\n' +
		'\te.preventDefault()\n' +
		'\tnumber = 0\n' +
		'\tcounter.innerText = number\n' +
		'})'

	return (
		<Layout title={"Simple Counter"}>
			<div className={"flex flex-col md:flex-row"}>
				<div className={"container react"}>
					<h1>React</h1>
					<SyntaxHighlighter showLineNumbers={true} language="javascript" style={coldarkDark}>
						{reactString}
					</SyntaxHighlighter>
				</div>
				<div className={"container react"}>
					<h1>Vanilla</h1>
					<SyntaxHighlighter language="javascript" style={coldarkCold}>
						{vanillaString}
					</SyntaxHighlighter>
				</div>
			</div>
		</Layout>
	);
};

export default SimpleCounter;