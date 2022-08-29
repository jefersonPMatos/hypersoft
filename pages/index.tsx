import { Home } from "./_home";
import { Info } from "./_info";
import { Services } from "./_services";
import { Work } from "./_work";
import { Contact } from "./_contact";
import { Footer } from "./_footer";

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
