import devTools from 'devtools-detect'
import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { RiCloseLine } from 'react-icons/ri'
import QRCode from 'react-qr-code'
import { useGetSet, useInterval } from 'react-use'
import { send_analytics, logo_ascii } from '../../util'
import styles from './.module.css'

const website = {
	title: 'Website QR code',
	url: `${location.href}`,
	button: 'Display resume QR code',
}

const resume = {
	title: 'Resume QR code',
	url: `${location.href}resume.pdf`,
	button: 'Display website QR code',
}

const Component = ({
	onClose,
	open,
	score,
	setInfinity,
}: {
	onClose: VoidFunction
	setInfinity: VoidFunction
	open: boolean
	score: number
}) => {
	const [code, setCode] = useState(website)
	// Prevent closure issue inside interval
	const [state, setState] = useGetSet(false)

	useInterval(() => {
		setState(() => {
			if (state() !== devTools.isOpen && devTools.isOpen) {
				console.clear()
				send_analytics('Devtools opened')
				console.log(
					`%c${logo_ascii}`,
					'color: #6492c7; font-size: 9px; line-height: 10px;',
				)
				console.log(
					`%chttps://maxjs.dev`,
					'color: #6492c7; font-size: 20px; line-height: 40px;',
				)
				console.log('Want to hire me? ', 'https://github.com/MaximilianHollis')
				console.log(
					`Want to see this website's source code? `,
					'https://github.com/MaximilianHollis/Website',
				)
			}

			return devTools.isOpen
		})
	}, 500)

	return (
		<AnimatePresence>
			{open && (
				<m.div
					className={styles.modal_container}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					exit={{
						opacity: 0,
						scale: 0.6,
					}}
					initial={{
						opacity: 0,
						scale: 0.7,
					}}
				>
					<m.div className={styles.modal}>
						<button className={styles.close} type="button" onClick={onClose}>
							<RiCloseLine size={20} />
						</button>
						<h4>Secret Menu no. 1</h4>

						<h5>{code.title}</h5>
						<div className={styles.qr}>
							<QRCode value={code.url} />
						</div>
						<button
							type="button"
							onClick={() =>
								setCode(code.url === website.url ? resume : website)
							}
						>
							{code.button}
						</button>

						<p
							style={{
								margin: 0,
							}}
						>
							Your clicks per second was: {score}
						</p>
						<button
							type="button"
							onClick={() => {
								setInfinity()
								onClose()
							}}
						>
							Toggle infinite repeat log?
						</button>
					</m.div>
				</m.div>
			)}
		</AnimatePresence>
	)
}

export default ({
	onClose,
	open,
	score,
	setInfinity,
}: {
	onClose: VoidFunction
	setInfinity: VoidFunction
	open: boolean
	score: number
}) =>
	createPortal(
		<Component
			open={open}
			score={score}
			setInfinity={setInfinity}
			onClose={onClose}
		/>,
		document.body,
	)
