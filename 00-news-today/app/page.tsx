export default function Page() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Tailwind 학습중
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            정말 배우기 쉬운 CSS 프레임워크
          </a>
          <p className="mt-2 text-slate-500">
            클래스 몇 개만 추가했을 뿐인데 디자인이 완성되었어요!
          </p>
        </div>
      </div>
    </div>
  );
}
