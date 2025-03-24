import { defineEventHandler, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)

	const { data, error, status, statusText } = await client
		.from('teams')
		.select('*, cover(*), members(nick)')
		.ilike('slug', '%vengeance%')

	if (error) {
		throw createError({
			statusCode: status || 500,
			statusMessage: statusText || 'Erro desconhecido',
		})
	}

	return data
})
