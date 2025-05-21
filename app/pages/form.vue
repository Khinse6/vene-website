<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui'
	const { data: availableGames } = await useAsyncData('available-games', () =>
		$fetch('/api/availableGames')
	)

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
		if (state.games[index]) {
			state.games[index].game = item
		}
	}

	async function onSubmit(formEvent: FormSubmitEvent<Schema>) {
		const toast = useToast()
		try {
			const data = await $fetch('/api/form', {
				method: 'POST',
				body: {
					...formEvent.data,
					token: token.value,
				},
				headers: {
					'Content-Type': 'application/json',
				},
			})

			toast.add({
				title: 'Sucesso',
				description: data.message,
				color: 'success',
			})
		} catch (e) {
			const error = e as { statusMessage?: string; message?: string }

			toast.add({
				title: 'Falha ao submeter formulário',
				description:
					error.statusMessage || error.message || 'Erro desconhecido',
				color: 'error',
			})
		}
	}
</script>

<template>
	<UForm
		id="form"
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
					@create="(item: string) => onCreate(item, count)"
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
		<WeekTable
			v-model="state.week"
			:editable="true"
		/>
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
			variant="outline"
			color="neutral"
		/>
	</UForm>
</template>
