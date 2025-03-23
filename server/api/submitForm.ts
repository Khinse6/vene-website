import {
	defineEventHandler,
	readBody,
	sendError,
	createError,
	H3Error,
} from 'h3'
import { mainSchema } from '~/utils/schemas'
import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
	try {
		const { token, ...formData } = await readBody(event)
		const client = await serverSupabaseServiceRole(event)
		const isValid = await verifyTurnstileToken(token)
		if (!isValid.success) {
			throw createError({
				statusCode: 400,
				statusMessage: 'CAPTCHA verification failed',
			})
		}
		const result = mainSchema.safeParse(formData)

		if (!result.success) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Invalid Form data',
			})
		}

		const { error } = await client.from('forms').insert(result.data)
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
	} catch (error) {
		return sendError(
			event,
			createError({
				statusCode: error instanceof H3Error ? error.statusCode : 500,
				statusMessage:
					error instanceof H3Error
						? error.statusMessage
						: 'Unexpected server error',
			})
		)
	}
})
