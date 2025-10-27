import React from "react";

const productos = [
  {
    id: 1,
    nombre: "LG OLED evo 77\"",
    precio: "$10.999.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560538/gallery/medium01.jpg",
  },
  {
    id: 2,
    nombre: "LG QNED 75\"",
    precio: "$8.499.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560543/gallery/medium01.jpg",
  },
  {
    id: 3,
    nombre: "LG LED 43\"",
    precio: "$1.599.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560547/gallery/medium01.jpg",
  },
  {
    id: 4,
    nombre: "LG NanoCell 65\"",
    precio: "$4.499.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560542/gallery/medium01.jpg",
  },
  {
    id: 5,
    nombre: "LG UHD 50\"",
    precio: "$3.299.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560548/gallery/medium01.jpg",
  },
  {
    id: 6,
    nombre: "LG OLED C3 55\"",
    precio: "$7.999.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560544/gallery/medium01.jpg",
  },
];

export default function Televisores() {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-center py-10 text-red-500">
        Tienda LG
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-red-700"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{producto.nombre}</h2>
              <p className="text-red-500 font-bold text-xl mt-2">
                {producto.precio}
              </p>
              <button className="mt-4 bg-transparent border-2 border-red-600 text-red-500 py-2 px-4 rounded-xl hover:bg-red-600 hover:text-white transition">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
