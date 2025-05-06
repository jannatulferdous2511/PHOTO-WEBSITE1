'use client';
import { motion } from 'framer-motion';

import React, { useState } from 'react';
import styles from './testimonialCard.module.css';
interface Props {
	image: string;
	title: string;
	desc: string;
	text: string;
}
const TestimonialCard = ({ image, title, desc, text }: Props) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	function handleFlip() {
		if (!isAnimating) {
			setIsFlipped(!isFlipped);
			setIsAnimating(true);
		}
	}
	return (
		<div className={styles.card} onClick={handleFlip}>
			<motion.div
				className={styles.flipCardInner}
				initial={false}
				animate={{ rotateY: isFlipped ? 180 : 360 }}
				transition={{ duration: 0.6, animationDirection: 'normal' }}
				onAnimationComplete={() => setIsAnimating(false)}
			>
				<div
					className={styles.flipCardFront}
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className={styles.frontCardClose} />
					<div className={styles.frontCardText}>Let Learn More</div>
				</div>
				<div
					style={{ backgroundImage: `url(${image})` }}
					className={styles.flipCardBack}
				>
					<div className={styles.backCardClose} />
					<div className={styles.backCardText}>
						<h1 className={styles.title}>{title}</h1>
						<h2 className={styles.text}>{text}</h2>

						<h3 className={styles.desc}>{desc}</h3>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default TestimonialCard;
