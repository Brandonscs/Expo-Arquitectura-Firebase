import { Code2, Globe, Server } from 'lucide-react';
import './Lenguajes.css';

export default function Lenguajes() {
  return (
    <section className="lenguajes-contenedor">
      
      {/* Encabezado */}
      <header className="lenguajes-header">
        <span className="tag-seccion">
          <Code2 size={14} /> Módulo 03
        </span>
        <h2 className="definicion-titulo">
          Lenguajes y <span className="texto-gradiente">Frameworks Soportados</span>
        </h2>
        <p className="definicion-subtitulo">
          Compatibilidad según el tipo de renderizado y el entorno de ejecución.
        </p>
      </header>

      {/* Grid de Servicios */}
      <div className="lenguajes-grid">
        
        {/* Firebase Hosting */}
        <article className="tarjeta-lenguaje">
          <div className="lenguaje-head">
            <div className="icono-lenguaje hosting">
              <Globe size={28} />
            </div>
            <div>
              <h3 className="lenguaje-titulo">Firebase Hosting</h3>
              <span className="lenguaje-sub">Lado del Cliente (Client-Side)</span>
            </div>
          </div>

          <div className="seccion-tags">
            <span className="seccion-tags-titulo">Lenguajes Base</span>
            <div className="pills-contenedor">
              <span className="pill-tech destacado">HTML5</span>
              <span className="pill-tech destacado">CSS3</span>
              <span className="pill-tech destacado">JavaScript (ES6+)</span>
              <span className="pill-tech destacado">TypeScript</span>
            </div>
          </div>

          <div className="seccion-tags">
            <span className="seccion-tags-titulo">Frameworks & Tools</span>
            <div className="pills-contenedor">
              <span className="pill-tech">React</span>
              <span className="pill-tech">Vite</span>
              <span className="pill-tech">Vue.js</span>
              <span className="pill-tech">Angular</span>
              <span className="pill-tech">Svelte</span>
              <span className="pill-tech">Ember</span>
            </div>
          </div>

          <p className="lenguaje-nota">
            💡 <strong>Procesamiento:</strong> Compila todo a archivos estáticos (bundle final) que el navegador del cliente ejecuta directamente.
          </p>
        </article>

        {/* Firebase App Hosting */}
        <article className="tarjeta-lenguaje">
          <div className="lenguaje-head">
            <div className="icono-lenguaje app-hosting">
              <Server size={28} />
            </div>
            <div>
              <h3 className="lenguaje-titulo">Firebase App Hosting</h3>
              <span className="lenguaje-sub">Lado del Servidor (Server-Side)</span>
            </div>
          </div>

          <div className="seccion-tags">
            <span className="seccion-tags-titulo">Entorno de Servidor</span>
            <div className="pills-contenedor">
              <span className="pill-tech destacado">Node.js (LTS)</span>
              <span className="pill-tech destacado">TypeScript</span>
              <span className="pill-tech destacado">JavaScript</span>
            </div>
          </div>

          <div className="seccion-tags">
            <span className="seccion-tags-titulo">Frameworks Full-Stack / SSR</span>
            <div className="pills-contenedor">
              <span className="pill-tech">Next.js (React)</span>
              <span className="pill-tech">Nuxt (Vue)</span>
              <span className="pill-tech">Angular (Modern)</span>
              <span className="pill-tech">Astro</span>
              <span className="pill-tech">Remix</span>
            </div>
          </div>

          <p className="lenguaje-nota">
            ⚙️ <strong>Procesamiento:</strong> Ejecuta código de servidor Node.js dinámicamente para generar páginas web (SSR) o atender rutas API.
          </p>
        </article>

      </div>

    </section>
  );
}