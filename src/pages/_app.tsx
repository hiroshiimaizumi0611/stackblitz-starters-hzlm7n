import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}