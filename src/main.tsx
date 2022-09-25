import { domMax, LazyMotion } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<LazyMotion strict features={domMax}>
			<App />
		</LazyMotion>
	</React.StrictMode>,
)
