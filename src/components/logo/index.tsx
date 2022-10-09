import { m, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMeasure, useWindowScroll } from 'react-use'
import { spring } from '../../data/animations'
import { send_analytics } from '../../util'
import Cps from '../not_secret'
import styles from './.module.css'
import { circle, M } from './paths'

export default ({
	pageScroll,
	background,
}: {
	pageScroll?: boolean
	background?: boolean
}) => {
	const [ref, { width }] = useMeasure<HTMLDivElement>()
	const [state, setState] = useState(true)
	const [infinity, setInfinity] = useState(false)
	const { y } = useWindowScroll()
	const pathLength = useSpring(0, spring)
	const [modal, setModal] = useState(false)
	const [score, setScore] = useState(0)
	const [viewed, setViewed] = useState(false)

	// Hacky workaround for Safari. Apple please fix webkit D: it's 2022 and Safari's beginning to feel like iexplorer. Also enable WebPush goddammit.
	const on = state ? 1.01 : 0

	// Throttle
	let counter = 0
	let time = new Date().getTime()
	let startTime = time
	const pressLogo = () => {
		const newTime = new Date().getTime()
		if (counter === 0) {
			startTime = newTime
		}

		counter += 1

		if (newTime > time + 2500) {
			setState((s) => !s)
			time = newTime
			counter = 0
		} else if (counter > 8) {
			setScore(Math.floor((8 / (newTime - startTime)) * 100000) / 100)
			setModal(true)
			counter = 0
		}
	}

	// Workaround for a bug in framer-motion's useScroll hook.
	useEffect(() => {
		const scroll_prop =
			y / (document.documentElement.offsetHeight - window.innerHeight)
		pathLength.set(scroll_prop)

		// Leeway to account for the fact that Chrome mobile browser has an annoying top menu bar that shifts as you scroll down, screwing up viewport height calculations.
		if (scroll_prop > 0.9 && !viewed) {
			setViewed(true)
			send_analytics('Site fully viewed')
		}
	}, [pathLength, viewed, y])

	const color = background ? '#1f1f1f' : '#ffffff'

	return (
		<div
			ref={ref}
			className={pageScroll ? styles.logo : styles.logo_glow}
			role="button"
			aria-label="Press the logo 8 times in 2.5 seconds to see a secret"
			tabIndex={0}
			onClick={pressLogo}
		>
			<div style={{ cursor: 'pointer', transform: 'translateY(2px)' }}>
				<svg
					fill="#00000000"
					width={width}
					height={width}
					viewBox="0 0 40 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					{pageScroll ? (
						<>
							<m.path
								stroke={color}
								strokeWidth="2px"
								d={circle}
								style={{ pathLength }}
							/>
							<m.path
								fill="#1f1f1f"
								stroke={color}
								strokeWidth="2px"
								d={M}
								style={{ pathLength }}
							/>
						</>
					) : (
						<>
							<Cps
								open={modal}
								score={score}
								setInfinity={() => setInfinity(!infinity)}
								onClose={() => setModal(false)}
							/>
							<m.path
								stroke={color}
								strokeWidth={2}
								d={circle}
								initial={{ pathLength: 0, fill: '#ffffff00' }}
								animate={{ pathLength: on, stroke: color }}
								transition={{
									duration: 3,
									ease: 'easeInOut',
									repeat: infinity ? Infinity : 0,
									repeatType: 'mirror',
									repeatDelay: 2,
								}}
							/>
							<m.path
								stroke={color}
								strokeWidth="1px"
								strokeLinecap="round"
								strokeLinejoin="round"
								d={M}
								initial={{ pathLength: 0, strokeWidth: 0, fill: '#00000000' }}
								animate={{ pathLength: on, strokeWidth: on, fill: color }}
								transition={{
									delay: 1,
									duration: 2,
									ease: 'easeInOut',
									repeat: infinity ? Infinity : 0,
									repeatType: 'mirror',
									repeatDelay: 3,
								}}
							/>
						</>
					)}
				</svg>
			</div>
		</div>
	)
}
