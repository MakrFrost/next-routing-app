import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Error page</h1>
      <p>
        Please, go back to <Link href={"./"}>homepage</Link>
      </p>
    </>
  );
}
