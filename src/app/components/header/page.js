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
        className={currentRoute === "/about" ? scss.active : scss.nav_link}
        href={"./about"}
      >
        Aboutpage
      </Link>
      <Link
        className={currentRoute === "/projects" ? scss.active : scss.nav_link}
        href={"./projects"}
      >
        Projectpage
      </Link>
    </nav>
  );
}
