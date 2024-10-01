import SideNav from '@/app/ui/dashboard/sidenav';

// layout컴포넌트는 children 프롭스를 받는다. 이는 페이지, 레이아웃이 될 수 있다. 이로써 /dashboard 내부의 페이지는 자동으로 중첩된다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* 이 부분의 페이지만 다시 렌더링 된다. */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
