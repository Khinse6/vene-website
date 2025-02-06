import type { StrapiGraphqlVariables } from '@nuxtjs/strapi'
import type { DocumentNode } from 'graphql'

export const useFetchData = <T>(
	key: string,
	dataKey: string,
	query: DocumentNode,
	variables: StrapiGraphqlVariables = {}
) => {
	const graphql = useStrapiGraphQL()
	const { data, error, status } = useAsyncData(key, async () => {
		const response = (await graphql(query, variables)) as {
			data: { [dataKey: string]: T }
		}
		return response.data[dataKey] as T
	})

	console.log(error.value)
	return { data, error, status }
}
