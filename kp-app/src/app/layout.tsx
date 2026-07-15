import Article, { ArticleContentType } from '@/components/Article';
import { config, initContentTypeRegistry } from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';

// Get client instance
config({
  apiKey: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY!,
  graphUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY,
  host: process.env.OPTIMIZELY_GRAPH_HOST!.replace(/\/$/, ""), // Remove trailing slash - IMPORTANT: MULTISITE SCENARIO - SITECORE SITENAME
});

// Initialize content type registry
initContentTypeRegistry([ArticleContentType]);

// Initialize React component registry
initReactComponentRegistry({
  resolver: {
    KP_Article: Article,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}