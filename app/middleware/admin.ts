export default defineNuxtRouteMiddleware(async () => {
	const supabase = useSupabaseClient()
	const user = useSupabaseUser()

	if (!user.value) {
		return navigateTo('/login')
	}

	const { data: profile, error } = await supabase
		.from('profiles')
		.select('role')
		.eq('id', user.value.id)
		.single()

	if (error || !profile || profile.role !== 'admin') {
		return navigateTo('/')
	}
})
