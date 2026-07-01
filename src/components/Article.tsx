import { contentType } from '@optimizely/cms-sdk';

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