import { ReactNode } from "react";
import MenuList from "../menu-list";
import Header from "./header";
import Link from "next/link";
import Footer from "../footer";

export default function Sidebar({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="flex size-full flex-col lg:flex-row">
      <Header />

      <aside className="sticky top-0 z-20 hidden w-full flex-col items-center justify-between bg-white p-8 lg:flex lg:max-w-[250px] xl:max-w-[320px]">
        <div>
          <Link
            href="/"
            className="flex flex-col items-center text-3xl text-black/90"
          >
            <span>Zayen</span>
            <span>Photography</span>
          </Link>

          <nav className="mt-20 flex flex-col items-center">
            <MenuList className="text-xl" />
          </nav>
        </div>

        <Footer />
      </aside>

      <section className="flex size-full flex-col items-center justify-between overflow-y-auto bg-slate-50">
        {children}
        <Footer className="pb-2 pt-4 lg:hidden" />
      </section>
    </main>
  );
}
