'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Family from '../Family/Family';
import { familyData } from './data';
import styles from './petFamily.module.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1324 },
		items: 4,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1324, min: 764 },
		items: 3,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 764, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
} as const;

const PetFamily: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.familyContainer}>
				<h1 className={styles.familyTitle}>Our Memorable Pictures</h1>

				<div className={styles.carousel}>
					<Carousel
						additionalTransfrom={0}
						arrows={false}
						autoPlay
						autoPlaySpeed={2500}
						centerMode={false}
						infinite
						responsive={responsive}
						itemClass="item"
						showDots
					>
						{familyData.map((item, index) => (
							<div className={styles.family} key={index}>
								<Family
									title={item.title}
									image={item.image}
									reviews={item.reviews}
									date={item.date}
								/>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default PetFamily;
