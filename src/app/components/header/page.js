"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import scss from "./page.module.scss";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <nav className={scss.nav_block}>
      <Link
        className={currentRoute === "/" ? scss.active : scss.nav_link}
        href={"./"}
      >
        Homepage
      </Link>
      <Link
        className={
          currentRoute === "/certificates" ? scss.active : scss.nav_link
        }
        href={"./certificates"}
      >
        Certificates
      </Link>
      <Link
        className={currentRoute === "/projects" ? scss.active : scss.nav_link}
        href={"./projects"}
      >
        Projects
      </Link>
    </nav>
  );
}
