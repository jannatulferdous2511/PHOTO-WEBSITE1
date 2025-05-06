'use client';

import React from 'react';
import CountUp from 'react-countup';
import styles from './count.module.css';

const stats = [
	{
		num: 12,
		text: 'Years of experience',
	},
	{
		num: 20,
		text: 'Project completed',
	},
	{
		num: 18,
		text: 'Technologies mastered',
	},
	{
		num: 500,
		text: 'Code commits',
	},
];

const Count = () => {
	return (
		<div className={styles.container}>
			<div className={styles.count}>
				{stats.map((item, index) => {
					return (
						<div className={styles.key} key={index}>
							<CountUp
								end={item.num}
								duration={25}
								delay={4}
								className={styles.stats}
							/>
							<p className={styles.statsText}>{item.text}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Count;
