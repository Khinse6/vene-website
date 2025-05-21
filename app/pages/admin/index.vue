<script setup lang="ts">
	import { h, ref, resolveComponent } from 'vue'
	import type { TableColumn } from '@nuxt/ui'

	definePageMeta({
		layout: 'admin',
		middleware: 'admin',
	})

	const UButton = resolveComponent('UButton')

	const { data, refresh } = await useFetch('/api/form')
	const expanded = ref([])

	const formColumns: TableColumn<Schema>[] = [
		{
			id: 'expand',
			cell: ({ row }) =>
				h(UButton, {
					color: 'neutral',
					variant: 'ghost',
					icon: 'i-lucide-chevron-down',
					square: true,
					'aria-label': 'Expand',
					ui: {
						leadingIcon: [
							'transition-transform',
							row.getIsExpanded() ? 'duration-200 rotate-180' : '',
						],
					},
					onClick: () => row.toggleExpanded(),
				}),
		},
		{ accessorKey: 'name', header: 'Nome' },
		{ accessorKey: 'age', header: 'Idade' },
		{ accessorKey: 'discord', header: 'Discord' },
		{
			accessorKey: 'games',
			header: 'Jogos',
			cell: ({ row }) => {
				const games = row.original.games || []
				return games.map((g) => `${g.game}, ${g.rank}, ${g.role}`).join(' | ')
			},
			filterFn: (row, id, value) => {
				const games = row.original.games || []
				return games.some((g) =>
					g.game.toLowerCase().includes(value.toLowerCase())
				)
			},
		},
	]

	const table = ref(null)
	const columnFilters = ref([
		{
			id: 'games',
			value: '',
		},
	])
</script>

<template>
	<div class="flex w-full flex-1 flex-col">
		<div class="flex items-center gap-5">
			<UInput
				:model-value="
					table?.tableApi?.getColumn('games')?.getFilterValue() as string
				"
				class="max-w-sm"
				placeholder="Filtrar por jogo..."
				@update:model-value="
					table?.tableApi?.getColumn('games')?.setFilterValue($event)
				"
			/>
			<UButton
				icon="i-material-symbols-refresh"
				variant="subtle"
				@click="refresh()"
			/>
		</div>

		<UTable
			ref="table"
			v-model:expanded="expanded"
			v-model:column-filters="columnFilters"
			:data="data"
			:columns="formColumns"
			:expandable="true"
			class="flex w-fit"
		>
			<template #expanded="{ row }">
				<div class="mx-4 flex flex-row gap-4">
					<WeekTable
						v-model="row.original.week"
						:compact="true"
					/>
					<div
						class="flex max-w-4xl flex-col flex-wrap gap-4 break-words whitespace-pre-wrap"
					>
						<div>
							<h2>Experiência</h2>
							<p class="ml-2">
								{{ row.original.experience || 'Sem Experiência' }}
							</p>
						</div>
						<div>
							<h2>Sobre</h2>
							<p class="ml-2">
								{{ row.original.about || 'Sem descrição' }}
							</p>
						</div>
					</div>
				</div>
			</template>
		</UTable>
	</div>
</template>
