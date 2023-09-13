import Link from "next/link";
const DROPDOWN = [
  {
    id: 1,
    title: "Ortodoncia",
    url: "/espertialidades/ortodoncia",
  },
  {
    id: 2,
    title: "Cirugía",
    url: "/espertialidades/cirugia",
  },
  {
    id: 3,
    title: "Endodoncia",
    url: "/espertialidades/endodoncia",
  },
  {
    id: 4,
    title: "Estética Dental",
    url: "/espertialidades/estetica-dental",
  },
  {
    id: 5,
    title: "implantología",
    url: "/espertialidades/implantologia",
  },
  {
    id: 6,
    title: "Odontopediatría",
    url: "/espertialidades/odontopediatria",
  },
  {
    id: 7,
    title: "Odontología conservadora",
    url: "/espertialidades/odontologia-conservadora",
  },
  {
    id: 8,
    title: "Prótesis dental",
    url: "/espertialidades/protesis-dntal",
    class: "sub-item",
  },
];

function DropDown() {
  return (
    <ul className="sub-menu absolute flex flex-col justify-center p-0 bg-primary top-16 shadow-personalized translate-y-5 hidden w-64" id="customElement1">
      {DROPDOWN.map((item)=>(
        <li className="shadow-insent h-12 w-[inherit] text-white" key={item.id}>
          <Link className="flex justify-center items-center w-full h-full hover:bg-bg-3 transition duration-300 " href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
