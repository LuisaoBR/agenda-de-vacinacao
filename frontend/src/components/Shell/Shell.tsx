import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
