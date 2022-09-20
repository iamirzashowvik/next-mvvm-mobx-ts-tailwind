import Head from "next/head";
import { CounterView } from '../components/app/counter/view/counter.view';

const Home = () => {
  return (
    <div>
      <Head>
        <title>MVVM w/ MobX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CounterView />
      </main>
    </div>
  );
};

export default Home;
