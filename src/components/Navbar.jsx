import { NavLink } from 'react-router-dom';
import logo from '../img/shar.png';
import { IoIosLogOut } from "react-icons/io";

export default function Navbar() {
  const menu = [
    { name: 'INDUSTRY', to: '/industry' },
    { name: 'FACTORY', to: '/factory' },
    { name: 'TRADE', to: '/trade' },
    { name: 'IMPEX', to: '/impex' },
    { name: 'SERVER', to: '/server' },
  ];

  return (
    <div className="p-2 ">
      <nav className="flex items-center justify-between bg-[#063E0C] dark:bg-gray-900 border border-[#C2C2C2] rounded-[40px] px-6 py-2 shadow-md">
        <div className="flex items-center gap-4">
          <NavLink to="/industry"><img src={logo} alt="logo" className="h-10"/></NavLink>
        </div>
      <div className="flex items-center gap-6 text-white font-semibold">
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-full ${
                  isActive
      ? 'bg-[#4f7753]/80 text-[#debb6d] dark:bg-gray-700/80 backdrop-blur-lg'
      : 'text-white hover:text-[#DEBB6D]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[#debb6d] text-sm font-semibold" >
          <span>User</span>
          <NavLink to="/login" className="text-2xl">
          <IoIosLogOut />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}


