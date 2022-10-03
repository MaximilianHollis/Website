import { m, useScroll } from 'framer-motion'
import { Fragment, useRef } from 'react'
import { useParallax } from '../../util'
import styles from './.module.css'
import Image from '../image'
import { textSpring } from '../../data/animations'

interface Item {
	icons: JSX.Element[]
	name: string
	description: string
	image?: string
	color?: string
}

const colors = [
	'var(--blue)',
	'var(--purple)',
	'var(--magenta)',
	'var(--orange)',
	'var(--red)',
]

const card_variant = {
	visible: {
		opacity: 1,
		y: 0,
	},
	hidden: { opacity: 0, y: 100 },
}

const icon_variant = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

const Card = ({ props, index }: { props: Item; index: number }) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref })
	const y = useParallax(scrollYProgress, 300, 0.1)
	const gradient = `linear-gradient(${colors[index % colors.length]}, ${
		colors[index + (1 % colors.length)]
	})`
	return (
		<m.div
			key={props.name}
			ref={ref}
			className={`${styles.card} ${!props.image && styles.small_card}`}
			viewport={{ once: true, amount: 0.5 }}
			transition={{
				...textSpring,
				delay: index * 0.05,
			}}
			initial="hidden"
			whileInView="visible"
			variants={card_variant}
		>
			<div className={styles.left}>
				<div className={styles.icon_row}>
					{props.icons.map((icon, icon_index) => (
						// These indexes will never be reordered or changed, so we can use the index as a key
						// eslint-disable-next-line react/no-array-index-key
						<Fragment key={icon_index}>
							<m.span
								initial="hidden"
								whileInView="visible"
								variants={icon_variant}
								transition={{
									...textSpring,
									delay: (icon_index + 1) * 0.1 + index * 0.05,
								}}
								viewport={{ once: true, amount: 1 }}
							>
								{icon}
							</m.span>
							{icon_index !== props.icons.length - 1 && (
								<div className="divider" />
							)}
						</Fragment>
					))}
				</div>
				<m.h4 style={{ color: colors[index % colors.length] }}>
					{props.name}
				</m.h4>
				<p>{props.description}</p>
			</div>
			{props.image && (
				<div className={styles.right} style={{ background: gradient }}>
					<Image src={props.image} alt={props.name} className={styles.image} />
				</div>
			)}
		</m.div>
	)
}

export default ({
	noPaddingTop,
	title,
	description: desc,
	items,
}: {
	noPaddingTop?: boolean
	title: string
	description: string
	items: Item[]
}) => {
	const big_items = items.filter(({ image }) => !!image)
	const small_items = items
		.filter(({ image }) => !image)
		// Into pairs
		.reduce((acc, item, i) => {
			if (i % 2 === 0) {
				acc.push([item])
			} else {
				acc[acc.length - 1].push(item)
			}

			return acc
		}, [] as Partial<Item> & Omit<Item, 'image'>[][])
	return (
		<section
			className={`${styles.container} ${noPaddingTop && 'no_padding_top'}`}
		>
			<div className={styles.toolbox}>
				<m.div
					className={styles.title}
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ ...textSpring, delay: 0 }}
				>
					<h3 style={{ textAlign: 'left' }}>{title}</h3>
					<h6 style={{ maxWidth: '800px' }}>{desc}</h6>
				</m.div>
				<div className={styles.grid}>
					{big_items.map((props, i) => (
						<Card key={props.name} props={props} index={i} />
					))}
					{small_items.map(([left, right], i) => (
						<div key={left.name} className={styles.card_row}>
							{left && <Card props={left} index={big_items.length + i} />}
							{right && <Card props={right} index={big_items.length + i + 1} />}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
