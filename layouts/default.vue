<template>
  <div>
    <AppHeader />
    <slot />
  </div>
</template>

<script setup>
// Set page metadata in Nuxt 3 using `definePageMeta`
definePageMeta({
	title: "Vengeance Experts",
	description: "An E-sports Organization"
});
</script>
