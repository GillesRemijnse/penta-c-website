import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function SiteShell({ children }) {
  return (
    <main className="bg-[#F7F5F2] text-[#2F3A4C] min-h-screen">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
