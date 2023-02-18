import Link from "next/link";
import "./page.scss";

export default function Header() {
  return (
    <nav className="nav-block">
      <Link className="nav-link" href={"./"}>
        Homepage
      </Link>
      <Link className="nav-link" href={"./about"}>
        Aboutpage
      </Link>
      <Link className="nav-link" href={"./projects"}>
        Projectpage
      </Link>
    </nav>
  );
}
