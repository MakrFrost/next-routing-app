import { FaReact } from "react-icons/fa";

export default function Head({ title }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Learning Next" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://fav-gen.com/public/assets/img/emoji/svg/269b.svg"
      ></link>
    </>
  );
}
