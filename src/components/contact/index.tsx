import { useState } from 'react'
import { BsDownload, BsFilePdf } from 'react-icons/bs'
import { posthog } from 'posthog-js'
import Chip from '../chip'
import styles from './.module.css'

export default () => {
	const [msg, setMsg] = useState('')
	const [email, setEmail] = useState('')
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.left} id="contact">
					<h3
						className="h3"
						style={{
							margin: 0,
						}}
					>
						Contact me
					</h3>
					<p>
						Email:{' '}
						<a target="_blank" href="mailto:contact@maxjs.dev" rel="noreferrer">
							contact@maxjs.dev
						</a>
					</p>
					<h5 className="h5" style={{ marginTop: '36px' }}>
						Send me a message
					</h5>
					<form
						className={styles.form}
						onSubmit={(e) => {
							e.preventDefault()
							const params = {
								username: email,
								content: msg,
							}
							posthog.identify(email)
							posthog.capture('Contacted', params)
						}}
					>
						<input
							required
							placeholder="Please enter your email"
							type="email"
							onChange={({ target }) => setEmail(target.value)}
						/>
						<textarea
							required
							placeholder="Please enter your message here"
							onChange={({ target }) => setMsg(target.value)}
						/>
						<button type="submit">Send</button>
					</form>
				</div>

				<div className={styles.right}>
					<h4 className="h4">Resume</h4>
					<h5
						className="h5"
						style={{
							marginBottom: '10px',
						}}
					>
						Maximilian Hollis • Web Developer
					</h5>
					<p>Skills</p>
					<ul
						style={{
							margin: '8px',
						}}
					>
						<li>React</li>
						<li>TypeScript</li>
						<li>Node.js</li>
						<li>Express</li>
					</ul>
					<p>Experience</p>
					<ul
						style={{
							margin: '8px',
						}}
					>
						<li>
							Full Stack Developer, Fetch Monitors:{' '}
							<i>September 2020 - Present</i>
							<p>Developed responsive and efficient webapps...</p>
						</li>
					</ul>
					<br />
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{' '}
						<Chip
							prompt={
								<>
									Download <BsDownload />
								</>
							}
							link="/resume.pdf"
							onClick={() => posthog.capture('Resume Downloaded')}
						>
							Resume
							<BsFilePdf />
						</Chip>
					</div>
				</div>
			</div>
		</section>
	)
}
