import type { Metadata } from 'next';

import 'react-multi-carousel/lib/styles.css';

import Mummum from '@/components/Mummum/Mummum';
import PetFamily from '@/components/PetFamily/PetFamily';
import Slider from '@/components/Slider/Slider';
import Sony from '@/components/Sony/sony';

import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'About Page',
	description: ' Create next app',
};

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<Slider />
			<PetFamily />
			<Mummum />
			<Sony />
		</div>
	);
};

export default AboutPage;
