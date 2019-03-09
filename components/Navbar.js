import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="nav">
      <li className="homeTab">
        <Link href="/index">
          <a>Fosto</a>
        </Link>
      </li>
   </Link>
      <li className="loginTab">
        <Link href="/authentication/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
}
