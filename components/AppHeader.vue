<template>
  <header class="sticky top-0 bg-veneblack p-2 font-goldman text-veneblue uppercase">
    <nav class="mx-[25%] flex items-center font-bold text-xl">
      <!-- Left Navigation -->
      <div class="flex flex-1 justify-evenly">
        <NuxtLink to="/teams" class="hover:text-veneorange">Equipas</NuxtLink>
        <NuxtLink to="/about" class="hover:text-veneorange">Sobre Nós</NuxtLink>
      </div>

      <!-- Logo -->
      <NuxtLink to="/">
        <img class="flex h-24" src="/img/LOGO_SIMPLIFICADO_VNEE_COR.png" alt="Organization Logo"/>
      </NuxtLink>

      <!-- Right Navigation -->
      <div class="flex flex-1 justify-evenly">
        <NuxtLink to="/events" class="uppercase hover:text-veneorange">Eventos</NuxtLink>
        <NuxtLink to="/news" class="uppercase hover:text-veneorange">Notícias</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
	name: "AppHeader"
};
</script>