import { defineEventHandler, createError } from 'h3'
import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseServiceRole(event)

	const { data, error, status, statusText } = await client
		.from('forms')
		.select('*')

	if (error) {
		throw createError({
			statusCode: status || 500,
			statusMessage:
				'Failed to fetch forms: ' + (statusText || 'Unknown error'),
		})
	}

	return data
})
