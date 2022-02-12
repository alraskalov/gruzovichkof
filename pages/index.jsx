import Head from "next/head";
import Page from "../components/Page";
import options from "../utils/options";
import { COLOR_RED } from "../utils/constants";


export default function App({ssr}) {
  let color = COLOR_RED;
  return (
    <>
      <Head>
        <title>Грузовичкоф</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page color={color} options={options} count={1} id={1} data={ssr} />
    </>
  );
}

export async function getServerSideProps(context) {
  const ssr = "Hello from SSR";
  // Вывожу сообщение в консоль на стороне сервера
  console.log(ssr);
  return {
    props: { ssr },
  };
}
