import { defineEventHandler, createError, getQuery } from 'h3'
import { serverSupabaseClient } from '#supabase/server'
import type { SupabaseClient } from '@supabase/supabase-js'

const fetchSeries = async (
	client: SupabaseClient,
	date: string,
	limit: number,
	filter: 'gt' | 'lte',
	ascending: boolean
) => {
	const { data, error, status, statusText } = await client
		.from('series')
		.select(
			'name, date, home_score, away_score, home_team(name, logo), away_team(name, logo), game(name)'
		)
		.order('date', { ascending })
		[filter]('date', date)
		.limit(limit)

	if (error) {
		throw createError({ statusCode: status, statusMessage: statusText })
	}

	return data ?? []
}

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)
	const { limit } = getQuery(event) as { limit: string }
	const parsedLimit = parseInt(limit, 10) || 0
	const currentDate = new Date().toISOString()

	const [upcomingSeries, pastSeries] = await Promise.all([
		fetchSeries(client, currentDate, parsedLimit, 'gt', true),
		fetchSeries(client, currentDate, parsedLimit, 'lte', false),
	])

	return { upcomingSeries, pastSeries }
})
