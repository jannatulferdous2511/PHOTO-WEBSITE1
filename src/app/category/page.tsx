'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const Category: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>

			<div className={styles.categories}>
				<Link
					href="/ourFamily"
					className={`${styles.category} ${styles.youtube}`}
				>
					<Image
						src="/youtube.png"
						alt="YouTube icon"
						width={32}
						height={32}
						className={styles.image}
					/>
					<span className={styles.family}>Family</span>
				</Link>

				<Link
					href="/aboutus"
					className={`${styles.category} ${styles.facebook}`}
				>
					<Image
						src="/facebook.png"
						alt="Facebook icon"
						width={32}
						height={32}
						className={styles.image}
					/>
					<span className={styles.petFamily}>PetFamily</span>
				</Link>

				<Link
					href="/portfolio"
					className={`${styles.category} ${styles.instagram}`}
				>
					<Image
						src="/instagram.jpg"
						alt="Instagram icon"
						width={32}
						height={32}
						className={styles.image}
					/>
					<span className={styles.amra}>Amra</span>
				</Link>

				<Link
					href="/mayabi"
					className={`${styles.category} ${styles.instagram}`}
				>
					<Image
						src="/instagram.jpg"
						alt="Instagram icon"
						width={32}
						height={32}
						className={styles.image}
					/>
					<span className={styles.mayabi}>Mayabi</span>
				</Link>

				<Link href="/mahim" className={`${styles.category} ${styles.youtube}`}>
					<Image
						src="/instagram.jpg"
						alt="Instagram icon"
						width={32}
						height={32}
						className={styles.image}
					/>
					<span className={styles.mahim}>Mahim</span>
				</Link>
			</div>
		</div>
	);
};

export default Category;
