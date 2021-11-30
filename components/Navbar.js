import React from 'react';
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className={"w-full flex justify-center"}>
		<Link href="/">
			<a>React VS Vanilla</a>
		</Link>
		</div>
	);
};

export default Navbar;