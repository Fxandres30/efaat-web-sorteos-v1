"use client";

import "./Navbar.css";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <Link href="/" className="logo">

          <div className="logo-icon">
            E
          </div>

          <div>

            <h1 className="logo-title">
              EFAAT
            </h1>

            <p className="logo-subtitle">
              Sorteos
            </p>

          </div>

        </Link>

        {/* Menú */}

        <nav className="navbar-menu">

          <Link href="/">Inicio</Link>

          <Link href="/sorteos">Sorteos</Link>

          <Link href="/ganadores">Ganadores</Link>

          <Link href="/como-funciona">
            Cómo funciona
          </Link>

        </nav>

        {/* Botones */}

        <div className="navbar-buttons">

          <button className="btn-outline">
            Ingresar
          </button>

          <button className="btn-primary">
            Participar
          </button>

        </div>

        {/* Mobile */}

        <button className="navbar-mobile">

          <Menu size={28} />

        </button>

      </div>

    </header>
  );
}