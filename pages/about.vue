<script setup lang="ts">
	import type { FormSubmitEvent, TableColumn } from '@nuxt/ui'
	import * as z from 'zod'

	const client = useSupabaseClient()
	const { data: availableGames } = await useAsyncData(
		'available-games',
		async () => {
			const { data } = await client
				.from('games')
				.select('name')
				.order('name', { ascending: true })

			return data?.map((game) => game.name)
		}
	)

	const scheduleSchema = z.object({
		label: z.string(),
		monday: z.boolean().default(false),
		tuesday: z.boolean().default(false),
		wednesday: z.boolean().default(false),
		thursday: z.boolean().default(false),
		friday: z.boolean().default(false),
		saturday: z.boolean().default(false),
		sunday: z.boolean().default(false),
	})

	const schema = z.object({
		name: z.string(),
		age: z.number().positive(),
		discord: z.string(),
		about: z.string().min(10),
		comp: z.boolean().default(false),
		week: z.array(scheduleSchema),
		token: z.string(),
	})

	const gameSchema = z.object({
		game: z.string(),
		role: z.string().nonempty(),
		rank: z.string().nonempty(),
	})

	const expSchema = z.object({
		experience: z.string().min(10),
	})

	type Schema = z.output<typeof schema>
	type GameSchema = z.output<typeof gameSchema>
	type ExpSchema = z.output<typeof expSchema>
	type ScheduleSchema = z.output<typeof scheduleSchema>

	const state = reactive<
		Partial<
			Schema &
				ExpSchema & {
					games: Partial<GameSchema>[]
				}
		>
	>({
		games: [{}],
		week: [
			{
				label: 'Manhã (08h00 - 12h00)',
				monday: false,
				tuesday: false,
				wednesday: false,
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false,
			},
			{
				label: 'Tarde (12h00 - 19h00)',
				monday: false,
				tuesday: false,
				wednesday: false,
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false,
			},
			{
				label: 'Noite (19h00 - 00h00)',
				monday: false,
				tuesday: false,
				wednesday: false,
				thursday: false,
				friday: false,
				saturday: false,
				sunday: false,
			},
		],
	})

	const columns: TableColumn<ScheduleSchema>[] = [
		{ accessorKey: 'label', header: 'Horário' },
		{ accessorKey: 'monday', header: 'Segunda' },
		{ accessorKey: 'tuesday', header: 'Terça' },
		{ accessorKey: 'wednesday', header: 'Quarta' },
		{ accessorKey: 'thursday', header: 'Quinta' },
		{ accessorKey: 'friday', header: 'Sexta' },
		{ accessorKey: 'saturday', header: 'Sábado' },
		{ accessorKey: 'sunday', header: 'Domingo' },
	]
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

	const toast = useToast()
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		try {
			// 1. Check if CAPTCHA token exists
			const captchaResponse = state.token

			if (!captchaResponse) {
				toast.add({
					title: 'Error',
					description: 'Please complete the CAPTCHA.',
					color: 'warning',
				})
				return
			}

			const verificationRes = await $fetch('/api/verify-captcha', {
				method: 'POST',
				body: { token: captchaResponse },
			})

			if (!verificationRes.success) {
				throw new Error('Captcha verification failed. Please try again.')
			}

			await client.from('forms').insert([
				{
					name: event.data.name,
					age: event.data.age,
					discord: event.data.discord,
					about: event.data.about,
					comp: event.data.comp,
					week: event.data.week,
					games: state.games,
					experience: event.data.comp ? state.experience : null,
				},
			])

			toast.add({
				title: 'Success',
				description: 'The form has been submitted.',
				color: 'success',
			})
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast.add({
					title: 'Error',
					description: error.message,
					color: 'warning',
				})
			} else {
				toast.add({
					title: 'Error',
					description: 'An unknown error occurred.',
					color: 'warning',
				})
			}
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
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit"
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
					placeholder="21"
					orientation="vertical"
					class="w-16"
				/>
			</UFormField>
		</div>
		<UForm
			v-for="(game, count) in state.games"
			:key="count"
			:state="game"
			:schema="gameSchema"
			class="flex items-center gap-2"
		>
			<UFormField
				:label="!count ? 'Jogo' : undefined"
				name="game"
				required
			>
				<USelectMenu
					v-model="game.game"
					:items="availableGames ?? []"
					class="w-52"
				/>
			</UFormField>
			<UFormField
				:label="!count ? 'Role' : undefined"
				name="role"
				required
				class="w-28"
			>
				<UInput v-model="game.role" />
			</UFormField>
			<UFormField
				:label="!count ? 'Rank' : undefined"
				name="rank"
				required
				class="w-28"
			>
				<UInput v-model="game.rank" />
			</UFormField>
			<UButton
				icon="i-lucide-x"
				size="md"
				color="warning"
				variant="ghost"
				:class="count === 0 ? 'mt-6' : ''"
				@click="removeGame(count)"
			/>
		</UForm>
		<div class="flex gap-2">
			<UButton
				color="neutral"
				variant="subtle"
				size="sm"
				label="Adicionar Jogo"
				@click="addGame()"
			/>
		</div>
		<UTable
			v-if="state.week"
			:data="state.week"
			:columns="columns"
		>
			<template #monday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].monday" />
			</template>
			<template #tuesday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].tuesday" />
			</template>
			<template #wednesday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].wednesday" />
			</template>
			<template #thursday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].thursday" />
			</template>
			<template #friday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].friday" />
			</template>
			<template #saturday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].saturday" />
			</template>
			<template #sunday-cell="{ row }">
				<UCheckbox v-model="state.week[row.index].sunday" />
			</template>
		</UTable>
		<div>
			<UCheckbox
				v-model="state.comp"
				name="comp"
				label="Tens alguma experiência competitva?"
				@update:model-value="state.experience = undefined"
			/>
		</div>
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
			v-model="state.token"
			class="py-4"
		/>
		<UButton
			type="submit"
			label="Submeter"
		/>
	</UForm>
</template>
