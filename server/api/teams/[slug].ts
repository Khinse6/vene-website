import { defineEventHandler, createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)
	const slug = event.context.params?.slug

	if (!slug) {
		throw createError({ statusCode: 400, statusMessage: 'Slug is required' })
	}

	const {
		data: team,
		error: teamError,
		status: teamStatus,
		statusText: teamStatusText,
	} = await client
		.from('teams')
		.select(
			`id, slug, name,
			members(id, nick, card(url, alt_txt)),
			home_series:series!series_home_team_fkey(*),
			away_series:series!series_away_team_fkey(*)`
		)
		.ilike('slug', `%${slug}%`)
		.single()

	if (teamError) {
		throw createError({
			statusCode: teamStatus || 500,
			statusMessage: teamStatusText || 'Erro desconhecido',
		})
	}

	const currentDate = new Date().toISOString()
	const allSeries = [...(team.home_series || []), ...(team.away_series || [])]

	const upcomingSeries = allSeries.filter((series) => series.date > currentDate)
	const pastSeries = allSeries.filter((series) => series.date <= currentDate)

	return {
		id: team.id,
		slug: team.slug,
		name: team.name,
		members: team.members,
		upcomingSeries,
		pastSeries,
	}
})
