import { contentType, ContentProps } from '@optimizely/cms-sdk';
import { RichText } from '@optimizely/cms-sdk/react/richText';
import { getContext } from '@optimizely/cms-sdk/react/server';

// Define the content type
export const ArticleContentType = contentType({
  key: 'KP_Article',
  baseType: '_page',
  displayName: 'KP Article',
  properties: {
    heading: {
      type: 'string',
      displayName: 'Article Heading',
      group: 'content',
      indexingType: 'searchable',
    },
    body: {
      type: 'richText',
      displayName: 'Article Body',
      group: 'content',
    },
  },
});

// Define the component props
type Props = {
  content: ContentProps<typeof ArticleContentType>;
};

// Define the component
export default function Article({ content }: Props) {
  const context = getContext();
  console.log(context, 'context');
  // Access preview token, locale, etc.
  const locale = context?.locale ?? 'en-US';
  const isPreview = !!context?.previewToken;

  return (  
    <main>
      <h1>{content.heading}</h1>
      <RichText content={content.body?.json} />
      <p>Locale: {locale}</p>
      <p>Is Preview: {isPreview ? 'Yes' : 'No'}</p>
    </main>
  );
}