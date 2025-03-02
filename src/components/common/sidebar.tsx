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

      <aside className="hidden w-full max-w-xs flex-col items-center justify-between bg-white p-8 lg:flex">
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

      <section className="size-full bg-slate-50">{children}</section>
    </main>
  );
}
