'use client';
import Button from '@/components/Button/Button';
import Count from '@/components/CountDown/Count';

import Testimonial from '@/components/Testimonial/TestimonialCard';
import { Projects } from '@/components/Testimonial/data';
import Image from 'next/image';
import Category from './category/page';
import styles from './page.module.css';

import MayabiPhoto from '@/components/MayabiPhoto/MayabiPhoto';

import 'aos/dist/aos.css';

import Motion from '@/components/Motion/Motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const carouselItems = [
	{ image: '/sony1.jpg', alt: 'sony1' },
	{ image: '/sonymahim.jpg', alt: 'sonymahim' },
	{ image: '/mayabisony.png', alt: 'mayabisony' },
	{ image: '/sony5.jpg', alt: 'sony5' },
	{ image: '/sonyglass.JPG', alt: 'sonyglass' },
	{ image: '/babasony.jpg', alt: 'babasony' },
	{ image: '/amisony5.JPG', alt: 'amisony5' },
];

const home = () => {
	return (
		<div className={styles.mainContainer}>
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
				{carouselItems.map((item, index) => (
					<div key={index} className={styles.container}>
						<h1 className={styles.title}>We Miss You </h1>
						<div className={styles.subContainer}>
							<div className={styles.textContainer}>
								<h1 className={styles.postTitle}>We Miss You very much</h1>
								<p className={styles.postDesc}>
									We are very sorry we were not there for you. You may be gone
									from our sight, but you are never gone from our heart. Our
									mind still talks to you. Our heart still looks for you. Our
									soul knows you are at peace. But we still miss you.
								</p>
								<div className={styles.button}>
									<Button url="/portfolio" text="See Our Work" />
								</div>
							</div>
							<div className={styles.imgContainer}>
								<Image
									src={item.image}
									alt={item.alt}
									height={400}
									width={400}
									className={styles.sony}
								/>
							</div>
						</div>
					</div>
				))}
			</Carousel>

			<Count />

			<div className={styles.photoHeader}>
				<h1 className={styles.photoTitle}>Lovely Pictures</h1>
				<MayabiPhoto />
			</div>

			<div className={styles.testimonialContainer}>
				<h1 className={styles.testimonialHeader}>Testimonial</h1>

				<div className={styles.testimonial}>
					<div className={styles.testimonialMap}>
						{Projects.map((project, index) => (
							<Testimonial
								key={index}
								title={project.title}
								desc={project.desc}
								text={project.text}
								image={project.url}
							/>
						))}
					</div>
				</div>
			</div>

			<Category />
			<div className={styles.motionContainer}>
				<h1 className={styles.motionHeader}>About me</h1>

				<Motion />
				<p className={styles.motionDesc}>
					Every Day Is A Chance To Begin Again.
				</p>
			</div>
		</div>
	);
};

export default home;
