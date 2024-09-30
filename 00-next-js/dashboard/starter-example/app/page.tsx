import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
// 다음 Image컴포넌트는 img 태그의 확장으로, 자동 이미지 최적화를 제공한다.
// 1. 이미지가 로드될 때 레이아웃이 자동으로 이동하는 것을 방지한다.
// 2. 뷰포트가 작은 기기로 큰 이미지를 전송하지 않도록 이미지 크기를 조정한다.
// 3. 기본적으로 이미지가 지연 로딩(이미지가 뷰포트에 들어올 때 로드됨)
// 4. 브라우저에서 지원하는 경우 WebP 및 AVIF와 같은 최신 형식의 이미지를 제공한다.
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className={styles.shape} /> */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-600 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" /> */}
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image src="/hero-desktop.png" width={1000} height={760} className="hidden md:block" alt="#" />
          <Image src="/hero-mobile.png" width={560} height={620} className="block md:hidden" alt="#" />
        </div>
      </div>
    </main>
  );
}
