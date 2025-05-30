import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'My Dream Website',
	description: ' Create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
