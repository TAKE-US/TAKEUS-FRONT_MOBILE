import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import '@styles/global.css';
import { ModalsProvider } from '@context/ModalsProvider';
import Modals from '@components/Modals';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme= { theme } >
      <ModalsProvider>  
        <Modals/>
        <Component {...pageProps} />
      </ModalsProvider>
    </ThemeProvider>
  );
}
