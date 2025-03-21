// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: { 'vue/no-multiple-template-root': 'off', 'no-console': 'warn' },
})
// Your custom configs here
