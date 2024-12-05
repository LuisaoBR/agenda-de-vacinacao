import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen flex flex-col">
      <Topbar />

      <section className="flex grow items-stretch">
        <Sidebar />
        <main className="p-6 bg-gray-100 grow">
          <section className='bg-white p-4 shadow'>{children}</section>
        </main>
      </section>
    </section>
  );
};
