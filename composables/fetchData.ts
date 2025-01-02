import type { StrapiGraphqlVariables } from "@nuxtjs/strapi";
import type { DocumentNode } from "graphql";

export const fetchData = async <T>(
	key: string,
	query: DocumentNode,
	variables: StrapiGraphqlVariables = {}
): Promise<{ data: T | null; error: Error | null }> => {
	const graphql = useStrapiGraphQL();

	try {
		const response = (await graphql(query, variables)) as {
			data: Record<string, T[]>;
		};
		return { data: response.data[key] as T, error: null };
	} catch (error) {
		console.log(error);
		console.error("Error fetching data:", error);
		return {
			data: null,
			error:
				error instanceof Error ? error : new Error("Unknown error occurred")
		};
	}
};
