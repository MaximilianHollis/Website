import { m, useDomEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { spring } from '../../data/animations'
import { useParallax } from '../../util'
import styles from './.module.css'

export default ({
	className,
	src,
	alt,
}: {
	className?: string
	src?: string
	alt?: string
}) => {
	const [open, setOpen] = useState(false)
	const [zFix, setZFix] = useState(false)

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref })
	const width = window.innerWidth

	const y = useParallax(scrollYProgress, 300, 0.2)
	useDomEvent(useRef(window), 'scroll', () => open && setOpen(false))

	return (
		<m.div className={`${styles.image_container} ${open ? styles.open : ''} `}>
			<m.div
				animate={{ opacity: open ? 1 : 0 }}
				transition={spring}
				className={`${styles.shade} ${zFix ? styles.z_fix : ''}`}
				onAnimationComplete={() => setZFix(false)}
				onClick={() => setOpen(false)}
			/>
			<m.img
				ref={ref}
				layout
				whileHover={{ scale: 1.025 }}
				src={src}
				style={open || width < 1000 ? { y: 0 } : { y }}
				alt={alt || 'No alt provided'}
				transition={spring}
				className={`${className || ''} ${zFix ? styles.z_fix : ''} `}
				onClick={() => {
					setZFix(true)
					setOpen(!open)
				}}
			/>
		</m.div>
	)
}
