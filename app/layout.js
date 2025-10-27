import "./globals.css";

export const metadata = {
  title: "Tienda LG | LgDigital",
  description: "Televisores LG con tecnología OLED, QNED y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
