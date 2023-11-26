import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { IntlProvider, MessageFormatElement } from 'react-intl';
import ar from '../lang/ar.json'
import en from '../lang/en.json'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const messages = {
    ar,
    en,
  };
  function getDirection(locale: string) {
    if (locale === "ar") {
      return "rtl";
    }

    return "ltr";
  }
  const messagesForLocale = messages[locale as keyof typeof messages];

  return <ThemeProvider attribute='class' enableSystem={false} enableColorScheme>
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        locale={String(locale)}
        messages={
          messagesForLocale as
          | Record<string, string>
          | Record<string, MessageFormatElement[]>
          | undefined
        }>
        <Component {...pageProps} dir={getDirection(String(locale))} />
      </IntlProvider>
    </QueryClientProvider>
  </ThemeProvider>

}
