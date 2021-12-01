import React from 'react';
import Layout from "../components/Layout";
import CodeHighlighter from "../components/CodeHighlighter";
import Accordion from "../components/Accordion";
import ContentLayout from "../components/ContentLayout";
import LinkBar from "../components/LinkBar";

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

	const vanillaLinks = [
		{
			codepen: "",
		},
		{
			github: "",
		},
		{
			demo: "",
		},
	]

	const reactLinks = [
		{
			codepen: "",
		},
		{
			github: "",
		},
		{
			demo: "",
		},
	]

	return (
		<Layout title={"Counter App built with React vs. pure Javascript"}>
			<ContentLayout>

				<h3>
					React-VS-Vanilla Series
				</h3>

				<p>
					Hi everyone and welcome to the first episode of the <b>React VS. Vanilla JS</b> series, where we are going
					to build different applications in two ways.
				</p>
				<p>
					As the title already suggests, we will use <a href="http://vanilla-js.com/" title={"vanilla js"}>vanilla
					javascript</a> on the one hand and the javascript
					framework <a href="https://reactjs.org/" title={"react"}>react</a> on the other.
				</p>
				<p>
					<i>For those who are new to javascript, <b>vanilla js</b> means not more than using pure javascript without any framework or library.</i>
				</p>

				<h3>
					The Counter App
				</h3>

				<p>
					For this very <b>first project</b>, i wanted to keep things simple. So what we are going to build is
					a classic counter app. The app will display a big number which is our counter.
					</p>

				<p>
					We are going to have three buttons which can affect the state of our counter as followed:

					<ul>
						<li>Increase</li>
						<li>Decrease</li>
						<li>Reset</li>
					</ul>
				</p>

				<p>
					Let&apos;s start with the so called <i>hard way</i> and lets build our app the vanilla way of life.
					If you aren&apos;t interested in this part, feel free to skip right into the react part.
				</p>

				<Accordion title={"Vanilla"}>
					<LinkBar links={vanillaLinks}/>


					<CodeHighlighter code={vanillaString}/>



				</Accordion>

				<Accordion title={"React"} react={true}>
					<LinkBar links={reactLinks}/>
					<CodeHighlighter code={reactString}/>
				</Accordion>

			</ContentLayout>
		</Layout>
	);
};

export default SimpleCounter;