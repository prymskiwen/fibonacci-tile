import { Global, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { AppProps } from "next/app";
import global from "styles/global";
import theme from "styles/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/typefaces.css";
import { AppWrapper } from "@contexts/AppContext";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@utils/apolloClient";
import Router from "next/router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ApolloProvider client={apolloClient}>
      <AppWrapper>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <ThemeProvider theme={theme}>
          <Global styles={global} />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppWrapper>
    </ApolloProvider>
    </>
  );
}

export default App;
