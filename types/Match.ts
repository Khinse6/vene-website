import type { Team } from "./Team";

export type Match = {
	name?: string;
	date: string;
	details: MatchDetails[];
};

type MatchDetails = {
	team: Team;
	score: number;
};
