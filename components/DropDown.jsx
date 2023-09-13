import Link from "next/link";
const DROPDOWN = [
  {
    id: 1,
    title: "Ortodoncia",
    url: "/especialidades/ortodoncia",
  },
  {
    id: 2,
    title: "Cirugía",
    url: "/especialidades/cirugia",
  },
  {
    id: 3,
    title: "Endodoncia",
    url: "/especialidades/endodoncia",
  },
  {
    id: 4,
    title: "Estética Dental",
    url: "/especialidades/estetica-dental",
  },
  {
    id: 5,
    title: "implantología",
    url: "/especialidades/implantologia",
  },
  {
    id: 6,
    title: "Odontopediatría",
    url: "/especialidades/odontopediatria",
  },
  {
    id: 7,
    title: "Odontología conservadora",
    url: "/especialidades/odontologia-conservadora",
  },
  {
    id: 8,
    title: "Prótesis dental",
    url: "/especialidades/protesis-dntal",
    class: "sub-item",
  },
];

function DropDown() {
  return (
    <ul className="dropdown" id="customElement1">
      {DROPDOWN.map((item) => (
        <li key={item.id}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DropDown;
