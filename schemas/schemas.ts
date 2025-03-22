import * as z from 'zod'

export const gameSchema = z.object({
		game: z.string(),
		role: z.string().nonempty(),
		rank: z.string().nonempty(),
	})


export const expSchema = z.object({
	experience: z.string().min(10),
})

export const weekLabels = [
	'Segunda',
	'Terça',
	'Quarta',
	'Quinta',
	'Sexta',
	'Sábado',
	'Domingo',
] as const

export const daySchema = z.object({
	day: z.enum(weekLabels),
	morning: z.boolean().default(false),
	afternoon: z.boolean().default(false),
	evening: z.boolean().default(false),
})

export const mainSchema = z.object({
	name: z.string(),
	age: z.number().int().positive(),
	discord: z.string(),
	about: z.string().min(10),
	comp: z.boolean().default(false),
	games: z.array(gameSchema),
	week: z
		.array(daySchema)
		.length(7)
		.refine((week) => {
			const labels = week.map((entry) => entry.day)
			const uniqueLabels = new Set(labels)
			return labels.length === uniqueLabels.size
		}),
})
