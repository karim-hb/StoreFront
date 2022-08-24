import "../styles/globals.css";
import "styles/icons/feather/feather.css";
import "styles/icons/material/material.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Base from "@/components/base";
import { Provider } from "react-redux";
import { useStore } from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>سفارش انلاین غذا</title>
        <meta name="description" content="خرید اینترنتی غذا" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="keywords" content="Keywords" />
        <style>
          {`
            @font-face {
                 font-family: IRANSansX;
                 font-style: normal;
                 font-weight: 700;
                 src: url('/fonts/woff/IRANSansX-Bold.woff') format('woff'),   
                 url('/fonts/woff2/IRANSansX-Bold.woff2') format('woff2');	
                 font-display: swap; 
              }

           @font-face {
               font-family: IRANSansX;
               font-style: normal;
               font-weight: 400;
               src: url('/fonts/woff/IRANSansX-Regular.woff') format('woff'),   
               url('/fonts/woff2/IRANSansX-Regular.woff2') format('woff2');	
               font-display: swap;
         }
      `}
        </style>{" "}
      </Head>
      <Base>
        <Component {...pageProps} />
      </Base>
    </Provider>
  );
}

export default MyApp;
