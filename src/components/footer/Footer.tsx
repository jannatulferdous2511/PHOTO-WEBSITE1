import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/j4e.png" alt="" width={35} height={35} />
					<h1 className={styles.logoText}>JANNATWEBSITE</h1>
				</div>
				<p className={styles.logoDesc}>Every Day Is A Chance To Begin Again.</p>

				<div className={styles.icons}>
					<Image
						src="/facebook.png"
						alt="JANNATWEBSITE"
						height={25}
						width={25}
						className={styles.icon}
					/>

					<Image
						src="/instagram.jpg"
						alt="JANNATWEBSITE"
						height={25}
						width={25}
						className={styles.icon}
					/>

					<Image
						src="/youtube.png"
						alt="JANNATWEBSITE"
						height={25}
						width={25}
						className={styles.icon}
					/>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Home</Link>
					<Link href="/portfolio">Portfolio</Link>
					<Link href="/ourFamily">OurFamily</Link>
					<Link href="/aboutus">About Us</Link>
					<Link href="/mayabi">Mayabi</Link>
					<Link href="/mahim">Mahim</Link>
					<Link href="/sign">Sign</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/">Homepage</Link>
					<Link href="/portfolio">Portfolio</Link>
					<Link href="/ourFamily">OurFamily</Link>
					<Link href="/aboutus">About Us</Link>
					<Link href="/mayabi">Mayabi</Link>
					<Link href="/mahim">Mahim</Link>
					<Link href="/sign">Sign</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/">Facebook</Link>
					<Link href="/portfolio">Instagram</Link>
					<Link href="/ourFamily">Tiktok</Link>
					<Link href="/aboutus">Youutube</Link>
					<Link href="/mayabi">Whatsapp</Link>
					<Link href="/mahim">Massenger</Link>
					<Link href="/">Viber</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
