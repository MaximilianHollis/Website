/* eslint-disable react/jsx-key */

import { RiReactjsFill } from 'react-icons/ri'
import {
	SiTypescript,
	SiStyledcomponents,
	SiMongodb,
	SiDiscord,
	SiGooglechrome,
	SiReact,
	SiElectron,
	SiNodedotjs,
} from 'react-icons/si'

export default {
	name: 'Platinum Labs',
	role: 'Full Stack Developer',
	description: 'Exclusive group dedicated to saving users time and money.',
	image: '/platinum/platinum_landing.webp',
	link: 'https://github.com/Platinum-Robotics',
	toolbox: {
		title: 'Products',
		description:
			'At Platinum Labs, I have been able to work on a variety of projects.',
		items: [
			{
				icons: [
					<SiNodedotjs size={50} />,
					<SiElectron size={50} />,
					<RiReactjsFill />,
					<SiStyledcomponents />,
				],
				image: '/platinum/minter_wallets.webp',
				name: 'Minter',
				description: `Build with Electron and React, Minter is Platinum's flagship product.`,
			},
			{
				icons: [
					<SiTypescript size={50} />,
					<SiReact size={50} />,
					<SiGooglechrome size={60} />,
				],
				name: 'Extension',
				description:
					'Built with React and Next.js, Platinum Extension integrates with online marketplaces for maximum ease.',
			},
			{
				icons: [
					<SiTypescript size={50} />,
					<SiMongodb size={60} />,
					<SiDiscord size={50} />,
				],
				name: 'Discord Integrations',
				description: `At the heart of Platinum's community is the Discord server, users can interact with Platinum services through Discord.`,
			},
		],
	},
}
