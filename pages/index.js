// pages/index.js
export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.lg.com/content/dam/channel/wcms/co/homepage/main-hero/lg-oled-tv-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Experiencia OLED Inigualable
            </h1>
            <p className="text-lg mb-6">
              Colores más vivos, negros perfectos y diseño premium.
            </p>
            <button className="bg-lgRed text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition">
              Ver productos
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-lgDark">
          Productos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              img: "https://www.lg.com/co/images/televisores/md07533719/gallery/
