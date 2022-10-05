import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { BsArrowRight, BsStarFill } from 'react-icons/bs'
import { TbClick } from 'react-icons/tb'
import { useWindowScroll } from 'react-use'
import { scrollChip } from '../../data/animations'
import { referrer, send_analytics } from '../../util'
import Chip from '../chip'
import styles from './.module.css'

export default () => {
	const [showTy, setShowTy] = useState(false)
	const { y } = useWindowScroll()
	const scroll_prop =
		y / (document.documentElement.offsetHeight - window.innerHeight)

	const from_github =
		referrer.includes('github') ||
		referrer.includes('gh') ||
		referrer.includes('discord')

	const starred = localStorage.getItem('starred')

	return (
		<AnimatePresence>
			{scroll_prop < 0.95 && scroll_prop > 0.05 && from_github && !starred && (
				<m.div
					className={styles.wrapper}
					variants={scrollChip}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					{showTy ? (
						<Chip
							prompt={
								<>
									Close
									<TbClick />
								</>
							}
							onClick={() => {
								localStorage.setItem('starred', 'true')
								send_analytics('starred')
								setShowTy(false)
							}}
						>
							Thank you ❤️
						</Chip>
					) : (
						<Chip
							prompt={
								<>
									Visit Github
									<BsArrowRight />
								</>
							}
							onClick={() => {
								setShowTy(true)
								window.open('https://github.com/MaximilianHollis/Website')
							}}
						>
							Give a <BsStarFill />
						</Chip>
					)}
				</m.div>
			)}
		</AnimatePresence>
	)
}
