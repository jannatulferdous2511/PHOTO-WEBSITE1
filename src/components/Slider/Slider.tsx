'use client';

import Image from 'next/image';

import React, { useEffect, useState } from 'react';

import styles from './slider.module.css';

const data = [
	{
		id: 1,
		title: 'Sugary',
		description:
			'When you slept only for a couple of hours ,but you need to get up for another happy day .',
		img: '/sugarysleep2.jpg',
	},

	{
		id: 2,
		title: 'Mummum',
		description:
			'When you slept only for a couple of hours ,but you need to get up for another happy day .',
		img: '/mummum2.JPG',
	},
	{
		id: 3,
		title: 'BlackyVanila',
		description:
			'When you slept only for a couple of hours ,but you need to get up for another happy day .',
		img: '/blackyvanila1.JPG',
	},
	{
		id: 4,
		title: 'Catfamily1',
		description:
			'When you slept only for a couple of hours ,but you need to get up for another happy day .',
		img: '/catfamily1.jpg',
	},
];

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() =>
				setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
			4000
		);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.slider}>
			<div className={styles.wrapper}>
				<div className={styles.imageContainer}>
					<Image
						src={data[currentSlide].img}
						alt=""
						fill
						priority
						className={styles.img}
					/>
				</div>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>I am not sleeping</h1>
					<h2 className={styles.imgDesc}>just dreaming for yummy yummy food</h2>
				</div>
			</div>
		</div>
	);
};

export default Slider;
