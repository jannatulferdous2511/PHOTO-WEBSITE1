import React from 'react';

import Image from 'next/image';

import { items } from './data';
import styles from './page.module.css';

const Mahim = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>My Sweet Pictures</h1>
			</div>
			<div className={styles.subContainer}>
				<Image
					className={styles.ubc}
					alt=""
					src="/mahimubc.JPG"
					height={650}
					width={1200}
				/>
			</div>
			<div className={styles.picture}>
				{items.map((item) => (
					<div className={styles.map} key={item.id}>
						<div className={styles.top}>
							<div className={styles.imgContainer}>
								<Image
									className={styles.img}
									alt=""
									fill={true}
									src={item.image}
								/>
							</div>
						</div>

						<div className={styles.bottom}>
							<span className={styles.date}>{item.date}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Mahim;
