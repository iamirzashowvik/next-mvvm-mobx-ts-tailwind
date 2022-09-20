import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "mobx-react";
import { CounterController } from '../components/app/counter/controller/counter.controller';

const counterController = new CounterController();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider counterController={counterController} >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
