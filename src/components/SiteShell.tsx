import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Topbar from "@/components/Topbar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
