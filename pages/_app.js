import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
	<div className={styles.container}>
		<Head>
			<title>Polldi App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main className={styles.main}>
  			<Component {...pageProps} />
		</main>

		<footer className={styles.footer}>
      	</footer>
    </div>	  
	)
}

export default MyApp
