import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="nav">
      <li className="homeTab">
        <Link href="/index">
          <a>Fosto</a>
        </Link>
      </li>
      <li className="loginTab">
        <Link href="/authentication/Login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
}
