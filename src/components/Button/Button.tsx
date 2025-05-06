'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './button.module.css';

type Props = {
	text: string;
	url: string;
};

const Button = ({ text, url }: Props) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease',
			once: true,
			anchorPlacement: 'top-bottom',
		});
	}, []);

	return (
		<div data-aos="zoom-in" data-aos-delay="400">
			<Link href={url} className={styles.link}>
				{text}
			</Link>
		</div>
	);
};

export default Button;
