import type { StrapiGraphqlVariables } from "@nuxtjs/strapi";
import type { DocumentNode } from "graphql";

export const fetchData = async <T>(
	key: string,
	query: DocumentNode, // You can use your specific query type here (e.g., GetTeams)
	variables: StrapiGraphqlVariables = {}
): Promise<T> => {
	const graphql = useStrapiGraphQL();

	try {
		const response = (await graphql(query, variables)) as {
			data: Record<string, T[]>;
		};
		return response.data[key] as T;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
