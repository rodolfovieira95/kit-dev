import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const Header = () => (
  <header className="flex px-8 py-4 justify-between border-b border-accent items-center">
    <Link href="/">
      <h1 className="font-bold text-xl">Kit Dev</h1>
    </Link>
    <ThemeToggle />
  </header>
);
export default Header;
