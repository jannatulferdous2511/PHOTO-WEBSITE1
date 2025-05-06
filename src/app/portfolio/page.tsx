'use client';

import 'aos/dist/aos.css';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.selectTitle}>Choose A Gallery</h1>

			<div className={styles.itemsHover}>
				<div className={styles.items}>
					<Link
						href="/portfolio/Mayabi"
						data-aos="zoom-in"
						data-aos-anchor-placement="top-center"
						className={styles.portfolioItems}
					>
						<span className={styles.title}>Mayabi</span>
					</Link>

					<Link
						href="/portfolio/Amra"
						data-aos="zoom-in"
						data-aos-delay="200"
						data-aos-anchor-placement="top-center"
						className={styles.portfolioItems}
					>
						<span className={styles.title}>Amra</span>
					</Link>

					<Link
						href="/portfolio/Mahim"
						data-aos="zoom-in"
						data-aos-delay="400"
						data-aos-anchor-placement="top-center"
						className={styles.portfolioItems}
					>
						<span className={styles.title}>Mahim</span>
					</Link>
				</div>
			</div>

			<div className={styles.itemsHoverBottom}>
				<div className={styles.bottomItems}>
					<Link
						href="/portfolio/Mayabi"
						data-aos="zoom-in"
						data-aos-anchor-placement="top-center"
						className={styles.bottomPortfolioItems}
					>
						<span className={styles.title}>Mayabi</span>
					</Link>

					<Link
						href="/portfolio/Amra"
						data-aos="zoom-in"
						data-aos-delay="200"
						data-aos-anchor-placement="top-center"
						className={styles.bottomPortfolioItems}
					>
						<span className={styles.title}>Amra</span>
					</Link>

					<Link
						href="/portfolio/Mahim"
						data-aos="zoom-in"
						data-aos-delay="400"
						data-aos-anchor-placement="top-center"
						className={styles.bottomPortfolioItems}
					>
						<span className={styles.title}>Mahim</span>
					</Link>
				</div>
			</div>
			<div className={styles.itemsHoverEnd}>
				<div className={styles.endItems}>
					<Link
						href="/portfolio/Mayabi"
						data-aos="zoom-in"
						data-aos-anchor-placement="top-center"
						className={styles.endPortfolioItems}
					>
						<span className={styles.title}>Mayabi</span>
					</Link>

					<Link
						href="/portfolio/Amra"
						data-aos="zoom-in"
						data-aos-delay="200"
						data-aos-anchor-placement="top-center"
						className={styles.endPortfolioItems}
					>
						<span className={styles.title}>Amra</span>
					</Link>

					<Link
						href="/portfolio/Mahim"
						data-aos="zoom-in"
						data-aos-delay="400"
						data-aos-anchor-placement="top-center"
						className={styles.endPortfolioItems}
					>
						<span className={styles.title}>Mahim</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
