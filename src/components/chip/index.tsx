import { ReactNode } from 'react'
import { send_analytics } from '../../util'
import styles from './index.module.css'

export default ({
	children,
	prompt,
	link,
	onClick,
}: {
	readonly children: ReactNode
	readonly prompt?: ReactNode
	readonly link?: string
	readonly onClick?: () => void
}) => (
	<a
		className={styles.chip}
		role="button"
		tabIndex={0}
		target="_blank"
		href={link}
		rel="noreferrer"
		onPointerOver={() => send_analytics(`Hovered over chip: ${prompt}`)}
		onClick={onClick}
	>
		<span
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 5,
			}}
		>
			{children}
		</span>
		{prompt && (
			<>
				{' '}
				<div className="divider" />
				<div>{prompt}</div>
			</>
		)}
	</a>
)
