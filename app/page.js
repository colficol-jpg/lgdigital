"use client";
import Image from "next/image";
import React from "react";

const productos = [
  {
    id: 1,
    nombre: 'LG OLED evo 77"',
    precio: "$10.999.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560538/gallery/medium01.jpg",
  },
  {
    id: 2,
    nombre: 'LG QNED 75"',
    precio: "$8.499.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560543/gallery/medium01.jpg",
  },
  {
    id: 3,
    nombre: 'LG LED 43"',
    precio: "$1.599.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560547/gallery/medium01.jpg",
  },
  {
    id: 4,
    nombre: 'LG NanoCell 65"',
    precio: "$4.499.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560542/gallery/medium01.jpg",
  },
  {
    id: 5,
    nombre: 'LG UHD 50"',
    precio: "$3.299.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560548/gallery/medium01.jpg",
  },
  {
    id: 6,
    nombre: 'LG OLED C3 55"',
    precio: "$7.999.000",
    imagen:
      "https://www.lg.com/co/images/televisores/md07560544/gallery/medium01.jpg",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-red-600 mb-10">Tienda LG</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {productos.map((tv) => (
          <div
            key={tv.id}
            className="bg-zinc-900 rounded-2xl p-4 shadow-lg border border-red-700 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-60">
              <Image
                src={tv.imagen}
                alt={tv.nombre}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl mt-4 font-semibold">{tv.nombre}</h2>
            <p className="text-red-500 font-bold mt-2">{tv.precio}</p>
            <button className="mt-4 bg-transparent border-2 border-red-600 text-red-500 py-2 px-4 rounded-xl hover:bg-red-600 hover:text-white transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
