import { ReactNode } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import styles from './.module.css'

export default ({ children }: { children: ReactNode }) => (
	<div className={styles.container}>
		<div className={styles.arrow}>
			<BsArrowDown />
		</div>
		{children}
	</div>
)
