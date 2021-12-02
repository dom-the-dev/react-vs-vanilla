import React from 'react';
import Layout from "../components/Layout";
import CodeHighlighter from "../components/CodeHighlighter";
import Accordion from "../components/Accordion";
import ContentLayout from "../components/ContentLayout";
import LinkBar from "../components/LinkBar";

const SimpleCounter = () => {


    const vHTML1 = `<span id="counter" class="counter">0</span>`

    const vHTML2 = `<button id="increment" class="button">+</button>
<button id="reset" class="button">Reset</button>
<button id="decrement" class="button">-</button>`

    const vJS1 = `const increment = document.getElementById('increment')
const reset = document.getElementById('reset')
const decrement = document.getElementById('decrement')
const counter = document.getElementById('counter')`

    const vJS2 = `let number = parseInt(counter.innerText)`

    const vJS3 = `increment.addEventListener('click', function(e) {
  e.preventDefault()
  /*TODO*/
})

decrement.addEventListener('click', function(e) {
  e.preventDefault()
  /*TODO*/
})

reset.addEventListener('click', function(e) {
  e.preventDefault()
  /*TODO*/
})
`

    const vJS4 = `
function incrementCount() {
  number += 1
  counter.innerText = number
}

function decrementCount() {
  number -= 1
  counter.innerText = number
}

function resetCount() {
  number = 0
  counter.innerText = number
}`

    const vJS5 = `increment.addEventListener('click', function(e) {
  e.preventDefault()
  incrementCount()
})

decrement.addEventListener('click', function(e) {
  e.preventDefault()
  decrementCount()
})

reset.addEventListener('click', function(e) {
  e.preventDefault()
  resetCount()
})`

    const vanillaLinks = [
        {
            link: "https://codepen.io/dom-the-dev/pen/jOLJPja",
            platform: "CodePen"
        },
        {
            link: "https://github.com/dom-the-dev/vanilla-js-counter",
            platform: "GitHub",
        },
        {
            link: "https://dom-the-dev.github.io/vanilla-js-counter/",
            platform: "Demo"
        },
    ]

    const react1 = `function App() {
	return (
		<div className="wrapper">
			  <h1>Hello World</h1>
		</div>
	);
}`

    const react2 = `function App() {
  const [counter, setCounter] = React.useState(0);
  
	return (
		<div className="wrapper">
			<h1>Hello World</h1>
		</div>
	);
}`

    const react3 = `<h1>{counter}</h1>`

    const react4 = `const increment = () => {
	setCounter(counter + 1)
}

function decrement() {
	setCounter(counter - 1)
}

function reset() {
	setCounter(0)
}
`

    const react5 = `<button onClick={() => increment()} className="button">+</button>
<button onClick={() => reset()} className="button">Reset</button>
<button onClick={() => decrement()} className="button">-</button>`

    const react6 = `<button className="button">+</button>
<button className="button">Reset</button>
<button className="button">-</button>`

    const reactLinks = [
        {
            link: "https://codepen.io/dom-the-dev/pen/oNeVzeG",
            platform: "CodePen"
        },
        {
            link: "https://github.com/dom-the-dev/simple-counter-react",
            platform: "GitHub",
        },
        {
            link: "https://dom-the-dev.github.io/simple-counter-react/",
            platform: "Demo"
        },]

    return (
        <Layout title={"Simple Counter"} headline={"Counter App React vs. pure Javascript"}>
            <ContentLayout>

                <h3>
                    React-VS-Vanilla Series
                </h3>

                <p>
                    Hi everyone and welcome to the first episode of the <b>React VS. Vanilla JS</b> series, where we are
                    going to build different applications in two ways.
                </p>
                <p>
                    As the title already suggests, we will use vanilla
                    javascript on the one hand and the javascript
                    framework <a href="https://reactjs.org/" title={"react"}>react</a> on the other.
                </p>
                <p>
                    <i>For those who are new to javascript, <b>vanilla js</b> means not more than using pure javascript
                        without any framework or library.</i>
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


                <h3>
                    Examples
                </h3>


                <div>
                    <div className={"flex flex-col justify-center"}>
                        <h4 className={"text-center"}>Vanilla</h4>
                        <LinkBar links={vanillaLinks} react={false}/>
                        <h4 className={"text-center"}>React</h4>
                        <LinkBar links={reactLinks} react={true}/>
                    </div>
                </div>

                <h3>How To</h3>

                <p>
                    Let&apos;s start with the so called <i>hard way</i> and lets build our app the vanilla way of life.
                    If you aren&apos;t interested in this part, feel free to skip right into the react part.
                </p>

                <Accordion title={"Vanilla"} type={"vanilla"}>

                    <p>Let&apos;s start with the HTML. We need a span where the current number will be displayed, and
                        three buttons which will affect the number.</p>

                    <CodeHighlighter code={vHTML1}/>
                    <CodeHighlighter code={vHTML2}/>

                    <p>Ok, now we can start with the javascript.
                        Let&apos;s create variables for all the HTML elements we just created like this:
                    </p>

                    <CodeHighlighter code={vJS1}/>

                    <p>With the following line of code we get the current value of the counter, which will be 0 as
                        declared in the HTML.</p>

                    <CodeHighlighter code={vJS2}/>

                    <p>
                        Now we need to add event-listeners of type <i>click</i> to our buttons to fetch user
                        interactions.
                    </p>

                    <CodeHighlighter code={vJS3}/>

                    <p>
                        In the next step we declare functions which increase/decrease/reset the value of number.
                    </p>

                    <CodeHighlighter code={vJS4}/>

                    <p>
                        All we not got to do is to call the corresponding function in the event-listeners like this:
                    </p>

                    <CodeHighlighter code={vJS5}/>

                    <p>
                        And that&apos;s it. Easy? Let&apos;s see how we can achieve the same result in react.
                    </p>

                </Accordion>

                <Accordion title={"React"} type={"react"}>

                    <p>In this part we are going to build the same application in use of react.
                        For this project you will not need deep knowledge of react but if you are absolutely new to
                        react, i recommend to visit <a
                            href="https://create-react-app.dev/">create-react-app.dev</a>
                    </p>

                    <p>
                        Lets start by creating a functional component.
                    </p>

                    <CodeHighlighter code={react1}/>

                    <p>
                        Add the buttons
                    </p>

                    <CodeHighlighter code={react6}/>

                    <p>
                        Now we create our state which will hold the value of the counter and set it to zero by default.
                        We do this by adding this line of code:
                    </p>

                    <CodeHighlighter code={react2}/>

                    <p>
                        To output the value of our counter state, replace the content of the h1-tag with the state
                    </p>

                    <CodeHighlighter code={react3}/>

                    <p>
                        So far so good. Now we add the three functions which manipulate the state as we need.
                        increment/decrement state by 1 and reset state to 0.
                    </p>

                    <CodeHighlighter code={react4}/>

                    <p>
                        In the last step we need to add the functions to the buttons onClick handler, so we can
                        manipulate the state.
                    </p>

                    <CodeHighlighter code={react5}/>

                </Accordion>


                <p>If you are here still reading, i want to thank you. Please let me know what you did or did
                    not like about this post. Hit me up on <a href="https://twitter.com/Dom_TheDev"
                                                              title={"twitter"}>Twitter</a> or send an email to
                    hi@domthedev.com</p>


            </ContentLayout>
        </Layout>
    );
};

export default SimpleCounter;