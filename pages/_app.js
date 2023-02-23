import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Camilo's Portafolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
