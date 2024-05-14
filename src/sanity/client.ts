import "server-only";

import { createClient, type QueryParams } from "next-sanity";
import dotenv from 'dotenv';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? '',
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  dotenv.config();
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}