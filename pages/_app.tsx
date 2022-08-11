import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Mushrooms Kursk | Aleksey Sidorov project</title>
				<meta name="description" content="Сайт о грибах Курской области" />
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:locale" content="ru_RU" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
