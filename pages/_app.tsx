import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4198974976257818"
          crossOrigin="anonymous"
        />
      </Head>
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
      `}</style>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}
