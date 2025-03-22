import { defineEventHandler, readBody, sendError, createError } from 'h3'
import { mainSchema } from '~/utils/schemas'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const client = await serverSupabaseClient(event)

	try {
		const isValid = await verifyTurnstileToken(body.token)
		if (!isValid) {
			throw createError({
				statusCode: 400,
				statusMessage: 'CAPTCHA verification failed',
			})
		}

		const { token, ...formData } = body
		const validatedData = mainSchema.parse(formData)

		const { error } = await client.from('forms').insert(validatedData)
		if (error) {
			throw createError({
				statusCode: 500,
				statusMessage: 'Failed to insert data into the database',
			})
		}

		return {
			success: true,
			message: 'Form submitted successfully',
		}
	} catch (error) {
		return sendError(
			event,
			error instanceof Error
				? createError({ statusCode: 500, statusMessage: error.message })
				: createError({ statusCode: 500, statusMessage: 'Invalid data' })
		)
	}
})
