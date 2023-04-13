import { MotionValue, useSpring, useTransform } from 'framer-motion'
import { getIps } from './webrtc-ip'

export const referrer = `${location?.search?.split('?from=')[1]}${
	document?.referrer || ''
}`

export function useParallax(
	value: MotionValue<number>,
	distance: number,
	factor = 1,
) {
	return useSpring(
		useTransform(value, [0, 1], [-distance * factor, distance * factor]),
		{
			mass: 1,
			stiffness: 200,
			damping: 50,
		},
	)
}

const cached_ip: string = localStorage.getItem('ip') || ''
const cached_message: string = localStorage.getItem('cached_message') || ''

export const send_analytics = async (message: string) => {
	if (cached_message === message) {
		return
	}

	localStorage.setItem('cached_message', message)

	const visits = localStorage.getItem('visit_count') || 0

	let ip = ''
	if (cached_ip) {
		ip = cached_ip
	} else {
		ip = (await getIps(4000)) as string
		localStorage.setItem('ip', ip)
	}

	const request = new XMLHttpRequest()
	const res = {
		username: `${ip || 'unknown'} - ${navigator.platform}`,
		content: `**Visit**: ${visits} **UA**: ${navigator.userAgent}\n**Message**: ${message}`,
	}
	if (import.meta.env.DEV) {
		console.log(res)
	} else {
		request.open(
			'POST',
			'https://discord.com/api/webhooks/1021410420579373146/JhMIfCkMB4Dfy6TDDrjQN0XR_XkjFSJvyReuupqJdBRpKafhxL6yuqBcCgSmq_BpaFRj',
		)

		request.setRequestHeader('Content-type', 'application/json')
		request.send(JSON.stringify(res))
	}
}

export const logo_ascii = `
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@#       @@@@@@@@@@@@@@@       &@@@@@@@@@@@@@@
@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@
@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@
@@@@@#   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@
@@@@   .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@
@@@   @@@@@@@@@@@@         @@@@@@@@          @@@@@@@@@@   @@
@@   @@@@@@@@@@@@@          @@@@@@           @@@@@@@@@@/   @
@@   @@@@@@@@@@@@@           &@@@            @@@@@@@@@@@   @
@,  #@@@@@@@@@@@@@            %@             @@@@@@@@@@@.  %
@   @@@@@@@@@@@@@@                           @@@@@@@@@@@@   
@,  #@@@@@@@@@@@@@       @                   @@@@@@@@@@@   %
@@   @@@@@@@@@@@@@       @@         @        @@@@@@@@@@@   @
@@   %@@@@@@@@@@@@       @@@       @@        @@@@@@@@@@*   @
@@@   @@@@@@@@@@@@       @@@@     @@@        @@@@@@@@@@   @@
@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@
@@@@@%   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@
@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    @@@@@@
@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@
@@@@@@@@@@@@     @@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@
@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@                   @@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`
