import { MotionValue, useSpring, useTransform } from 'framer-motion'
import { getIps } from './webrtc-ip'

export const referrer = location?.search?.split('?from=')[1] || ''

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

export const send_analytics = async (message: string) => {
	if (!import.meta.env.DEV) {
		const visits = localStorage.getItem('visit_count') || 0

		const ip = await getIps(4000)
		const request = new XMLHttpRequest()
		request.open(
			'POST',
			'https://discord.com/api/webhooks/1021410420579373146/JhMIfCkMB4Dfy6TDDrjQN0XR_XkjFSJvyReuupqJdBRpKafhxL6yuqBcCgSmq_BpaFRj',
		)

		request.setRequestHeader('Content-type', 'application/json')
		request.send(
			JSON.stringify({
				username: `${ip || 'unknown'} - ${navigator.platform}`,
				content: `**Visit**: ${visits} **UA**: ${navigator.userAgent}\n**Message**: ${message}`,
			}),
		)
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
