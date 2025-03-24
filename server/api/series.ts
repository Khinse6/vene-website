import { defineEventHandler, sendError, createError, getQuery } from 'h3'
import { serverSupabaseClient } from '#supabase/server'
import type { SupabaseClient } from '@supabase/supabase-js'

const createSeriesQuery = (
	client: SupabaseClient,
	currentDate: string,
	limit: number | null,
	dateFilter: 'gt' | 'lte',
	orderDirection: boolean
) => {
	let query = client
		.from('series')
		.select('*, home_team(*, logo(*)), away_team(*, logo(*)), game(*)')
		.order('date', { ascending: orderDirection })

	query = query[dateFilter]('date', currentDate)

	if (limit) {
		query = query.limit(limit)
	}

	return query
}

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)
	const currentDate = new Date().toISOString()

	const { limit } = getQuery(event)
	const parsedLimit = limit ? parseInt(limit as string, 10) : null

	const upcomingQuery = createSeriesQuery(
		client,
		currentDate,
		parsedLimit,
		'gt',
		true
	)
	const pastQuery = createSeriesQuery(
		client,
		currentDate,
		parsedLimit,
		'lte',
		false
	)

	const {
		data: upcomingData,
		error: upcomingError,
		status: upcomingStatus,
		statusText: upcomingStatusText,
	} = await upcomingQuery
	const { data: pastData, error: pastError } = await pastQuery

	if (upcomingError) {
		throw createError({
			statusCode: upcomingStatus,
			statusMessage: upcomingStatusText,
		})
	}
	if (pastError) {
		throw createError({ statusCode: 500, statusMessage: pastError.message })
	}

	return {
		upcomingSeries: upcomingData || [],
		pastSeries: pastData || [],
	}
})
