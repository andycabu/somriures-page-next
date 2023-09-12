import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../public/assets/images/logo2.svg";
import { faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";

const NAVBAR = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
    class: "hover:text-primary transition duration-300",
  },
  {
    id: 2,
    title: "Somriures",
    url: "/Somriures",
    class: "hover:text-primary transition duration-300",
  },
  {
    id: 3,
    title: "Especialidades",
    url: "/Especialidades",
    icon: (
      <FontAwesomeIcon
        icon={faAngleDown}
        className="cursor-pointer max-[1154px]:text-2xl max-[1154px]:pl-3 transition-transform duration-500 h-4 inline-block pl-3 "
      />
    ),
    DropDown: <DropDown />,
    class: "hover:text-primary transition duration-300 sub-btn-a",
  },
  {
    id: 4,
    title: "Contacto",
    url: "/Contacto",
    class: "hover:text-primary transition duration-300",
  },
  {
    id: 5,
    title: "Blog",
    url: "/Blog",
    class: "hover:text-primary transition duration-300",
  },
];

function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center z-50 top-0 bg-white text-txt-1 p-4 min-w-[100vw] max-w-[1500px] transition duration-500 shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logo2}
            width={200}
            height={100}
            alt="Logo-Clinica-dental"
          />
        </Link>
      </div>
      <div className="relative leading-11   transition-line duration-500 flex justify-end items-center text-right w-4/5 pr-4 gap-4">
        <ul className="relative flex gap-20 transition-right ">
          <div className="justify-center hidden max-[830px]:flex ">
            <Link href="/">
              <Image className="w-60" src={logo2} alt="Logo empresa" />
            </Link>
          </div>
          <FontAwesomeIcon
            className="hidden max-[1154px]:block cursor-pointer h-8 absolute top-4 right-4 hover:text-secondary"
            icon={faXmark}
          />
          {NAVBAR.map((item) => (
            <li key={item.id}>
              <Link className={item.class} href={item.url}>
                {item.title}
              </Link>
              {item.icon}
              {item.DropDown}
            </li>
          ))}
          <div className="nav__icons">
            <a target="_blank" href="https://www.instagram.com">
              <i id="zoom" className="fab fa-instagram-square transition"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <i id="zoom" className="fab fa-facebook-square transition"></i>
            </a>
            <a target="_blank" href="https://whatsapp">
              <i id="zoom" className="fab fa-whatsapp-square transition"></i>
            </a>
            <a target="_blank" href="tel:999999999">
              <i id="zoom" className="fas fa-phone-square-alt transition"></i>
            </a>
          </div>
        </ul>
        <div className="schedule">
          <i className="far fa-clock"></i>
          <p>10 a 14 y 16 a 20</p>
        </div>
      </div>
      <i className="fas fa-bars fa-lg menu-btn"></i>
    </nav>
  );
}

export default Navbar;
