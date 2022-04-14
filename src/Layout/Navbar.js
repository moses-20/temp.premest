import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <span>
        <Link passHref href="/">
          Logo
        </Link>
      </span>
      <nav>
        <ul>
          <li>
            <Link passHref href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link passHref href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link passHref href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
