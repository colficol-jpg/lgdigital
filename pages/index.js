import React from "react";

export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
      minHeight: "100vh",
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #e0e0e0",
      }}>
        <img
          src="/logo-lg.png"
          alt="LG Logo"
          style={{ height: "40px" }}
        />
        <nav>
          <a href="#" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>TV</a>
          <a href="#" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>Audio</a>
          <a href="#" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>Electrodomésticos</a>
          <a href="#" style={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}>Soporte</a>
        </nav>
      </header>

      <section style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "4rem 2rem",
        background: "#f5f5f5"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#000", fontWeight: "bold" }}>
          Bienvenido a LG Digital Colombia
        </h1>
        <p style={{ maxWidth: "600px", marginTop: "1rem", color: "#444" }}>
          Descubre televisores, audio, electrodomésticos y soluciones innovadoras de LG diseñadas para tu hogar.
        </p>
        <button style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#a50034",
          color: "#fff",
          bo
