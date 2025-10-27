'use client';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  const productos = [
    {
      id: 1,
      nombre: 'LG OLED evo C3 55"',
      precio: '3.499.000',
      img: 'https://images.lg.com/lg-oled-c3-55.jpg',
    },
    {
      id: 2,
      nombre: 'LG QNED 75" 8K',
      precio: '5.899.000',
      img: 'https://images.lg.com/lg-qned-75-8k.jpg',
    },
    {
      id: 3,
      nombre: 'LG NanoCell 65"',
      precio: '2.899.000',
      img: 'https://images.lg.com/lg-nanocell-65.jpg',
    },
    {
      id: 4,
      nombre: 'LG UHD 50"',
      precio: '1.799.000',
      img: 'https://images.lg.com/lg-uhd-50.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-red-600 mb-10">Tienda LG</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {productos.map((tv) => (
          <div
            key={tv.id}
            className="bg-zinc-900 rounded-2xl p-4 shadow-lg border border-zinc-800 hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-60">
              <Image
                src={tv.img}
                alt={tv.nombre}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
