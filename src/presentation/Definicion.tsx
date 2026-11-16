import { Globe, Server, CheckCircle2, Zap, ShieldCheck, Cpu, Cloud } from 'lucide-react';
import './Definicion.css';

export default function Definicion() {
  return (
    <section className="definicion-contenedor">
      
      {/* Encabezado */}
      <header className="definicion-header">
        <span className="tag-seccion">
          <Zap size={14} /> Módulo 01
        </span>
        <h2 className="definicion-titulo">
          ¿Qué es <span className="texto-gradiente">Firebase Hosting</span>?
        </h2>
        <p className="definicion-subtitulo">
          Dos enfoques complementarios para alojar proyectos web según sus necesidades de arquitectura.
        </p>
      </header>

      {/* Grid Comparativo */}
      <div className="definicion-grid">
        
        {/* Firebase Hosting (Frontend) */}
        <article className="tarjeta-def hosting">
          <div>
            <div className="tarjeta-head">
              <div className="icono-wrapper hosting">
                <Globe size={32} />
              </div>
              <span className="badge-tipo frontend">Frontend / SPA</span>
            </div>

            <h3 className="tarjeta-def-titulo">Firebase Hosting</h3>
            
            <p className="tarjeta-def-desc">
              Alojamiento web de producción rápido, seguro y confiable. Diseñado para servir activos estáticos (HTML, CSS, JS) y Single Page Applications mediante una red CDN global.
            </p>
          </div>

          <ul className="lista-caracteristicas">
            <li className="item-caracteristica">
              <CheckCircle2 size={18} className="icono-check" />
              <span><strong>CDN Global Integrada:</strong> Contenido servido desde ubicaciones cercanas al usuario con latencia ultra baja.</span>
            </li>
            <li className="item-caracteristica">
              <ShieldCheck size={18} className="icono-check" />
              <span><strong>SSL Automático:</strong> Certificado de seguridad provisto y renovado sin costo adicional.</span>
            </li>
            <li className="item-caracteristica">
              <Zap size={18} className="icono-check" />
              <span><strong>Despliegue Atómico:</strong> Cambios instantáneos con opción de rollback en un clic.</span>
            </li>
          </ul>
        </article>

        {/* Firebase App Hosting (Backend / SSR) */}
        <article className="tarjeta-def app-hosting">
          <div>
            <div className="tarjeta-head">
              <div className="icono-wrapper app-hosting">
                <Server size={32} />
              </div>
              <span className="badge-tipo backend">Backend / Full-Stack</span>
            </div>

            <h3 className="tarjeta-def-titulo">Firebase App Hosting</h3>
            
            <p className="tarjeta-def-desc">
              Solución de nueva generación diseñada para frameworks web modernos. Gestiona automáticamente la infraestructura de servidor (SSR, microservicios) sobre Google Cloud.
            </p>
          </div>

          <ul className="lista-caracteristicas">
            <li className="item-caracteristica">
              <Cpu size={18} className="icono-check" />
              <span><strong>Soporte Serverless / SSR:</strong> Renderizado en servidor administrado mediante Cloud Run de forma transparente.</span>
            </li>
            <li className="item-caracteristica">
              <Cloud size={18} className="icono-check" />
              <span><strong>Integración CI/CD:</strong> Conexión directa a GitHub que compila y despliega automáticamente en cada commit.</span>
            </li>
            <li className="item-caracteristica">
              <Zap size={18} className="icono-check" />
              <span><strong>Escalabilidad Automática:</strong> Escala desde 0 hasta miles de instancias según la demanda.</span>
            </li>
          </ul>
        </article>

      </div>

    </section>
  );
}