'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './scroll.module.css';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	//show and hide functionality

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setIsVisible(true);
			else setIsVisible(false);
		};
		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	//scroll functionality

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={styles.scroll}>
			{isVisible && (
				<button className={styles.scrollButton} onClick={scrollToTop}>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
};

export default ScrollToTop;
