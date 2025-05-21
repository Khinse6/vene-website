import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
	const user = useSupabaseUser()
	const supabase = useSupabaseClient()

	async function signInWithGoogle() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: window.location.origin },
		})
		if (error) throw error
	}

	async function signOut() {
		await supabase.auth.signOut()
		await navigateTo('/', { replace: true })
	}

	return {
		user,
		signInWithGoogle,
		signOut,
	}
})
