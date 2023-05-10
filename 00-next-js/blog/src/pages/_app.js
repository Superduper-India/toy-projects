import Layout from '../components/Layout';

// next.js 자체에서 제공하는 모든 페이지를 품을 수 있는 파일이다.
export default function App({ Component, pageProps }) {
  // return (
  //     <Layout>
  //         <Component {...pageProps} />
  //     </Layout>
  // )

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
