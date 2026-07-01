import { ArticleContentType } from '@/components/Article';
import { config, initContentTypeRegistry } from '@optimizely/cms-sdk';

// Get client instance
config({
  apiKey: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY!,
  graphUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY,
  host: process.env.OPTIMIZELY_GRAPH_HOST!.replace(/\/$/, ""), // Remove trailing slash
});

initContentTypeRegistry([ArticleContentType]);

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