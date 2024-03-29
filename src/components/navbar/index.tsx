import { BsArrowRight, BsGithub } from 'react-icons/bs'
import { posthog } from 'posthog-js'
import Chip from '../chip'
import Logo from '../logo'
import styles from './.module.css'

export default () => (
	<nav className={styles.nav}>
		<div className={styles.container}>
			<a
				href="/"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '10px',
					fontWeight: 'bold',
				}}
			>
				<span style={{ width: '36px' }}>
					<Logo pageScroll />
				</span>
				{import.meta.env.DEV ? 'Localhost' : 'Maxjs.dev'}
			</a>
			<div>
				<ul className={styles.list}>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li onClick={() => posthog.capture('Resume Downloaded')}>
						<a href="/resume.pdf">Resume</a>
					</li>
				</ul>
			</div>
			<div className={styles.right}>
				<Chip
					prompt={
						<>
							Visit
							<BsArrowRight />
						</>
					}
					link="https://github.com/MaximilianHollis"
				>
					<BsGithub /> Github
				</Chip>
			</div>
		</div>
	</nav>
)
