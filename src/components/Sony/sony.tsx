import Image from 'next/image';
import React from 'react';
import { items } from './data';
import styles from './sony.module.css';

const sony = () => {
	return (
		<div className={styles.container}>
			<div>
				<h1 className={styles.title}>Sony</h1>
			</div>

			<div className={styles.wrapper}>
				{items.map((item) => (
					<div className={styles.map} key={item.id}>
						<div className={styles.imgContainer}>
							<Image className={styles.img} alt="" fill src={item.img} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default sony;
