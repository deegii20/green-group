import { NavLink, Outlet } from "react-router-dom";

export default function Industry() {
  const subRoutes = [
    { label: "Агуулах", path: "warehouse" },
    { label: "Үйлдвэр", path: "uildwer" },
    { label: "Цахилгаан", path: "electricity" },
    { label: "Бараа", path: "products" },
  ];

  return (
    <div className="p-6 font-sans ">
      <div className="mb-8 space-x-4">
        {subRoutes.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-white font-medium ${
                isActive ? 'bg-[#4f7753] dark:bg-gray-700 !text-[#debb6d]' 
                         : 'bg-[#063e0c] dark:bg-gray-900 text-[#debb6d] hover:text-[#debb6d]'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
}


