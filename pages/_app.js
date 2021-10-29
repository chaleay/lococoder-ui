/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/main.scss';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <title>elijahChristian</title>
      </Head>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </>
  );
}

export default MyApp;
