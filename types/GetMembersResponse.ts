import type { Member } from "./Member";

export type GetMembersResponse = {
	data: {
		members: Member[];
	};
};
