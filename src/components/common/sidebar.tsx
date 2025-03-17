import { ReactNode } from "react";
import Menu from "../menu";
import SidebarFooter from "../sidebar-footer";
import Header from "./header";

export default function Sidebar({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="flex size-full flex-col lg:flex-row">
      <Header />

      <aside className="sticky top-0 hidden w-full flex-col items-center justify-between bg-white p-8 lg:flex lg:max-w-[250px] xl:max-w-[320px]">
        <div>
          <h1 className="text-center text-3xl text-black/90">
            Zayen <br /> Photography
          </h1>

          <nav className="mt-20 flex flex-col items-center">
            <Menu />
          </nav>
        </div>

        <SidebarFooter />
      </aside>

      <section className="size-full overflow-y-auto bg-slate-50">
        {children}
      </section>
    </main>
  );
}
