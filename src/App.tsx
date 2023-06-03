import { useRef } from 'react'
import { BsArrowRight, BsMouse } from 'react-icons/bs'
import { GoOctoface } from 'react-icons/go'
import { AnimatePresence, m } from 'framer-motion'
import { useMeasure, useWindowScroll } from 'react-use'
import posthog from 'posthog-js'
import Chip from './components/chip'
import Logo from './components/logo'
import Navbar from './components/navbar'
import styles from './.module.css'
import skills from './data/skills'
import Infosection from './components/infosection'
import Toolbox from './components/toolbox'
import fetchMonitors from './data/projects/fetch-monitors'
import { scrollChip } from './data/animations'
import etherealUi from './data/projects/ethereal-ui'
import platinumLabs from './data/projects/platinum-labs'
import Contact from './components/contact'
import { referrer, send_analytics } from './util'
import Separator from './components/separator'
import Fab from './components/fab/fab'

localStorage.setItem(
	'visit_count',
	(parseInt(localStorage.getItem('visit_count') || '0', 10) + 1).toString(),
)

// Check url tags
send_analytics(`Page loaded, referrer:  __${referrer || 'n/a'}__`)

posthog.init('phc_n2epS0fzbrmE55fDioS2evlChpGBW0S75bjbncLtn4t', {
	api_host: 'https://science.fetchmonitors.com',
})

export default function App() {
	const skillsRef = useRef<HTMLDivElement>(null)
	const { y } = useWindowScroll()
	const [ref, { width }] = useMeasure<HTMLDivElement>()

	return (
		<div ref={ref} className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<div className={styles.logo_container}>
					<Logo />
				</div>
				<m.h1
					initial={{
						color: '#000000',
					}}
					animate={{
						color: '#ffffff',
					}}
					transition={{
						duration: 1,
					}}
				>
					Maximilian Hollis
				</m.h1>
				<h2>Web Developer</h2>
				<div style={{ height: '128px' }} />
				<AnimatePresence>
					{!y && (
						<m.div
							className={styles.chip_container}
							variants={scrollChip}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<Chip
								prompt={
									<>
										Scroll
										<BsMouse />
									</>
								}
								link="#skills"
							>
								See more
							</Chip>
						</m.div>
					)}
				</AnimatePresence>
			</main>
			<m.section ref={skillsRef} id="skills">
				<span>
					<h3 style={{ maxWidth: 'min(600px, 70vw)' }}>Skill Summary</h3>
					<h6 style={{ maxWidth: 'min(600px, 70vw)', textAlign: 'center' }}>
						A list of many of the important technologies I&apos;m familiar with.
					</h6>
					<div className={styles.grid}>
						{skills.map(({ name, description, icon }) => (
							<div
								key={name}
								className={description ? styles.card : styles.small_card}
							>
								<span className="icon">{icon}</span>
								<h5>{name}</h5>
								<p>{description}</p>
							</div>
						))}
					</div>
				</span>
			</m.section>
			<Separator>
				<h3 id="projects">Projects</h3>
			</Separator>
			<Infosection black left={width > 1000} {...fetchMonitors} />
			<Toolbox noPaddingTop {...fetchMonitors.toolbox} />
			<Infosection {...etherealUi} />
			<Toolbox noPaddingTop {...etherealUi.toolbox} />
			<Infosection black right={width > 1000} {...platinumLabs} />
			<Toolbox noPaddingTop {...platinumLabs.toolbox} />
			<Fab />
			<Contact />
			<div className={styles.footer}>
				Made with ❤️ by Maximilian Hollis
				<Chip
					prompt={
						<>
							Visit
							<BsArrowRight />
						</>
					}
					link="https://github.com/MaximilianHollis/Website"
				>
					Source on <GoOctoface /> Github
				</Chip>
			</div>
		</div>
	)
}
