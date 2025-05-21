<script setup lang="ts">
	import type { TableColumn } from '@nuxt/ui'
	const week = defineModel<DaySchema[]>({ required: true })

	const props = defineProps({
		editable: {
			type: Boolean,
			default: false,
		},
		compact: {
			type: Boolean,
			default: false,
		},
	})

	const weekColumns: TableColumn<DaySchema>[] = [
		{ accessorKey: 'day', header: 'Dia' },
		{ accessorKey: 'morning', header: '08h - 12h' },
		{ accessorKey: 'afternoon', header: '12h - 19h' },
		{ accessorKey: 'evening', header: '19h - 24h' },
	]

	const tableUI = computed(() =>
		props.compact ? { td: 'p-1 w-fit justify-center', th: 'p-1' } : {}
	)
</script>

<template>
	<UTable
		:data="week"
		:columns="weekColumns"
		:ui="tableUI"
	>
		<template #morning-cell="{ row }">
			<div class="flex justify-center">
				<UCheckbox
					v-if="editable"
					v-model="week[row.index].morning"
				/>
				<UCheckbox
					v-else
					:model-value="row.original.morning"
					disabled
				/>
			</div>
		</template>

		<template #afternoon-cell="{ row }">
			<div class="flex justify-center">
				<UCheckbox
					v-if="editable"
					v-model="week[row.index].afternoon"
				/>
				<UCheckbox
					v-else
					:model-value="row.original.afternoon"
					disabled
				/>
			</div>
		</template>

		<template #evening-cell="{ row }">
			<div class="flex justify-center">
				<UCheckbox
					v-if="editable"
					v-model="week[row.index].evening"
				/>
				<UCheckbox
					v-else
					:model-value="row.original.evening"
					disabled
				/>
			</div>
		</template>
	</UTable>
</template>
