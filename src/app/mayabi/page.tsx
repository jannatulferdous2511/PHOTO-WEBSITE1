import Image from 'next/image';

import React from 'react';
import { items } from './data';
import styles from './page.module.css';

const Mayabi = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>My Sweet Pictures</h1>
			</div>
			<div className={styles.headerPic}>
				<Image
					src={'/mayabicoinu.jpg'}
					alt=""
					height={450}
					width={350}
					className={styles.headerPicImg}
				/>
			</div>
			<div className={styles.picture}>
				{items.map((item) => (
					<div className={styles.map} key={item.id}>
						<div className={styles.top}>
							<div className={styles.imgContainer}>
								<Image className={styles.img} alt="" fill src={item.img} />
							</div>
						</div>

						<div className={styles.bottom}>
							<p className={styles.desc}>{item.desc}</p>
							<span className={styles.date}>{item.date}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Mayabi;
