import { GraphClient, type PreviewParams } from '@optimizely/cms-sdk';
import {
  OptimizelyComponent,
  withAppContext,
} from '@optimizely/cms-sdk/react/server';
import { PreviewComponent } from '@optimizely/cms-sdk/react/client';
import Script from 'next/script';

// This page is used to render the preview content from the Optimizely CMS. It uses the GraphClient to fetch the preview content based on the search parameters passed in the URL. The response is then rendered using the OptimizelyComponent.
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function Page({ searchParams }: Props) {
  const client = new GraphClient(process.env.OPTIMIZELY_GRAPH_SINGLE_KEY!, {
    graphUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY,
  });

  const response = await client.getPreviewContent(
    (await searchParams) as PreviewParams,
  );

  return (
    <>
      <Script
        src={
          new URL('/util/javascript/communicationinjector.js', process.env.OPTIMIZELY_CMS_URL).href
        }
      ></Script>
      <PreviewComponent />
      <OptimizelyComponent content={response} />
    </>
  );
}

export default withAppContext(Page);