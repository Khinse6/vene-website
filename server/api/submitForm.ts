import { defineEventHandler, readBody, sendError, createError } from 'h3'
import { mainSchema } from '~/utils/schemas'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event)
		const client = await serverSupabaseClient(event)

		const isValid = await verifyTurnstileToken(body.token)
		if (!isValid.success) {
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
				statusMessage: 'Database insert failed: ' + error.message,
			})
		}

		return {
			success: true,
			message: 'Form submitted successfully',
		}
	} catch (error: any) {
		return sendError(event, createError({
			statusCode: error.statusCode || 500,
			statusMessage: error.statusMessage || 'Unexpected server error',
		}))
	}
})
