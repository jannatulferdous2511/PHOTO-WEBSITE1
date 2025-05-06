export interface Item {
	id: number;
	title: string;
	text: string;
	url: string;
	desc: string;
	image: string;
}

export type Category = 'Mayabi' | 'Mahim' | 'Amra';

export const items: Record<Category, Item[]> = {
	Mayabi: [
		{
			id: 1,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Dream Big, Work Hard, Stay Focused And Surround Yourself With Good People.',
			image: '/mayabi2.jpg',
			url: '/mayabi',
		},
		{
			id: 2,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Success Is Neither Magical Nor Mysterious, It Is The Natural Result Of Good Habits And Hard Work.',
			image: '/mayabired.jpg',
			url: '/mayabi',
		},
		{
			id: 3,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Believe In Yourself. You Have The Power To Achieve Your Dreams In Life.',
			image: '/mayabishiri.jpg',
			url: '/mayabi',
		},
		{
			id: 4,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Dreams Are Free, But Goals Have A Cost. Which Are Time, Effort, Sacrifice, Sweat, Discipline, Criticism, Rejections, Doubts, Failure, Risks.',
			image: '/mayabigaoun.png',
			url: '/mayabi',
		},
	],
	Mahim: [
		{
			id: 1,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Dream Big, Work Hard, Stay Focused And Surround Yourself With Good People.',
			image: '/mahimcar.jpg',
			url: '/mahim',
		},
		{
			id: 2,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Success Is Neither Magical Nor Mysterious, It Is The Natural Result Of Good Habits And Hard Work.',
			image: '/mahim3.jpg',
			url: '/mahim',
		},
		{
			id: 3,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Believe In Yourself. You Have The Power To Achieve Your Dreams In Life.',
			image: '/mahim49.jpg',
			url: '/mahim',
		},
		{
			id: 4,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Dreams Are Free, But Goals Have A Cost. Which Are Time, Effort, Sacrifice, Sweat, Discipline, Criticism, Rejections, Doubts, Failure, Risks.',
			image: '/mahimcar2.JPG',
			url: '/mahim',
		},
	],
	Amra: [
		{
			id: 1,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Happiness is not something ready-made. It comes from your own actions.',
			image: '/amra31.jpg',
			url: '/ourFamily',
		},
		{
			id: 2,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: "Perfect relationship is not that you never get angry, upset or irritated with each other. It's how fast you resolve and bounce back to normal.",
			image: '/amra5.jpg',
			url: '/ourFamily',
		},
		{
			id: 3,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: "Relationships don't last because of the good times. They last because the hard times were handled with love and care.",
			image: '/amra6.jpg',
			url: '/ourFamily',
		},
		{
			id: 4,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Always pray to have eyes that see the best, a heart forgives the worst, a mind that forgets the bad and a soul that never loses faith.',
			image: '/amradoel.jpg',
			url: '/ourFamily',
		},
		{
			id: 5,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Family is the best thing you could ever wish for. They are there for you during the ups and down and love you no matter what.',
			image: '/amrajamdani.jpg',
			url: '/ourFamily',
		},
		{
			id: 6,
			title: 'Creative Portfolio',
			text: 'see more',
			desc: 'Love your family. Spend time, be kind and serve one another. Make no room for regrets.Tomorrow is not promised and today is short.',
			image: '/family4.jpg',
			url: '/ourFamily',
		},
	],
};
