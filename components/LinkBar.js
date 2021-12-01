import React from 'react';
import PropTypes from 'prop-types';
import {FaBeer} from "@react-icons/all-files/fa/FaBeer";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaCodepen} from "@react-icons/all-files/fa/FaCodepen";
import {FaDemocrat} from "@react-icons/all-files/fa/FaDemocrat";
import {BiPlay} from "@react-icons/all-files/bi/BiPlay";

const LinkBar = ({links, react}) => {

	const classes = react ? `bg-react` : `bg-vanilla`

	const renderIcon = (platform) => {
		switch (platform) {
			case "GitHub": return <FaGithub/>;
			case "CodePen": return <FaCodepen/>;
			case "Demo": return <BiPlay/>;
			default: return '';
		}
	}

	const renderLinks = () => {
		return links.map((link, index) => (
			<a key={link.platform + index} href={`${link.link}`} target={"_blank"} rel={"noreferrer"} className={`no-underline flex justify-center align-middle text-center block m-2 p-5 ${classes}`}>
				<span>{link.platform}</span> <div className={"p-1 ml-2"}>{renderIcon(link.platform)}</div>
			</a>
		))
	}

	return (
		<div className={"flex flex-col md:flex-row justify-center my-2"}>
			{renderLinks()}
		</div>
	);
};

LinkBar.propTypes = {
	links: PropTypes.array.isRequired
};

export default LinkBar;