<template>
  <div :key="route.params.team">
    <p>{{ team }}</p>
  </div>
</template>

<script setup>
const route = useRoute() // Get the current route
const team = route.params.team // Extract the team from the route parameters
</script>
