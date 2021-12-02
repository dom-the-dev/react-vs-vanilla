import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({children, title, headline, card}) => {
    return (
        <div>
            <Head>
                <title> {title} | React VS. Vanilla JS</title>
                <meta name="description" content="React VS. Vanilla JS Series"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Dom_TheDev" />
                <meta name="twitter:title" content="React VS. Vanilla JS" />
                <meta name="twitter:description" content="Web App Series - Creating apps in pure javascript vs. react" />
                <meta name="twitter:image" content={`https://react-vs-vanilla.vercel.app/${card}.png`} />

                <meta property="og:url" content="http://www.domthedev.com/" />
                <meta property="og:title" content="Dom the Dev - Full Stack Developer" />
                <meta property="og:description" content="Website of Dom the Dev - Full Stack Developer" />
                <meta property="og:image" content={`https://react-vs-vanilla.vercel.app/${card}.png`} />


            </Head>
            <Navbar/>

            <div className={"bg-gradient-to-r from-reactBg via-react to-vanilla py-32"}>
                <header className="container text-center text-white">
                    <h1 className={"break-words text-primary uppercase filter drop-shadow-xl"}><span
                        className={"break-words font-bold"}>{headline}</span></h1>
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
    title: PropTypes.string.isRequired,
    headline: PropTypes.string
};

export default Layout;