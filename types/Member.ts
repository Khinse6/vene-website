import type { Image } from './Image'
import type { PromoCodes } from './PromoCodes'
import type { Social } from './Social'
import type { Team } from './Team'

export type Member = {
	nick: string
	name: string
	card?: Image
	team?: Team
	social?: Social
	promo_codes?: PromoCodes[]
}
