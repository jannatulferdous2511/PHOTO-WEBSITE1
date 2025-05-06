import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import NavLinks from './links/navLinks/Links';
import styles from './navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src="/j4e.png" alt="" width={35} height={35} />
				<Link href="/ ">JANNATWEBSITE</Link>
			</div>

			<div className={styles.navLinks}>
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
