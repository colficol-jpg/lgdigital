// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-lgDark text-white mt-16">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Productos</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Televisores</a></li>
            <li><a href="#" className="hover:text-white">Refrigeradores</a></li>
            <li><a href="#" className="hover:text-white">Lavadoras</a></li>
            <li><a href="#" className="hover:text-white">Aires Acondicionados</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Soporte</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Centro de ayuda</a></li>
            <li><a href="#" className="hover:text-white">Garantías</a></li>
            <li><a href="#" className="hover:text-white">Descargas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Compañía</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Acerca de LG</a></li>
            <li><a href="#" className="hover:text-white">Noticias</a></li>
            <li><a href="#" className="hover:text-white">Carreras</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-lgRed"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-lgRed"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-lgRed"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-lgRed"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-black py-4 text-center text-sm text-gray-400">
        © 2025 LG Electronics. Todos los derechos reservados.
      </div>
    </footer>
  );
}
