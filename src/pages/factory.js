import { NavLink, Outlet } from "react-router-dom";

export default function Industry() {
  const subRoutes = [
    { label: "Агуулах", path: "warehouse" },
    { label: "Үйлдвэр", path: "factory" },
    { label: "Цахилгаан", path: "electricity" },
    { label: "Бараа", path: "products" },
  ];

  return (
    <div className="p-6 font-sans">
      {/* Дэд навигац */}
      <div className="mb-8 space-x-4">
        {subRoutes.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-white font-medium ${
                isActive ? "bg-green-900" : "bg-green-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Дэд хуудсууд энд гарна */}
      <Outlet />
    </div>
  );
}
