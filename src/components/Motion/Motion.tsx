'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styles from './motion.module.css';

const Motion = () => {
	return (
		<div className={styles.motionContainer}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
				}}
			>
				<motion.div
					className={styles.motionSony1}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
					}}
				>
					<Image
						src="/ami1.JPG"
						priority
						quality={100}
						alt="JANNATWEBSITE"
						fill
						className={styles.sony}
					/>
				</motion.div>
				<motion.svg
					// fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg"
					className={styles.svg}
				>
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#ed7ed5"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: '24 10 0 0' }}
						animate={{
							strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
							rotate: [120, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Motion;
