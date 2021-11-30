import React from 'react';
import Layout from "../components/Layout";
import Compare from "../components/Compare";

const SimpleCounter = () => {
	return (
		<Layout title={"Simple Counter"}>
			<div className={"flex"}>
				<Compare react={true} demo={"https://dom-the-dev.github.io/simple-counter-react/"}/>
				<Compare demo={"https://dom-the-dev.github.io/vanilla-js-counter/"}/>
			</div>
		</Layout>
	);
};

export default SimpleCounter;