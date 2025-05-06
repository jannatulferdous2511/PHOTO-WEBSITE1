import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';

import { FaStar } from 'react-icons/fa';
import styles from './family.module.css';

type Props = {
	title: string;
	image: string;
	date: string;
	reviews: string;
};

const Family = ({ title, image, date, reviews }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image
						src={image}
						alt={title}
						width={550}
						height={410}
						className={styles.familyImg}
					/>
				</div>
			</div>

			<div className={styles.bottom}>
				<h1 className={styles.vanilaTitle}>{title}</h1>
				<div className={styles.vanilaStar}>
					<div className={styles.vanilaStarCount}>
						<FaStar className={styles.starIcon} />
						<FaStar className={styles.starIcon} />
						<FaStar className={styles.starIcon} />
						<FaStar className={styles.starIcon} />
						<FaStar className={styles.starIcon} />
					</div>
					<div className={styles.reviews}>({reviews})</div>
				</div>
				<p className={styles.pTag}>We love you .We miss you .</p>
				<div className={styles.date}>
					<h1 className={styles.vanilaDate}>{date}</h1>
					<div className={styles.buttonContainer}>
						<Button url="/" text="Home" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Family;
