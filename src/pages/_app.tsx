import type { AppProps } from 'next/app'
import { GlobalStyled } from '../global/style.ts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
