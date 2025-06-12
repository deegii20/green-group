export default function NavItem({ label, isActive }) {
  return (
    <span
      className={`text-lg font-semibold cursor-pointer ${
        isActive ? 'text-yellow-600' : 'text-black'
      }`}
    >
      {label}
    </span>
  );
}
