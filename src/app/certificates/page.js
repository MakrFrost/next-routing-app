import Head from "./head";
import Swiper from "../components/swiper/swiper";

import Data from "../../../public/images/certificates/index";

export default function Certificates() {
  const data = Data();

  return (
    <>
      <Head title={"Certifications page"} />
      <>
        <Swiper data={data} />
      </>
    </>
  );
}
