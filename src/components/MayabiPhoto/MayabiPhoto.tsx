import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './mayabiPhoto.module.css';

const MayabiPhoto = () => {
	return (
		<div className={styles.container}>
			<Link href="/mayabi" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/mayabiabbu9.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/mayabiabbu2.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mayabi</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
			<Link href="/mahim" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/babamahimp1.jpg"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/mahimabbu2.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mahim</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
			<Link href="/mayabi" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/mayabiabbublu.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/mayabiabbu12.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mayabi</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
			<Link href="/mahim" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/babamahimca5.jpg"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/maimbababeach.jpg"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mahim</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
		</div>
	);
};

export default MayabiPhoto;
