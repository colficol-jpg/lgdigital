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
      <header className="flex justify-between items-center px-10 py-4 bg-black border-b border-red-600">
        <h1 className="text-2xl font-bold text-red-600">Tienda LG</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-red-600 transition">Inicio</a>
          <a href="#" className="hover:text-red-600 transition">Televisores</a>
          <a href="#" className="hover:text-red-600 transition">Ofertas</a>
          <a href="#" className="hover:text-red-600 transition">Soporte</a>
        </nav>
      </header>

      <section
        className="relative h-[450px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1200/400?random=banner')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Tecnologia que inspira confianza.
          </h2>
          <p className="text-gray-300 mb-6">
            Disfruta de televisores LG con la mejor calidad de imagen y sonido.
          </p>
          <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Ver ofertas exclusivas
          </button>
        </div>
      </section>

      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-black">
        {productos.map((tv) => (
          <div
            key={tv.id}
            className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img src={tv.img} alt={tv.nombre} className="w-full h-60 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{tv.nombre}</h3>
              <p className="text-lg text-red-600 mb-4">${tv.precio} COP</p>
              <button className="w-full border border-red-600 px-4 py-2 rounded-md hover:bg-red-600 transition">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer className="bg-neutral-900 border-t border-red-600 text-center py-6 text-sm text-gray-400">
        © 2025 Tienda LG — Todos los derechos reservados.
      </footer>
    </main>
  );
}
