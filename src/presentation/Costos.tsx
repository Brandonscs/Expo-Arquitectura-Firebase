import { DollarSign, Globe, Server, HardDrive, ArrowUpRight, Cpu, CheckCircle2 } from 'lucide-react';
import './Costos.css';

export default function Costos() {
  return (
    <section className="costos-contenedor">
      
      {/* Encabezado */}
      <header className="costos-header">
        <span className="tag-seccion">
          <DollarSign size={14} /> Módulo 02
        </span>
        <h2 className="definicion-titulo">
          Estructura de <span className="texto-gradiente">Costos y Tarifas</span>
        </h2>
        <p className="definicion-subtitulo">
          Desglose detallado de las cuotas gratuitas y cobros por uso para Hosting y App Hosting.
        </p>
      </header>

      {/* Grid de Secciones */}
      <div className="costos-grid-secciones">
        
        {/* 1. FIREBASE HOSTING */}
        <article className="tarjeta-costo-bloque">
          <div className="costo-bloque-head">
            <h3 className="costo-bloque-titulo">
              <Globe size={24} color="#60a5fa" /> Firebase Hosting
            </h3>
            <span className="badge-plan spark">Spark / Blaze</span>
          </div>

          {/* Plan Spark */}
          <div className="plan-subseccion">
            <h4 className="plan-subseccion-tit">
              <CheckCircle2 size={16} color="var(--color-dorado)" /> Plan Spark (Gratuito)
            </h4>
            <ul className="lista-puntos-costos">
              <li>• <strong>Almacenamiento:</strong> Hasta 10 GB sin costo.</li>
              <li>• <strong>Transferencia de datos:</strong> Hasta 360 MB al día.</li>
            </ul>
          </div>

          {/* Plan Blaze */}
          <div className="plan-subseccion">
            <h4 className="plan-subseccion-tit">
              <ArrowUpRight size={16} color="var(--color-zapote)" /> Plan Blaze (Pago por uso)
            </h4>
            <ul className="lista-puntos-costos">
              <li>
                • <strong>Almacenamiento:</strong> 10 GB al mes sin costo; posteriormente <strong>$0.026 USD por GB</strong>.
              </li>
              <li>
                • <strong>Transferencia de datos:</strong> 10 GB al mes sin costo; posteriormente <strong>$0.15 USD por GB</strong>.
              </li>
            </ul>
          </div>
        </article>

        {/* 2. FIREBASE APP HOSTING */}
        <article className="tarjeta-costo-bloque">
          <div className="costo-bloque-head">
            <h3 className="costo-bloque-titulo">
              <Server size={24} color="#c084fc" /> Firebase App Hosting
            </h3>
            <span className="badge-plan blaze">Exclusivo Plan Blaze</span>
          </div>

          {/* Cuotas App Hosting */}
          <div className="plan-subseccion">
            <h4 className="plan-subseccion-tit">
              <HardDrive size={16} color="#c084fc" /> Recursos de App Hosting
            </h4>
            <ul className="lista-puntos-costos">
              <li>
                • <strong>Almacenamiento:</strong> 5 GB sin costo; luego <strong>$0.10 USD por GB</strong>.
              </li>
              <li>
                • <strong>Ancho de banda saliente:</strong> 10 GiB/mes sin costo. Excedido el límite: <strong>$0.15 USD/GiB</strong> (Cached) y <strong>$0.20 USD/GiB</strong> (Uncached).
              </li>
            </ul>
          </div>

          {/* Cuotas Google Cloud Asociadas */}
          <div className="plan-subseccion">
            <h4 className="plan-subseccion-tit">
              <Cpu size={16} color="var(--color-rojo)" /> Servicios Google Cloud (Límites Gratis / mes)
            </h4>

            <div className="cloud-services-grid">
              <div className="cloud-item">
                <div className="cloud-item-name">Cloud Run</div>
                <div className="cloud-item-desc">180k vCPU-s, 360k GiB-s y 2M peticiones</div>
              </div>

              <div className="cloud-item">
                <div className="cloud-item-name">Cloud Build</div>
                <div className="cloud-item-desc">2,500 minutos de compilación</div>
              </div>

              <div className="cloud-item">
                <div className="cloud-item-name">Artifact Registry</div>
                <div className="cloud-item-desc">0.5 GB de almacenamiento</div>
              </div>

              <div className="cloud-item">
                <div className="cloud-item-name">Cloud Logging</div>
                <div className="cloud-item-desc">50 GiB de logs al mes</div>
              </div>

              <div className="cloud-item">
                <div className="cloud-item-name">Secret Manager</div>
                <div className="cloud-item-desc">6 versiones de secretos activos</div>
              </div>
            </div>
          </div>
        </article>

      </div>

    </section>
  );
}