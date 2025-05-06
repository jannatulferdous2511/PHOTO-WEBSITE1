'use client';

import Button from '@/components/Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

import { notFound, useParams } from 'next/navigation';
import { useEffect } from 'react';

import { Category, Item, items } from './data';
import styles from './page.module.css';

const getData = (cat: string): Item[] => {
	if (cat in items) {
		return items[cat as Category];
	}
	notFound(); // Will throw 404
};

const CategoryPage = () => {
	const params = useParams();
	const category = params?.category;

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease',
			once: true,
			anchorPlacement: 'top-bottom',
		});
	}, []);

	if (typeof category !== 'string') return null;

	const data = getData(category);

	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{category}</h1>
			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1 data-aos="fade-left" className={styles.title}>
							{item.title}
						</h1>
						<p
							data-aos="fade-right"
							data-aos-delay="200"
							className={styles.desc}
						>
							{item.desc}
						</p>

						<Button text={item.text} url={item.url} />
					</div>
					<div
						data-aos="fade-left"
						data-aos-delay="500"
						className={styles.imgContainer}
					>
						<Image
							fill
							alt={item.title}
							src={item.image}
							sizes="(max-width: 768px) 100vw, 50vw"
							className={styles.image}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default CategoryPage;
