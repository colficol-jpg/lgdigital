// components/Header.jsx
export default function Header() {
  return (
    <header className="w-full bg-white shadow-lg shadow-gray-200/40 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img src="/logo-lg.svg" alt="LG Logo" className="h-8 w-auto" />
        </div>

        {/* NAV */}
        <nav className="hidden md:flex space-x-8 text-[15px] font-medium text-gray-800">
          <a href="#" className="hover:text-lgRed transition">Productos</a>
          <a href="#" className="hover:text-lgRed transition">Soporte</a>
          <a href="#" className="hover:text-lgRed transition">Promociones</a>
          <a href="#" className="hover:text-lgRed transition">Tienda</a>
        </nav>

        {/* ICONOS */}
        <div className="flex items-center space-x-5 text-gray-600 text-lg">
          <button className="hover:text-lgRed">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="hover:text-lgRed">
            <i className="fa-regular fa-user"></i>
          </button>
          <button className="hover:text-lgRed">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
