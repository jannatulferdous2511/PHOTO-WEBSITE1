'use client';

import Image from 'next/image';

import React, { useState } from 'react';
import styles from './links.module.css';
import NavLinks from './NavLinks';

const links = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'Portfolio',
		path: '/portfolio',
	},
	{
		id: 3,
		title: 'OurFamily',
		path: '/ourFamily',
	},
	{
		id: 4,
		title: 'About Us',
		path: '/aboutus',
	},
	{
		id: 5,
		title: 'Mayabi',
		path: '/mayabi',
	},
	{
		id: 6,
		title: 'Mahim',
		path: '/mahim',
	},
	{
		id: '7',
		title: 'Sign',
		path: '/sign',
	},
];

const Links = () => {
	const [open, setOpen] = useState(true);

	//TEMPORARY

	const session = false;
	// const isAdmin = true;
	const isAdmin = false;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLinks item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLinks item={{ title: 'Admin', path: '/admin' }} />}

						<button className={styles.logout}>Logout</button>
					</>
				) : (
					<NavLinks item={{ title: 'Login', path: '/login' }} />
				)}
			</div>

			<Image
				src="/menu2.jpg"
				alt=" "
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
				className={styles.menuButton}
			/>

			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLinks item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
