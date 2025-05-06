import React from 'react';
import styles from './page.module.css';
type Props = {
	children: string;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			<h1 className={styles.mainTitle}>Our Memories</h1>
			{children}
		</div>
	);
};

export default Layout;
