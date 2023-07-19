import { createClient, groq } from 'next-sanity'

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2023-07-19',
}

const client = createClient(options)

export default async function getRedirects() {
  const query = groq`
    *[_type == 'redirect'] {
      destination,
      source,
      permanent
    }
  `;
  const redirects = await client.fetch(query);
  return redirects;
}