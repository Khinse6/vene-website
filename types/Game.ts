import type { Match } from "./Match";
import type { Team } from "./Team";

export type Game = {
	name: string;
	teams: Team[];
	matches: Match[];
};
