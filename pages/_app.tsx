import '../styles/globals.css';
import '../public/static/css/prism.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  const description = 'Joshua Hollis is a software engineer in Boston.';
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <DefaultSeo
          titleTemplate="%s | Joshua Hollis"
          defaultTitle="Joshua Hollis"
          description={description}
          themeColor="#151718"
          canonical="https://joshhollis.dev"
          openGraph={{
            title: 'Joshua Hollis',
            type: 'website',
            locale: 'en_US',
            url: 'https://joshhollis.dev',
            siteName: 'Joshua Hollis',
            description: '',
          }}
          twitter={{
            handle: '@jmovez',
            cardType: 'summary_large_image',
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.svg',
              type: 'image/svg+xml',
              sizes: 'any',
            },
          ]}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Joshua Hollis"
          url="https://joshhollis.dev"
          sameAs={[
            'https://linkedin.com/in/joshuahollis',
            'https://twitter.com/jmovez',
            'https://github.com/joshuahollis',
            'https://instagram.com/jmovez',
          ]}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
