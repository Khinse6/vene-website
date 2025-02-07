import type { Image } from './Image'
import type { PromoCodes } from './PromoCodes'
import type { Social } from './Social'

export type Sponsor = {
	name: string
	logo: Image
	social?: Social
	promo_codes: PromoCodes[]
}
