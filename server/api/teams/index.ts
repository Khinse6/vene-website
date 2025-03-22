import { defineEventHandler, sendError, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)

	try {
		const { data, error } = await client
			.from('teams')
			.select('*, cover(*), members(nick)')
			.ilike('slug', '%vengeance%')

		if (error) {
			throw createError({ statusCode: 500, statusMessage: error.message })
		}

		return data
	} catch (error) {
		sendError(
			event,
			error instanceof Error
				? error
				: createError({ statusCode: 500, statusMessage: 'An error occurred' })
		)
		return []
	}
})
