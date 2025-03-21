import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as { token: string }
  const captchaToken = body.token

  const secretKey = process.env.TURNSTILE_SECRET_KEY
  const response = await $fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: secretKey as string,
      response: captchaToken as string, 
    }),
  })

  const result = await response.json()

  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: 'Captcha verification failed.',
    })
  }

  return { success: true }
})
