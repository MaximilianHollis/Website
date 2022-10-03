import { m } from 'framer-motion'
import { TbClick } from 'react-icons/tb'
import { textSpring } from '../../data/animations'
import Chip from '../chip'
import Image from '../image'
import styles from './.module.css'

export default ({
	link,
	name,
	role,
	description,
	image,
	imageTwo,
	black,
	left,
	right,
}: {
	link?: string
	name: string
	role?: string
	description?: string
	image?: string
	imageTwo?: string
	black?: boolean
	left?: boolean
	right?: boolean
}) => (
	<section className={`${styles.container} ${black ? styles.transparent : ''}`}>
		<div
			className={
				left
					? styles.info_section_left
					: right
					? styles.info_section_right
					: styles.info_section
			}
		>
			<span className={styles.content}>
				<m.span
					className={styles.text}
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={textSpring}
				>
					<h3>{name}</h3>
					<h4>{role}</h4>
					<h6>{description}</h6>
				</m.span>

				<m.span
					className={styles.children}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ ...textSpring, delay: 1 }}
				>
					{link && (
						<Chip
							prompt={
								<>
									Click
									<TbClick />
								</>
							}
							link={link}
						>
							Visit website
						</Chip>
					)}
				</m.span>
			</span>
			<span className={styles.image_box}>
				<m.div className={styles.image_wrapper}>
					<div className={styles.image_background} />
					<Image src={image} />
				</m.div>
			</span>
		</div>
	</section>
)
