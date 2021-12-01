import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({children, title, home}) => {
	return (
		<div>
			<Head>
				<title> {title} | React VS. Vanilla JS</title>
				<meta name="description" content="React VS. Vanilla JS Series"/>
			</Head>
			<Navbar/>

			<div className={"bg-gradient-to-r from-reactBg via-react to-vanilla py-32"}>
				<header className="container text-center text-white">
					{home ?
						<div className={"transform -rotate-3"}>
							<h1 className={"break-words text-7xl text-primary uppercase filter drop-shadow-xl"}><span
								className={"break-words font-bold"}>React</span> <span className={"break-words text-6xl"}>VS</span> <span
								className={"break-words font-bold"}>Vanilla JS</span>
							</h1>
							<p className={"text-xl py-2 filter drop-shadow-xl"}>One application, two ways to build. One
								with react and one with pure vanilla js.</p>
						</div>
						:
						<h1 className={"break-words text-7xl text-primary uppercase filter drop-shadow-xl"}><span
							className={"break-words font-bold"}>{title}</span></h1>
					}
				</header>
			</div>

			<div className={"min-h-screen"}>
				{children}
			</div>

			<Footer/>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string.isRequired
};

export default Layout;