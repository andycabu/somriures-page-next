"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../public/assets/images/logo2.svg";
import {
  faXmark,
  faAngleDown,
  faClock,
  faBars,
  // faInstagramSquare,
  // faFacebookSquare,
  // faWhatsappSquare,
  // faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

import DropDown from "./DropDown";
import Icons from "./Icons";

// const ICONS = [
//   {
//     id: 1,
//     icon: faInstagramSquare,
//     URL: "https://www.instagram.com",
//   },
//   {
//     id: 2,
//     icon: faFacebookSquare,
//     URL: "https://www.facebook.com",
//   },
//   {
//     id: 3,
//     icon: faPhoneSquareAlt,
//     URL: "tel:999999999",
//   },
//   {
//     id: 4,
//     icon: faWhatsappSquare,
//     URL: "https://whatsapp",
//   },
// ];

const NAVBAR = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
  },
  {
    id: 2,
    title: "Somriures",
    url: "/Somriures",
  },
  {
    id: 3,
    title: "Especialidades",
    url: "/especialidades",
    icon: (
      <FontAwesomeIcon
        icon={faAngleDown}
        className="cursor-pointer max-[1154px]:text-2xl max-[1154px]:pl-3 transition-transform duration-500 h-4 inline-block pl-3 "
      />
    ),
    DropDown: <DropDown />,
    class: "sub-btn-a",
  },
  {
    id: 4,
    title: "Contacto",
    url: "/Contacto",
  },
  {
    id: 5,
    title: "Blog",
    url: "/Blog",
  },
];

function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Cambia 100 por la posición en la que quieres que se aplique la clase
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-personalized ${scrolling ? "sticky" : ""}`}>
      <div className="logo">
        <Link href="/">
          <Image src={logo2} className="w-64" alt="Logo-Clinica-dental" />
        </Link>
      </div>
      <div className="navegation ">
        <ul
          className={`menu relative flex gap-20 transition-right max-[830px]:min-w-[100vw] ${
            active ? "active" : ""
          }`}
        >
          <div className="justify-center hidden max-[830px]:flex ">
            <Link href="/">
              <Image className="w-60" src={logo2} alt="Logo empresa" />
            </Link>
          </div>

          <FontAwesomeIcon
            onClick={() => setActive(false)}
            className="close-btn"
            icon={faXmark}
          />
          {NAVBAR.map((item) => (
            <li className="menu-item" key={item.id}>
              <Link className={item.class} href={item.url}>
                {item.title}
              </Link>
              {item.icon}
              {item.DropDown}
            </li>
          ))}
          {/* <Icons icons={ICONS} /> */}
        </ul>
        <div className="schedule">
          <FontAwesomeIcon icon={faClock} />
          <p>10 a 14 y 16 a 20</p>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => setActive(!active)}
        className="menu-btn"
        icon={faBars}
      />
    </nav>
  );
}

export default Navbar;
