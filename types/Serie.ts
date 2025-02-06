import type { Game } from './Game'
import type { Team } from './Team'

type Away_Team = {
	name: string
	logo?: Image
}

export type Serie = {
	name: string
	date: string
	home_team: Team
	home_score: number
	away_team: Away_Team
	away_score: number
	game: Game
}
