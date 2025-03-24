import { defineEventHandler, readBody, createError } from 'h3'
import { mainSchema } from '~/utils/schemas'
import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const { token, ...formData } = await readBody(event)
	const client = await serverSupabaseServiceRole(event)
	const isValid = await verifyTurnstileToken(token, event)

	if (!isValid.success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Verificação CAPTCHA falhada',
		})
	}

	const result = mainSchema.safeParse(formData)
	if (!result.success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Dados do form inválidos',
			data: result.error.format(),
		})
	}

	const { error, status, statusText } = await client
		.from('forms')
		.insert(result.data)
	if (error) {
		throw createError({
			statusCode: status || 500,
			statusMessage:
				'Falha ao inserir na base de dados: ' +
				(statusText || 'Erro desconhecido'),
		})
	}

	return {
		success: true,
		message: 'Form submetido com sucesso',
	}
})
