"use client";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-black border-b border-red-700 text-white py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-red-500">Tienda LG</h1>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-red-500 transition">Inicio</a>
          <a href="#" className="hover:text-red-500 transition">Ofertas</a>
          <a href="#" className="hover:text-red-500 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
