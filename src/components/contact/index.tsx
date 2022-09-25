import { useState } from 'react'
import { BsDownload, BsFilePdf } from 'react-icons/bs'
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
					<h5 style={{ marginTop: '36px' }}>Send me a message</h5>
					<form
						className={styles.form}
						onSubmit={(e) => {
							const request = new XMLHttpRequest()
							request.open(
								'POST',
								'https://discord.com/api/webhooks/1019611966249107497/QJ8d_MNF8xjW98jtr6gV1N4_BOq9915jKbnLc8S-uffshmwSNohkEf6uhpSYR-Dg47G0',
							)

							request.setRequestHeader('Content-type', 'application/json')

							const params = {
								username: email,
								content: msg,
							}

							request.send(JSON.stringify(params))
							e.preventDefault()
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
					<h4>Resume</h4>
					<h5
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
							Tech lead, Fetch Monitors: <i>September 2020 - Present</i>
							<p>Coordinated development across all aspects of...</p>
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
