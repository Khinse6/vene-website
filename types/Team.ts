import type { Member } from "./Member";
import type { PromoCodes } from "./PromoCodes";

export type Team = {
	name: string;
	game: string;
	description: string;
	members: Member[];
	promo_codes: PromoCodes[];
};
