import type { Member } from "./Member";
import type { Sponsor } from "./Sponsor";
import type { Team } from "./Team";

export type PromoCodes = {
	code: string;
	url: string;
	member: Member;
	team: Team;
	sponsor: Sponsor;
};
