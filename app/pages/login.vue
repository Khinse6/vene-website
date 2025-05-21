<script setup lang="ts">
	import { useAuthStore } from '~/stores/auth'

	const auth = useAuthStore()

	async function onGoogleLogin() {
		await auth.signInWithGoogle()
	}

	async function onLogout() {
		await auth.signOut()
	}
</script>

<template>
	<div class="flex flex-1 flex-col justify-center gap-6">
		<p v-if="auth.user">Logged in as {{ auth.user.email }}</p>
		<p v-else>Not Logged in</p>
		<UButton
			type="button"
			color="neutral"
			class="w-full max-w-xs"
			icon="ri:google-fill"
			label="Log in With Google"
			variant="subtle"
			@click="onGoogleLogin"
		/>

		<UButton
			type="button"
			color="neutral"
			variant="subtle"
			class="w-full max-w-xs"
			label="Logout"
			@click="onLogout"
		/>
	</div>
</template>
