/* eslint-disable react/jsx-key */

import { RiReactjsFill } from 'react-icons/ri'
import {
	SiTypescript,
	SiStyledcomponents,
	SiAmazonaws,
	SiHetzner,
	SiPostgresql,
	SiRust,
	SiMongodb,
	SiRedis,
	SiNodedotjs,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export default {
	name: 'Fetch Monitors',
	role: 'Full Stack Developer',
	description:
		'Premium group and software for gaining insights into tech, products, social media, and more.',
	link: 'https://fetchmonitors.com',
	image: '/fetch-monitors/fetch_landing.webp',
	toolbox: {
		title: 'Tech Stack',
		description:
			'Fetch Monitors is a premium group and software for gaining insights into tech, products, social media, and more.',
		items: [
			{
				icons: [
					<SiTypescript size={50} />,
					<RiReactjsFill />,
					<TbBrandNextjs size={60} />,
					<SiStyledcomponents />,
				],
				image: '/fetch-monitors/fetch_tasks_1.webp',
				name: 'Aether',
				description:
					'The delightful user interface for Fetch Monitors. Built with TypeScript, React, Next.js, Styled-Components, and Ethereal2.',
			},
			{
				icons: [
					<SiRust size={50} />,
					<SiPostgresql size={50} />,
					<SiAmazonaws size={60} />,
					<SiHetzner size={42} />,
				],
				image: '/fetch-monitors/notif.webp',
				name: 'Stern',
				description:
					'The backend for Fetch Monitors. Built with Rust, Axum, and SeaORM – all hosted on Hetzner. Postgres database deployed on Amazon RDS.',
			},
			{
				icons: [
					<SiTypescript size={50} />,
					<SiNodedotjs size={50} />,
					<SiRedis size={60} />,
				],
				image: '/fetch-monitors/selector.webp',
				name: 'Spider',
				description:
					'The speedy web crawler for Fetch Monitors. Built with TypeScript, Node.js, and Cheerio. Uses redis as a caching layer.',
			},
			{
				icons: [<SiRust size={50} />, <SiMongodb size={50} />],
				name: 'Forest',
				description:
					'Error logging and metrics for Fetch Monitors. Powers A/B testing through MongoDB Aggregations. Full of logs.',
			},
			{
				icons: [<SiRust size={50} />, <SiRedis size={60} />],
				name: 'Conductor',
				description:
					'The job scheduler for Fetch Monitors. Built with Rust and Redis. Keeps everything on track.',
			},
		],
	},
}
