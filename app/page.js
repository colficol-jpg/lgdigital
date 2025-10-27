'use client';

export default function Home() {
  const productos = [
    { id: 1, nombre: 'LG OLED C3 55"', precio: '3.499.000', img: 'https://picsum.photos/600/400?random=1' },
    { id: 2, nombre: 'LG NanoCell 65"', precio: '4.199.000', img: 'https://picsum.photos/600/400?random=2' },
    { id: 3, nombre: 'LG UHD 50"', precio: '2.199.000', img: 'https://picsum.photos/600/400?random=3' },
    { id: 4, nombre: 'LG OLED evo 77"', precio: '10.999.000', img: 'https://picsum.photos/600/400?random=4' },
    { id: 5, nombre: 'LG QNED 75"', precio: '8.499.000', img: 'https://picsum.photos/600/400?random=5' },
    { id: 6, nombre: 'LG LED 43"', precio: '1.599.000', img: 'https://picsum.photos/600/400?random=6' },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">Tienda LG</h1>
            <nav className="hidden md:flex gap-8 text-sm">
              <a href="#" className="hover:text-red-600 transition duration-300">Inicio</a>
              <a href="#" className="hover:text-red-600 transition duration-300">Televisores</a>
              <a href="#" className="hover:text-red-600 transition duration-300">Ofertas</a>
              <a href="#" className="hover:text-red-600 transition duration-300">Soporte</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          height: '85vh',
          backgroundImage: "url('https://picsum.photos/1920/1080?random=banner')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Centered Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              La mejor tecnología en tus manos
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Disfruta de televisores LG con la mejor calidad de imagen y sonido del mercado
            </p>
            <button className="bg-red-600 hover:bg-red-700 px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-white transition duration-300 text-base md:text-lg">
              Ver ofertas exclusivas
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Productos</h2>
          <p className="text-gray-400 mb-12 text-lg">Explora nuestra selección de televisores de última generación</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((tv) => (
              <div
                key={tv.id}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={tv.img}
                    alt={tv.nombre}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{tv.nombre}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-4">${tv.precio}</p>
                  <button className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition duration-300">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-red-600 font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-600 transition">Televisores</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Ofertas</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Nuevos Modelos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-bold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-600 transition">Contacto</a></li>
                <li><a href="#" className="hover:text-red-600 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Garantía</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-600 transition">Acerca de</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Carreras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-red-600 transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Términos</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Tienda LG. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
