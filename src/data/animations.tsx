// Common "Feel" for all animations
export const spring = {
	type: 'spring',
	stiffness: 100,
	damping: 20,
}

export const scrollChip = {
	initial: {
		opacity: 0,
		y: 60,
		scale: 1,
		transition: spring,
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			...spring,
			delay: 3,
		},
	},
	exit: {
		opacity: 0,
		y: 0,
		scale: 1.1,
		transition: spring,
	},
}

export const textSpring = {
	type: 'spring',
	stiffness: 500,
	damping: 100,
	delay: 0.25,
}
