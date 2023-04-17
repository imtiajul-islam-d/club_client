import Navigation from "@/components/Shared/Navigation/Navigation";
import Footer from "@/components/Shared/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
