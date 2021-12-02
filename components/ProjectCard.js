import React from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";
import simpleCounter from "../public/simpleCounter.png";
import Link from "next/link";

const ProjectCard = ({thumbnail, title, link}) => {
    return (
        <Link href={link}>
            <a className={"no-underline"}>
                <div className={"shadow-animation rounded overflow-hidden"}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        placeholder="blur"
                    />

                    <div className="p-5">
                        <h5 className={"text-xl text-center"}>{title}</h5>
                    </div>
                </div>
            </a>
        </Link>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProjectCard;
