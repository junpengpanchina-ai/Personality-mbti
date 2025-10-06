import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
