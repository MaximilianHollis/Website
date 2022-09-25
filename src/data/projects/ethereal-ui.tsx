/* eslint-disable react/jsx-key */

import {
	BsCode,
	BsLaptop,
	BsLightning,
	BsPerson,
	BsWindow,
} from 'react-icons/bs'
import { RiFireFill, RiOpenSourceFill, RiReactjsFill } from 'react-icons/ri'
import {
	SiTypescript,
	SiStyledcomponents,
	SiSpeedtest,
	SiFramer,
} from 'react-icons/si'

export default {
	name: 'Ethereal2',
	role: 'Creator, Maintainer',
	description:
		'A beautiful, modern, and accessible UI library for React. Fully open source, of course.',
	link: 'https://github.com/Fetch-Monitors/Ethereal2',
	image: '/ethereal2/showcase.png',
	toolbox: {
		title: 'Feature Rich',
		description:
			'Designed with DX paramount, Ethereal2 gives developers the power they need to build what their users deserve.',
		items: [
			{
				icons: [
					<SiTypescript size={50} />,
					<RiReactjsFill />,
					<SiFramer size={60} />,
					<SiStyledcomponents />,
				],
				image: '/ethereal2/table.png',
				name: 'Sparks joy',
				description:
					'Built with React TypeScript, Styled Components, and Framer motion, Ethereal2 leverages the power of animation to delight users.',
			},
			{
				icons: [
					<SiSpeedtest />,
					<RiFireFill />,
					<BsLightning size={60} />,
					<BsWindow />,
				],
				name: 'Performance First',
				description:
					'Using techniques such as window virtualization and memoization, Ethereal2 is blazing fast.',
			},
			{
				icons: [
					<BsPerson size={50} />,
					<BsLaptop size={50} />,
					<BsCode size={60} />,
					<RiOpenSourceFill size={60} />,
				],
				name: 'Developers Developers Developers',
				description:
					'Ethereal2 Empowers developers to build beautiful, performant, and accessible applications.',
			},
		],
	},
}
