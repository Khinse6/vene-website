<template>
  <div class="flex flex-col overflow-hidden rounded-xl bg-venegray2">
    <div
      class="flex w-full items-center justify-center font-goldman text-sm text-black"
    >
      <span class="left-clip w-[50%] bg-veneblue p-2 text-start">
        {{ match.game.name }}
      </span>
      <span class="right-clip w-[50%] bg-veneorange p-2 text-end">
        {{ match.name }}
      </span>
    </div>
    <div class="py-4 text-center">
      <div class="flex w-full items-center justify-evenly">
        <NuxtImg
          provider="strapi"
          :src="leftTeam.logo.url"
          :alt="leftTeam.logo.alternativeText"
          class="h-10 sm:h-12 md:h-16 lg:h-20"
        />
        <p class="font-goldman text-2xl font-bold">
          <span v-if="status === 'past'"
            >{{ leftScore }} - {{ rightScore }}</span
          >
          <span v-else>/</span>
        </p>
        <NuxtImg
          provider="strapi"
          :src="rightTeam.logo.url"
          :alt="rightTeam.logo.alternativeText"
          class="h-10 sm:h-12 md:h-16 lg:h-20"
        />
      </div>
      <p class="font-goldman text-xs">{{ localDateTime.localDate }}</p>
      <p class="font-goldman text-xs">{{ localDateTime.localTime }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ match: Match }>()
const houseTeamString = 'Vengeance'
const isHouseTeamLeft = props.match.winner_team.name.includes(houseTeamString)

const currentDate = new Date().toISOString()
const status = computed(() => {
  return props.match.date > currentDate ? 'upcoming' : 'past'
})

const {
  winner_team: houseTeam,
  loser_team: awayTeam,
  winner_score: houseScore,
  loser_score: awayScore,
} = props.match

const [leftTeam, rightTeam, leftScore, rightScore] = isHouseTeamLeft
  ? [houseTeam, awayTeam, houseScore, awayScore]
  : [awayTeam, houseTeam, awayScore, houseScore]

const localDateTime = computed(() => {
  const matchDate = new Date(props.match.date)
  return {
    localDate: matchDate.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
    localTime: matchDate.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
  }
})
</script>

<style scoped>
.left-clip {
  clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%);
}

.right-clip {
  clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
