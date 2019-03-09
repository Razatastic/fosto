import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li className="homeTab">
          <Link href="/index">
            <a>Fosto</a>
          </Link>
        </li>

        <li className="homeTab">
          <Link href="/FAQ">
            <a>FAQ</a>
          </Link>
        </li>

        <li className="loginTab">
          <Link href="/authentication/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
