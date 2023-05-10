import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CategorySlug() {
  const router = useRouter();
  const { date } = router.query;

  return (
    <>
      <h1 className="title">{JSON.stringify(date)}</h1>
      <Link href="/cart/2023/04/21">
        <a>오늘의 날짜로 이동한다</a>
      </Link>
      <button onClick={() => router.push('/cart/2023/04/21')}>오늘 날짜로 이동한다</button>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
