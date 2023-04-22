import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <div className="w-full">
        <div className="basis-1/4">
          <Header />
        </div>

        <Home />
        <div className="absolute w-full bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
