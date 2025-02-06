import type { Serie } from './Serie'
import type { Team } from './Team'

export type Game = {
	name: string
	teams: Team[]
	series: Serie[]
}
