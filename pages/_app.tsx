import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'
import { DynamicThemeProvider } from '../components/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DynamicThemeProvider>
      <Component {...pageProps} />
      </DynamicThemeProvider>
    </ThemeProvider>
  )
}

export default MyApp
