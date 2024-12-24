import type { Image } from "./Image";
import type { PromoCodes } from "./PromoCodes";
import type { Social } from "./Social";
import type { Team } from "./Team";

export type Member = {
	name: string;
	pfp?: Image;
	bio?: string;
	team?: Team;
	social?: Social[];
	promo_codes?: PromoCodes[];
};
