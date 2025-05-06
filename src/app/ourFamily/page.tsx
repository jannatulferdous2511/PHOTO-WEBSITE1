import Image from 'next/image';

import { items } from './data';
import styles from './page.module.css';

const OurFamily = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Our Family</h1>
			</div>

			<div className={styles.picture}>
				{items.map((item) => (
					<div className={styles.map} key={item.id}>
						<div className={styles.top}>
							<div className={styles.imgContainer}>
								<Image
									className={styles.img}
									alt=""
									src={item.img}
									fill={true}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurFamily;
