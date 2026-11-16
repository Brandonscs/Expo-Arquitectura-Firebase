import { Flame, Globe, Server, Sparkles, ArrowDown } from 'lucide-react';
import './Inicio.css';

export default function Inicio() {
  return (
    <div className="fondo-animado">
      
      {/* Cabecera superior */}
      <header className="header-inicio">
        <div className="logo-contenedor">
          <Flame size={24} color="var(--color-zapote)" />
          <span className="logo-texto">FIREBASE</span>
        </div>
        <span className="badge-presentacion">
          Presentación
        </span>
      </header>

      {/* Hero Central / Portada */}
      <main className="hero-contenedor">
        
        {/* Icono Principal Flotante */}
        <div className="flotar-icono">
          <Flame size={72} color="var(--color-zapote)" fill="var(--color-dorado)" />
        </div>

        {/* Título Principal */}
        <h1 className="titulo-principal">
          <span className="texto-gradiente">FIREBASE</span>
        </h1>

        <p className="subtitulo-principal">
          Infraestructura Moderna de Despliegue Web
        </p>

        {/* Tarjetas Informativas */}
        <div className="tarjetas-grid">
          
          {/* Tarjeta Frontend / Hosting */}
          <div className="tarjeta-modulo">
            <div className="icono-box frontend">
              <Globe size={32} />
            </div>
            <h2 className="tarjeta-titulo">Firebase Hosting</h2>
            <span className="tarjeta-tag frontend">El Frontend</span>
            <p className="tarjeta-descripcion">
              Servicio ultra rápido para sitios estáticos, SPAs y activos cliente mediante CDN Global.
            </p>
          </div>

          {/* Tarjeta Backend / App Hosting */}
          <div className="tarjeta-modulo">
            <div className="icono-box backend">
              <Server size={32} />
            </div>
            <h2 className="tarjeta-titulo">App Hosting</h2>
            <span className="tarjeta-tag backend">El Backend / Full-Stack</span>
            <p className="tarjeta-descripcion">
              Plataforma serverless para Next.js y Angular con soporte SSR sobre Google Cloud.
            </p>
          </div>

        </div>

      </main>

      {/* Pie de página */}
      <footer className="footer-inicio">
        <span className="footer-tag">
          <Sparkles size={14} /> Soluciones modernas para el desarrollo web
        </span>
        <ArrowDown size={18} className="flecha-animada" />
      </footer>

    </div>
  );
}