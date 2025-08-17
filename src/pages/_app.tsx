import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css' 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics/>
    </Layout>
  )
}