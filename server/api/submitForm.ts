import { defineEventHandler, readBody } from 'h3'
import { mainSchema } from '@/schemas/schemas'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const client = await serverSupabaseClient(event)

	try {
		const isValid = await verifyTurnstileToken(body.token, event);
		if (!isValid) {
      throw new Error('CAPTCHA verification failed');
    }
    const { token, ...formData } = body;
		const validatedData = mainSchema.parse(formData)

    const { error } = await client.from('forms').insert(validatedData)
    if (error) {
      throw new Error('Failed to insert data into the database')
    }

    return {
      success: true,
      message: 'Form submitted successfully',
    }

  } catch (error) {

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Invalid data',
    }
  }
})
