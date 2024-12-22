<template>
	<div>
		<h1>{{ article?.title }}</h1>
		<div v-html="article?.content"></div>
		<!-- Safely access article content -->
	</div>
</template>

<script>
const { find } = useStrapi();
</script>
