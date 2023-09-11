import Link from "next/link";
import Image from "next/image";

const NAVBAR = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
    icon: "",
  },
  {
    id: 2,
    title: "Somriures",
    url: "/Somriures",
    icon: "",
  },
  {
    id: 3,
    title: "Especialidades",
    url: "/Especialidades",
    icon: "",
  },
  {
    id: 4,
    title: "Contacto",
    url: "/Contacto",
    icon: "",
  },
  {
    id: 5,
    title: "Blog",
    url: "/Blog",
    icon: "",
  },
];

function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center z-50 top-0 bg-slate-500 p-4 min-w-[100vw] max-w-[1500px] transition duration-500">
      <div className="logo">
        <Link href="/">
          <Image
            src="@/src/assets/images/logo2.svg"
            width={64}
            height={64}
            alt="Logo-Clinica-dental"
          />
        </Link>
      </div>
      <div className="navegation">
        <ul className="menu">
          <div className="logo-mobile">
            <a href="./index.html">
              <img src="./assets/images/logo2.svg" alt="Logo empresa" />
            </a>
          </div>
          <i className="fas fa-times fa-lg close-btn"></i>
          {NAVBAR.map((item) => (
            <li key={item.id} className="item">
              <Link href={item.url}>{item.title}</Link>
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
