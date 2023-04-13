import { ReactNode } from 'react'
import { send_analytics } from '../../util'
import styles from './index.module.css'

export default ({
	children,
	prompt,
	link,
	onClick,
}: {
	children: ReactNode
	prompt?: ReactNode
	link?: string
	onClick?: () => void
}) => (
	<a
		className={styles.chip}
		role="button"
		tabIndex={0}
		href={link}
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
