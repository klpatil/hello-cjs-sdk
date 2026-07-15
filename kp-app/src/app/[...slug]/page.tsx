import { getClient } from '@optimizely/cms-sdk';
import {
  OptimizelyComponent,
  withAppContext,
} from '@optimizely/cms-sdk/react/server';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function Page({ params }: Props) {
  const { slug } = await params;

  const client = getClient(); // No env vars needed
  const content = await client.getContentByPath(`/${slug.join('/')}/`);

  return <OptimizelyComponent content={content[0]} />;
}

export default withAppContext(Page);