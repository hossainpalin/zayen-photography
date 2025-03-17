export default function NotFound() {
  return (
    <div className="fixed z-10 flex size-full flex-col items-center justify-center bg-slate-50 p-4 pb-20 font-sans">
      <h1 className="text-[90px] font-bold text-gray-700 lg:text-[120px]">
        404
      </h1>
      <h3 className="text-center text-3xl text-gray-500 lg:text-4xl">
        Sorry, we couldn&apos;t find this page.
      </h3>
      <p className="w-full max-w-sm pt-2 text-center text-gray-500">
        But dont worry, you can find plenty of other things on our homepage.
      </p>
    </div>
  );
}
