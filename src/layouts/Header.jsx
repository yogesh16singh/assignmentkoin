import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <>
      <nav className="flex justify-between fixed top-0 w-full px-8 py-4 border-b shadow-md items-center bg-white">
        <img src={Logo} alt="Koinx" className="w-28 object-contain h-8" />

        <ul className="md:flex md:gap-8 gap-4 items-center text-base hidden">
          <li className="capitalize font-bold tracking-tight">
            <a href="#">crypto taxes</a>
          </li>
          <li className="capitalize font-bold tracking-tight">
            <a href="#">free tools</a>
          </li>
          <li className="capitalize font-bold tracking-tight">
            <a href="#">resource center</a>
          </li>
          <button className="px-3 py-2 bg-blue-600 rounded-lg text-slate-200 text-base font-bold ml-6">
            Get Started
          </button>
        </ul>

        <GiHamburgerMenu className="md:hidden inline-block w-7 h-7" />
      </nav>
    </>
  );
};

export default Header;
