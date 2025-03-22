<script setup lang="ts">
	import type { FormSubmitEvent, TableColumn } from '@nuxt/ui'
	const { data: availableGames } = await useAsyncData('available-games', () =>
		$fetch('/api/availableGames')
	)

	const columns: TableColumn<DaySchema>[] = [
		{ accessorKey: 'day', header: 'Dia' },
		{ accessorKey: 'morning', header: '08h - 12h' },
		{ accessorKey: 'afternoon', header: '12h - 19h' },
		{ accessorKey: 'evening', header: '19h - 24h' },
	]
	const token = ref()
	const state = reactive<
		Partial<
			Schema &
				ExpSchema & {
					games: Partial<GameSchema>[]
				}
		>
	>({
		games: [{ game: '', role: '', rank: '' }],
		week: weekLabels.map((day) => ({
			day,
			morning: false,
			afternoon: false,
			evening: false,
		})),
	})

	function addGame() {
		if (!state.games) {
			state.games = []
		}
		state.games.push({})
	}

	function removeGame(index: number) {
		if (state.games && state.games.length > 1) {
			state.games.splice(index, 1)
		}
	}
	function onCreate(item: string, index: number) {
		if (!state.games) {
			state.games = []
		}
		availableGames.value?.push(item)
		state.games[index].game = item
	}

	async function onSubmit(formEvent: FormSubmitEvent<Schema>) {
		const toast = useToast()
		try {
			const { data, error } = await useFetch('/api/submitForm', {
				method: 'POST',
				body: {
					...formEvent.data,
					token: token.value,
				},
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (error.value) {
				throw new Error(error.value.message || 'Unknown error')
			}

			const result = data.value
			toast.add({
				title: result?.success ? 'Success' : 'Failed',
				description: result?.message,
				color: result?.success ? 'success' : 'error',
			})
		} catch (error) {
			let errorMessage = 'An unknown error occurred.'

			if (error instanceof Error) {
				errorMessage = error.message
			} else if (typeof error === 'string') {
				errorMessage = error
			}

			toast.add({
				title: 'Error',
				description: errorMessage,
				color: 'error',
			})
		}
	}
</script>

<template>
	<section class="max-w-[80ch]">
		<h2 class="pb-4 text-2xl font-bold">Quem somos</h2>
		<p class="pb-4">
			Fundada a 01 de Maio de 2024, a Vengeance Experts decidiu evoluir no mundo
			dos e-sports e tornar-se uma organização com intenção de renome nacional.
			Com início em Valorant, podemos contar com a organização na participação
			dos qualificadores da VCL 2024.
		</p>
		<p class="pb-8">
			Devido à necessidade de progredir rapidamente juntamos uma equipa de LoL
			onde teve imensas participações amadoras internacionais. Como o
			crescimento foi notável, vários jogadores de outros jogo por exemplo como
			CS2 e Apex Legends, com interesse pela a competição, podemos consolidar já
			alguns prémios internacionais.
		</p>
		<h2 class="pb-4 text-2xl font-bold">Objetivo</h2>
		<p class="pb-8">
			O objetivo da organização, não é só ser reconhecida a nível nacional mas
			sim proporcionar o melhor ambiente e experiência possíveis tanto em
			aspectos de competição, de crescimento pessoal como de respeito pelo
			próximo. Esperamos que possamos contar contigo para o crescimento do nosso
			objetivo e com a tua torcida
		</p>
		<p class="pb-8 font-bold">Call Out your Vengeance</p>
	</section>
	<UForm
		class="space-y-4"
		:schema="mainSchema"
		:state="state"
		@submit.prevent="onSubmit"
	>
		<h3 class="text-xl font-bold">Junta-te a Nós</h3>
		<div class="flex gap-7">
			<UFormField
				label="Nome"
				name="name"
				required
			>
				<UInput
					v-model="state.name"
					placeholder="Fulano Tal"
				/>
			</UFormField>
			<UFormField
				label="Discord Username"
				name="discord"
				required
			>
				<UInput
					v-model="state.discord"
					placeholder="fulano_tal"
				/>
			</UFormField>
			<UFormField
				label="Idade"
				name="age"
				required
			>
				<UInputNumber
					v-model="state.age"
					class="w-16"
					placeholder="21"
					orientation="vertical"
				/>
			</UFormField>
		</div>
		<UForm
			v-for="(game, count) in state.games"
			:key="count"
			class="flex items-center gap-2"
			:state="game"
			:schema="gameSchema"
		>
			<UFormField
				:label="!count ? 'Jogo' : undefined"
				name="game"
				required
			>
				<UInputMenu
					v-model="game.game"
					class="w-52"
					:items="availableGames ?? []"
					create-item="always"
					@create="(item) => onCreate(item, count)"
				/>
			</UFormField>
			<UFormField
				:label="!count ? 'Role' : undefined"
				name="role"
				required
			>
				<UInput
					v-model="game.role"
					class="w-28"
				/>
			</UFormField>
			<UFormField
				:label="!count ? 'Rank' : undefined"
				name="rank"
				required
			>
				<UInput
					v-model="game.rank"
					class="w-28"
				/>
			</UFormField>
			<UButton
				icon="i-lucide-x"
				variant="outline"
				color="error"
				:class="!count ? 'mt-6' : ''"
				@click="removeGame(count)"
			/>
		</UForm>
		<UButton
			class="w-full justify-center"
			icon="i-lucide-plus"
			color="neutral"
			variant="subtle"
			size="sm"
			label="Adicionar Jogo"
			@click="addGame()"
		/>
		<UTable
			v-if="state.week"
			:data="state.week"
			:columns="columns"
		>
			<template #morning-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].morning" />
			</template>
			<template #afternoon-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].afternoon" />
			</template>
			<template #evening-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].evening" />
			</template>
		</UTable>
		<UCheckbox
			v-model="state.comp"
			name="comp"
			label="Tens alguma experiência competitva?"
			@update:model-value="state.experience = undefined"
		/>
		<UForm
			v-if="state.comp"
			:state="state"
			:schema="expSchema"
		>
			<UFormField
				label="Conta-nos mais"
				name="experience"
			>
				<UTextarea
					v-model="state.experience"
					class="w-full"
				/>
			</UFormField>
		</UForm>
		<UFormField
			label="Qual a tua ambição / objetivo ao juntares-te a nós?"
			name="about"
		>
			<UTextarea
				v-model="state.about"
				class="w-full"
			/>
		</UFormField>
		<NuxtTurnstile
			v-model="token"
			:options="{ theme: 'dark' }"
		/>
		<UButton
			type="submit"
			label="Submeter"
		/>
	</UForm>
</template>
