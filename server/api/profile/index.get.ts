import type { H3Event } from 'h3'
import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event: H3Event) => {
	const client = await serverSupabaseClient(event)
	const user = await serverSupabaseUser(event)

	if (!user) {
		event.node.res.statusCode = 401
		return { error: 'Not authenticated' }
	}

	const { data: profile, error } = await client
		.from('profiles')
		.select('role, id')
		.eq('id', user.id)
		.single()

	if (error) {
		event.node.res.statusCode = 500
		return { error: 'Failed to fetch profile' }
	}

	return profile
})
