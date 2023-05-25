import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PublicLayout from '../../layout/layoutheader'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  )
}
