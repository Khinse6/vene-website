<template>
  <NuxtLink
    :to="{ name: 'teams-team', params: { team: team.slug } }"
    class="group relative aspect-[2/3] w-full bg-gray-200"
  >
    <NuxtImg
      v-if="team.cover_bw"
      provider="strapi"
      :src="team.cover_bw.url"
      :alt="team.cover_bw.alternativeText"
      class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
    />
    <NuxtImg
      v-if="team.cover_rgb"
      provider="strapi"
      :src="team.cover_rgb.url"
      :alt="team.cover_rgb.alternativeText"
      class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
    <h2
      class="absolute bottom-0 z-10 w-full bg-black/50 py-5 text-center font-goldman text-lg/4 font-bold"
    >
      {{ team.name }}
    </h2>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ team: Team }>()
</script>
