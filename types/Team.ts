import type { Game } from "./Game";
import type { Image } from "./Image";
import type { Member } from "./Member";
import type { PromoCodes } from "./PromoCodes";

export type Team = {
	name: string;
	game?: Game;
	description: string;
	members: Member[];
	promo_codes: PromoCodes[];
	logo: Image;
	cover_bw?: Image;
	cover_rgb?: Image;
};
