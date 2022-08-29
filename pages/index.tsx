import { Home } from "./home";
import { Info } from "./info";
import { Services } from "./services";
import { Work } from "./work";
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Index() {
  return (
    <>
      <Home />
      <Info />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
