import { useState } from 'react';
import { Terminal, Globe, GitBranch, Server, Copy, Check, AlertTriangle, Layers } from 'lucide-react';
import './GuiaConfiguracion.css';

export default function GuiaConfiguracion() {
  const [metodo, setMetodo] = useState<'manual' | 'githubActions' | 'appHosting' | 'multiSite'>('manual');
  const [pasoCopiado, setPasoCopiado] = useState<number | null>(null);

  const copiarTexto = (texto: string, idx: number) => {
    navigator.clipboard.writeText(texto);
    setPasoCopiado(idx);
    setTimeout(() => setPasoCopiado(null), 2000);
  };

  const yamlWorkflow = `name: Deploy to Firebase Hosting on merge
on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies and build
        run: |
          npm ci
          npm run build

      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '\${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '\${{ secrets.FIREBASE_SERVICE_ACCOUNT_GAME_REACT }}'
          channelId: live
          projectId: fir-devops-fc65e`;

  const yamlAppHosting = `# Configuración para Firebase App Hosting / Cloud Run
runConfig:
  minInstances: 0
  maxInstances: 5
  concurrency: 80
  cpu: 1
  memoryMiB: 512

env:
  - variable: PORT
    value: "8080"`;

  const jsonMultiSite = `{
  "hosting": {
    "target": "mi-segunda-app",
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}`;

  return (
    <section className="guia-contenedor">
      
      {/* Encabezado */}
      <header className="guia-header">
        <span className="tag-seccion">
          <Terminal size={14} /> Módulo 05
        </span>
        <h2 className="definicion-titulo">
          Guías de <span className="texto-gradiente">Configuración y Despliegue</span>
        </h2>
        <p className="definicion-subtitulo">
          Estrategias de despliegue desde la consola local hasta entornos multi-sitio y CI/CD.
        </p>
      </header>

      {/* Selector de Método */}
      <div className="selector-metodos">
        <button 
          className={`btn-metodo ${metodo === 'manual' ? 'activo' : ''}`}
          onClick={() => setMetodo('manual')}
        >
          <Globe size={18} /> 1. Hosting Manual
          <span className="metodo-badge">CLI Directo</span>
        </button>

        <button 
          className={`btn-metodo ${metodo === 'githubActions' ? 'activo' : ''}`}
          onClick={() => setMetodo('githubActions')}
        >
          <GitBranch size={18} /> 2. GitHub Actions
          <span className="metodo-badge">CI/CD Automático</span>
        </button>

        <button 
          className={`btn-metodo ${metodo === 'appHosting' ? 'activo' : ''}`}
          onClick={() => setMetodo('appHosting')}
        >
          <Server size={18} /> 3. App Hosting
          <span className="metodo-badge">Full-Stack / SSR</span>
        </button>

        <button 
          className={`btn-metodo ${metodo === 'multiSite' ? 'activo' : ''}`}
          onClick={() => setMetodo('multiSite')}
        >
          <Layers size={18} /> 4. Multi-Sitio
          <span className="metodo-badge">Múltiples Apps</span>
        </button>
      </div>

      {/* MÉTODOS */}
      <div className="pasos-contenedor">

        {/* METODO 1: MANUAL */}
        {metodo === 'manual' && (
          <>
            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">1</span>
                <h3 className="paso-tit">Instalar Firebase CLI y Autenticar</h3>
              </div>
              <p className="paso-desc">Inicia sesión con tu cuenta en la terminal:</p>
              <div className="terminal-block">
                <span className="terminal-code">npm install -g firebase-tools{"\n"}firebase login</span>
                <button className="btn-copiar" onClick={() => copiarTexto("npm install -g firebase-tools\nfirebase login", 1)}>
                  {pasoCopiado === 1 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">2</span>
                <h3 className="paso-tit">Inicializar Proyecto (`firebase init`)</h3>
              </div>
              <p className="paso-desc">Responde a las preguntas interactivas en tu terminal exactamente así:</p>
              <div className="terminal-block">
                <span className="terminal-code">
                  ? Are you ready to proceed? Yes{"\n"}
                  ? Which features do you want to set up? Hosting: Set up deployments...{"\n"}
                  ? Associate directory with a Firebase project: Use an existing project (fir-devops-fc65e){"\n"}
                  ? What do you want to use as your public directory? dist{"\n"}
                  ? Configure as a single-page app (rewrite all urls to /index.html)? Yes{"\n"}
                  ? Set up automatic builds and deploys with GitHub? No
                </span>
                <button className="btn-copiar" onClick={() => copiarTexto("dist", 2)}>
                  {pasoCopiado === 2 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">3</span>
                <h3 className="paso-tit">Compilar y Desplegar</h3>
              </div>
              <p className="paso-desc">Genera la carpeta `dist` y súbela directamente a los servidores de Firebase:</p>
              <div className="terminal-block">
                <span className="terminal-code">npm run build{"\n"}firebase deploy --only hosting</span>
                <button className="btn-copiar" onClick={() => copiarTexto("npm run build\nfirebase deploy --only hosting", 3)}>
                  {pasoCopiado === 3 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>
          </>
        )}

        {/* METODO 2: GITHUB ACTIONS */}
        {metodo === 'githubActions' && (
          <>
            <div className="alerta-tecnica">
              <AlertTriangle size={24} color="#f87171" style={{ flexShrink: 0 }} />
              <div>
                <strong>¿Por qué se usa el método de Clave Privada (Secrets)?</strong>
                <br />
                El asistente automático de la CLI suele fallar con el error <code>HTTP 404: Unknown service account</code> por restricciones de permisos IAM en Google Cloud. La vía más segura y profesional es generar la clave de servicio manual y configurarla en GitHub Secrets.
              </div>
            </div>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">1</span>
                <h3 className="paso-tit">Subir Código Fuente a GitHub</h3>
              </div>
              <p className="paso-desc">Conecta tu proyecto local React/Vite a un repositorio de GitHub (asegúrate de incluir `dist` en `.gitignore`):</p>
              <div className="terminal-block">
                <span className="terminal-code">
                  git init{"\n"}
                  git add .{"\n"}
                  git commit -m "feat: primer commit"{"\n"}
                  git branch -M main{"\n"}
                  git remote add origin https://github.com/TU_USUARIO/TU_REPO.git{"\n"}
                  git push -u origin main
                </span>
                <button className="btn-copiar" onClick={() => copiarTexto("git init\ngit add .\ngit commit -m \"feat: primer commit\"\ngit branch -M main\ngit push -u origin main", 10)}>
                  {pasoCopiado === 10 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">2</span>
                <h3 className="paso-tit">Generar Service Account en Consola de Firebase</h3>
              </div>
              <p className="paso-desc">
                1. Ve a Consola de Firebase → ⚙️ <strong>Configuración del proyecto</strong>.<br />
                2. Entra a <strong>Cuentas de servicio (Service Accounts)</strong>.<br />
                3. Haz clic en <strong>Generar nueva clave privada</strong> y copia todo el texto JSON descargado.
              </p>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">3</span>
                <h3 className="paso-tit">Guardar Clave en GitHub Secrets</h3>
              </div>
              <p className="paso-desc">
                En GitHub → <strong>Settings</strong> → <strong>Secrets and variables</strong> → <strong>Actions</strong> → <strong>New repository secret</strong>:<br />
                • <strong>Name:</strong> <code>FIREBASE_SERVICE_ACCOUNT_GAME_REACT</code><br />
                • <strong>Secret:</strong> Pega el contenido JSON completo.
              </p>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">4</span>
                <h3 className="paso-tit">Crear Workflow `.github/workflows/firebase-hosting-merge.yml`</h3>
              </div>
              <p className="paso-desc">Crea este archivo en la raíz de tu proyecto con la siguiente configuración:</p>
              <div className="terminal-block">
                <span className="terminal-code">{yamlWorkflow}</span>
                <button className="btn-copiar" onClick={() => copiarTexto(yamlWorkflow, 11)}>
                  {pasoCopiado === 11 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">5</span>
                <h3 className="paso-tit">Hacer Push y Verificar</h3>
              </div>
              <p className="paso-desc">Sube los cambios y observa la compilación automática en la pestaña <strong>Actions</strong> de tu repositorio:</p>
              <div className="terminal-block">
                <span className="terminal-code">git add .{"\n"}git commit -m "feat: ci/cd firebase actions"{"\n"}git push origin main</span>
                <button className="btn-copiar" onClick={() => copiarTexto("git add .\ngit commit -m \"feat: ci/cd firebase actions\"\ngit push origin main", 12)}>
                  {pasoCopiado === 12 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>
          </>
        )}

        {/* METODO 3: APP HOSTING */}
        {metodo === 'appHosting' && (
          <>
            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">1</span>
                <h3 className="paso-tit">Vincular Repositorio desde la Consola</h3>
              </div>
              <p className="paso-desc">
                En la Consola de Firebase → Menú lateral <strong>App Hosting</strong> → Haz clic en <strong>Comenzar</strong> y conecta tu cuenta de GitHub autorizando el repositorio del proyecto (Next.js, Nuxt o Angular).
              </p>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">2</span>
                <h3 className="paso-tit">Configuración del Backend (`apphosting.yaml`)</h3>
              </div>
              <p className="paso-desc">Crea este archivo en la raíz de tu proyecto para gestionar la infraestructura serverless sobre Cloud Run:</p>
              <div className="terminal-block">
                <span className="terminal-code">{yamlAppHosting}</span>
                <button className="btn-copiar" onClick={() => copiarTexto(yamlAppHosting, 20)}>
                  {pasoCopiado === 20 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">3</span>
                <h3 className="paso-tit">Despliegue Automático administrado por Google Cloud</h3>
              </div>
              <p className="paso-desc">
                Cada <code>git push</code> a la rama principal activa un pipeline interno en <strong>Cloud Build</strong> que detecta automáticamente el framework, compila el SSR y lo despliega en <strong>Cloud Run</strong> sin necesidad de configurar Workflows manuales de GitHub.
              </p>
            </article>
          </>
        )}

        {/* METODO 4: MULTI-SITIO */}
        {metodo === 'multiSite' && (
          <>
            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">1</span>
                <h3 className="paso-tit">Crear el Segundo Sitio en la Consola</h3>
              </div>
              <p className="paso-desc">
                En la Consola de Firebase → <strong>Hosting</strong> → Desplázate al fondo y haz clic en <strong>Agregar otro sitio</strong>. Asigna el identificador (ejemplo: <code>cyber-hexagon-lab</code>).
              </p>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">2</span>
                <h3 className="paso-tit">Inicializar Firebase y Vincular el Target</h3>
              </div>
              <p className="paso-desc">Desde la terminal de tu segundo proyecto React, inicializa Hosting y conecta el alias de despliegue:</p>
              <div className="terminal-block">
                <span className="terminal-code">
                  firebase init hosting{"\n"}
                  # Selecciona tu proyecto actual (fir-devops-fc65e) y establece la carpeta dist{"\n\n"}
                  firebase target:apply hosting mi-segunda-app cyber-hexagon-lab
                </span>
                <button className="btn-copiar" onClick={() => copiarTexto("firebase init hosting\nfirebase target:apply hosting mi-segunda-app cyber-hexagon-lab", 30)}>
                  {pasoCopiado === 30 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">3</span>
                <h3 className="paso-tit">Configurar `firebase.json` con el Target</h3>
              </div>
              <p className="paso-desc">Edita el archivo `firebase.json` del segundo proyecto para que apunte al nuevo alias:</p>
              <div className="terminal-block">
                <span className="terminal-code">{jsonMultiSite}</span>
                <button className="btn-copiar" onClick={() => copiarTexto(jsonMultiSite, 31)}>
                  {pasoCopiado === 31 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>

            <article className="tarjeta-paso-guia">
              <div className="paso-head">
                <span className="paso-num">4</span>
                <h3 className="paso-tit">Compilar y Desplegar al Sitio Secundario</h3>
              </div>
              <p className="paso-desc">Ejecuta la compilación de Vite y despliega usando el target específico:</p>
              <div className="terminal-block">
                <span className="terminal-code">npm run build{"\n"}firebase deploy --only hosting:mi-segunda-app</span>
                <button className="btn-copiar" onClick={() => copiarTexto("npm run build\nfirebase deploy --only hosting:mi-segunda-app", 32)}>
                  {pasoCopiado === 32 ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
              </div>
            </article>
          </>
        )}

      </div>

    </section>
  );
}