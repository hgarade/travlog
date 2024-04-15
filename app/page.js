import Contact from "./component/contact";
import Deals from "./component/deals";
import DiscoverPage from "./component/discoverPage";
import Footer from "./component/footer";
import Header from "./component/header";
import HomePage from "./component/homePage";
import Partners from "./component/partners";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Partners />
      <DiscoverPage />
      <Deals />
      <Contact />
      <Footer />
    </>
  );
}
