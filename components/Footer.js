// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-lgDark text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-lg.svg" alt="LG" className="h-10 mb-4" />
          <p className="text-sm">
            Innovación para una vida mejor. Descubre nuestros productos de
            última tecnología.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Productos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Televisores</a></li>
            <li><a href="#" className="hover:text-white">Refrigeradores</a></li>
            <li><a href="#" className="hover:text-white">Lavadoras</a></li>
            <li><a href="#" className="hover:text-white">Celulares</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Soporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Atención al cliente</a></li>
            <li><a href="#" className="hover:text-white">Garantías</a></li>
            <li><a href="#" className="hover:text-white">Manual de usuario</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Síguenos</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-400 text-sm py-4 text-center">
        © 2025 LG Electronics. Todos los derechos reservados.
      </div>
    </footer>
  );
}
