import { useState } from 'react';
import { Layers, Globe, Copy, Check, ExternalLink, ShieldCheck, Gamepad2, Activity, Server } from 'lucide-react';
import './Ejemplos.css';

export default function Ejemplos() {
  const [copiadoGame, setCopiadoGame] = useState(false);
  const [copiadoHexagon, setCopiadoHexagon] = useState(false);
  const [copiadoTaskFlow, setCopiadoTaskFlow] = useState(false);

  const urlGameReact = "https://fir-devops-fc65e.web.app/";
  const urlCyberHexagon = "https://cyber-hexagon-lab.web.app/";
  const urlTaskFlow = "https://taskflow--fir-devops-fc65e.us-east4.hosted.app/";

  const copiarAlPortapapeles = (texto: string, setCopiado: (val: boolean) => void) => {
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <section className="ejemplos-contenedor">
      
      {/* Encabezado */}
      <header className="ejemplos-header">
        <span className="tag-seccion">
          <Layers size={14} /> Módulo 04
        </span>
        <h2 className="definicion-titulo">
          Ejemplos de <span className="texto-gradiente">Aplicaciones Desplegadas</span>
        </h2>
        <p className="definicion-subtitulo">
          Proyectos reales funcionando en vivo bajo Firebase Hosting y Firebase App Hosting.
        </p>
      </header>

      {/* BLOQUE 1: PROYECTOS FIREBASE HOSTING (ARRIBA - 2 COLUMNAS) */}
      <div className="hosting-grid">
        
        {/* Caso 1: Game-React */}
        <article className="tarjeta-ejemplo">
          <div>
            <div className="ejemplo-head">
              <Gamepad2 size={26} color="var(--color-zapote)" />
              <span className="ejemplo-badge hosting">Hosting Principal</span>
            </div>

            <h3 className="ejemplo-titulo">🕹️ Game-React Arcade</h3>
            
            <p className="ejemplo-desc">
              Aplicación retro arcade con 4 minijuegos interactivos (Clicker, Laberinto, Atrapa Fantasmas y Simón Dice) construida con <strong>React 18 + TS + Vite</strong>.
            </p>

            {/* Recuadro de URL */}
            <div className="simulador-url-box">
              <div className="url-info">
                <Globe size={14} color="var(--color-dorado)" />
                <span className="url-texto">{urlGameReact}</span>
              </div>
              <div className="acciones-url">
                <button 
                  className="boton-copiar"
                  onClick={() => copiarAlPortapapeles(urlGameReact, setCopiadoGame)}
                  title="Copiar enlace"
                >
                  {copiadoGame ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                </button>
                <a 
                  href={urlGameReact} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="boton-visitar"
                  title="Abrir en pestaña nueva"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="ejemplo-detalles">
            <div className="detalle-item">
              <span className="detalle-label">Estado:</span>
              <span className="status-live">
                <span className="status-dot"></span> 200 OK
              </span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Despliegue:</span>
              <span>CI/CD (GitHub Actions)</span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Tipo:</span>
              <span>Frontend Estático / SPA</span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Certificado:</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} color="#4ade80" /> SSL Automático
              </span>
            </div>
          </div>
        </article>

        {/* Caso 2: Cyber Hexagon Lab */}
        <article className="tarjeta-ejemplo">
          <div>
            <div className="ejemplo-head">
              <Activity size={26} color="#60a5fa" />
              <span className="ejemplo-badge hosting">Multi-Sitio CLI</span>
            </div>

            <h3 className="ejemplo-titulo">⚡ Cyber Hexagon Lab</h3>
            
            <p className="ejemplo-desc">
              Web interactiva synthwave/cyberpunk con colmena de hexágonos y sintetizador de sonido en tiempo real desarrollado con la <strong>Web Audio API</strong> nativa e HTML5 Canvas.
            </p>

            {/* Recuadro de URL */}
            <div className="simulador-url-box">
              <div className="url-info">
                <Globe size={14} color="var(--color-dorado)" />
                <span className="url-texto">{urlCyberHexagon}</span>
              </div>
              <div className="acciones-url">
                <button 
                  className="boton-copiar"
                  onClick={() => copiarAlPortapapeles(urlCyberHexagon, setCopiadoHexagon)}
                  title="Copiar enlace"
                >
                  {copiadoHexagon ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                </button>
                <a 
                  href={urlCyberHexagon} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="boton-visitar"
                  title="Abrir en pestaña nueva"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="ejemplo-detalles">
            <div className="detalle-item">
              <span className="detalle-label">Estado:</span>
              <span className="status-live">
                <span className="status-dot"></span> 200 OK
              </span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Despliegue:</span>
              <span>Target Multi-Site CLI</span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Tipo:</span>
              <span>Frontend Estático / SPA</span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Certificado:</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} color="#4ade80" /> SSL Automático
              </span>
            </div>
          </div>
        </article>

      </div>

      {/* BLOQUE 2: PROYECTO FIREBASE APP HOSTING (ABAJO - ANCHO COMPLETO) */}
      <div className="app-hosting-contenedor">
        <article className="tarjeta-ejemplo full-width">
          <div>
            <div className="ejemplo-head">
              <Server size={28} color="#c084fc" />
              <span className="ejemplo-badge app-hosting">App Hosting / Cloud Run</span>
            </div>

            <h3 className="ejemplo-titulo">📋 TaskFlow Backend API</h3>
            
            <p className="ejemplo-desc">
              Aplicación web full-stack ligera con API RESTful en <strong>Node.js + Express</strong>. Desplegada de forma serverless sobre <strong>Google Cloud Run</strong> administrada mediante el archivo <code>apphosting.yaml</code>.
            </p>

            {/* Recuadro de URL */}
            <div className="simulador-url-box">
              <div className="url-info">
                <Server size={14} color="var(--color-dorado)" />
                <span className="url-texto">{urlTaskFlow}</span>
              </div>
              <div className="acciones-url">
                <button 
                  className="boton-copiar"
                  onClick={() => copiarAlPortapapeles(urlTaskFlow, setCopiadoTaskFlow)}
                  title="Copiar enlace"
                >
                  {copiadoTaskFlow ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
                </button>
                <a 
                  href={urlTaskFlow} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="boton-visitar"
                  title="Abrir en pestaña nueva"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="ejemplo-detalles grid-2x2">
            <div className="detalle-item">
              <span className="detalle-label">Estado de Servicio:</span>
              <span className="status-live">
                <span className="status-dot"></span> 200 OK (Live Cloud Run)
              </span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Pipeline de CI/CD:</span>
              <span>GitHub ➔ Cloud Build ➔ Cloud Run</span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Stack Tecnológico:</span>
              <span>Node.js + Express + Tailwind CSS</span>
            </div>
            <div className="detalle-item">
              <span className="detalle-label">Configuración del Servidor:</span>
              <span>Puerto 8080 (apphosting.yaml)</span>
            </div>
          </div>
        </article>
      </div>

    </section>
  );
}