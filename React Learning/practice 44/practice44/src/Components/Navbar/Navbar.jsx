import React, { useState } from "react";
import navigation from "../../Utilities/NavigationData";
import { AlignCenter } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navigation.map((route) => (
    <li key={route.id}>
      <a href={route?.path}>{route?.name}</a>
    </li>
  ));
  console.log(navigation);
  return (
    <nav className="flex justify-between items-center mx-10">
      <span onClick={() => setOpen(!open)} className="flex  sm:block">
        <AlignCenter className="cursor-pointer block md:hidden "></AlignCenter>
        <h1>my app</h1>

        <ul
          className={`absolute top-8 bg-amber-600 p-4 rounded-2xl sm:hidden block transition-all  duration-1000    ${
            open ? " left-10" : "-left-48"
          } gap-4 `}
        >
          {links}
        </ul>
      </span>
      <ul className="md:flex hidden gap-4">{links}</ul>
      <button className="btn btn-primary">Singup</button>
    </nav>
  );
};

export default Navbar;
