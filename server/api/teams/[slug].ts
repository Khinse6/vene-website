import { defineEventHandler, sendError, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)
	const slug = event.context.params?.slug

	if (!slug) {
		throw createError({ statusCode: 400, statusMessage: 'Slug is required' })
	}

	const { data, error, status, statusText } = await client
		.from('teams')
		.select(
			'*, members:members(*, card(*)), home_series:series!Serie_home_team_fkey(*), away_series:series!Serie_away_team_fkey(*)'
		)
		.ilike('slug', slug)
		.single()

	if (error) {
		throw createError({
			statusCode: status || 500,
			statusMessage: statusText || 'Erro desconhecido',
		})
	}

	return data
})
