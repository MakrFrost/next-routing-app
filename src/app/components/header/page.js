import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>It is a Header Navigation</h1>
      <Link href={"./"}>To Home page</Link>
      <Link href={"./about"}>To About page</Link>
      <Link href={"./projects"}>To Project page</Link>
    </>
  );
}
