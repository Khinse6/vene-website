import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
	.override('nuxt/vue/single-root', {
		rules: { 'vue/no-multiple-template-root': 'off' },
	})
	.override('nuxt/vue/rules', {
		rules: {
			'vue/block-order': [
				'error',
				{
					order: ['script', 'template', 'style'],
				},
			],
		},
	})
	.override('nuxt/javascript', { rules: { 'no-unexpected-multiline': 'off' } })
