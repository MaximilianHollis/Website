import { MotionValue, useSpring, useTransform } from 'framer-motion'
import { posthog } from 'posthog-js'

export const referrer = `${location?.search?.split('?from=')[1]}${
	document?.referrer || ''
}`

export const send_analytics = (message: string, data?: object) => {
	posthog.capture(message, data || null)
}

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
