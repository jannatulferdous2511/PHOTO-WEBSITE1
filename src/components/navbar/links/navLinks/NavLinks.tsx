'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navLinks.module.css';

import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavLinks = ({ item }: any) => {
	const pathName = usePathname();

	return (
		<Link
			key={item.id}
			href={item.path}
			className={`${styles.container} ${
				pathName === item.path && styles.active
			}`}
		>
			{item.title}
		</Link>
	);
};

export default NavLinks;
