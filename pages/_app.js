import '../styles/globals.css'
import styles from '../styles/Home.module.css'

import { ThemeProvider } from 'styled-components';
import Head from 'next/head'
import GlobalStyle from '../components/styles/GlobalStyle'
import theme from '../components/styles/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Head>
				<title>Polldi App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Component {...pageProps} />
			</main>

			<footer className={styles.footer}>
			</footer>
		</ThemeProvider>
	)
}

export default MyApp
