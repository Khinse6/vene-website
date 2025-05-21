<template>
	<div class="flex min-h-screen flex-col">
		<AppHeader class="z-50" />
		<main class="main-gradient flex flex-1 flex-col">
			<UContainer class="flex flex-1 flex-col items-center py-10">
				<slot />
			</UContainer>
		</main>
		<AppFooter />
	</div>
</template>
