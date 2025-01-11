import logo from "../assets/logo.svg";
import NavBar from "./NavBar.jsx";
import Button from "./utils/Button.jsx";
import menuImg from "../assets/menu.svg";

function Header() {
    return (
        <header className="h-16 gap-10 flex px-6 lg:px-16 items-center drop-shadow-lg">
            <img src={logo} alt="Logo" className="h-14 lg:h-18"/>
            <NavBar />
            <Button text="Get Started" className="hidden lg:block border-none cursor-pointer rounded-lg text-white px-6 py-2 bg-gradient-to-r from-[#2870ea] to-[#1b4aef] font-medium text-base"/>
            <img src={menuImg} className="block lg:hidden ml-auto"/>
        </header>
    )
}

export default Header;