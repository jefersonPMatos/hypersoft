import { Main, Head, Html } from "next/document";

import Home from "./Home";
import { Info } from "./info";

export default function Index() {
  return (
    <>
      <Home />;
      <Info />
    </>
  );
}
