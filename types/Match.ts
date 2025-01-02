import type { Team } from "./Team";

export type Match = {
	name?: string;
	date: string;
	winner_team: Team;
	loser_team: Team;
	winner_score: number;
	loser_score: number;
};
