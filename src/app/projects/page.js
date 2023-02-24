import Head from "./head";
import Swiper from "../components/swiper/swiper";

import Data from "../../../public/images/works/index";

export default function Projects({}) {
  const data = Data();

  return (
    <>
      <Head title={"React`s project"} />
      <>
        <Swiper data={data} />
      </>
    </>
  );
}
