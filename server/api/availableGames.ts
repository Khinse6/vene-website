import { defineEventHandler, sendError, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)

	try {
		const { data, error } = await client
			.from('games')
			.select('name')
			.order('name', { ascending: true })

		if (error) {
			throw createError({ statusCode: 500, statusMessage: error.message })
		}

		return data?.map((game) => game.name) || []
	} catch (error) {
		sendError(
			event,
			error instanceof Error
				? error
				: createError({ statusCode: 500, statusMessage: 'An error occurred' })
		)
	}
})
