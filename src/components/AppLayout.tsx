import { ReactNode } from "react";
import Footer from "./ebook-comps/layout/footer";
import Header from "./ebook-comps/layout/header";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
  return (
    <main className={`relative`}>
      <Header />
      <div className={`min-h-screen sm:px-4 md:px-0 ${className}`}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AppLayout;
