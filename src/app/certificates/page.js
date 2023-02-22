import Image from "next/legacy/image";
import Head from "./head";
import Swiper from "../components/swiper/swiper";

import Data from "../../../public/images/certificates/index";

export default function Certificates() {
  const data = Data();

  return (
    <>
      <Swiper data={data} />
    </>
  );
}
