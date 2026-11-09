import { Link } from 'react-router-dom';
import { ISO_22301 } from '../datos/normas';

export function PieDePagina() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div>
            <h3>Continuidad del negocio</h3>
            <p>
              Guía divulgativa e independiente sobre ISO 22301:2019 y los requisitos de un sistema
              de gestión de continuidad del negocio (SGCN).
            </p>
            <p className="texto-menor">
              Sitio sin afiliación con ISO, con ICONTEC ni con ninguna institución. No se utilizan
              logotipos ni marcas institucionales.
            </p>
          </div>

          <div>
            <h3>ISO 22301</h3>
            <ul>
              {ISO_22301.secciones.slice(0, 9).map((s) => (
                <li key={s.slug}>
                  <Link to={`/iso-22301/${s.slug}`}>{s.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Práctica</h3>
            <ul>
              <li>
                <Link to="/iso-22301/implantacion">Implantación paso a paso</Link>
              </li>
              <li>
                <Link to="/iso-22301/capitulo-8#bia">El análisis de impacto (BIA)</Link>
              </li>
              <li>
                <Link to="/iso-22301/capitulo-8#planes">Planes de continuidad</Link>
              </li>
              <li>
                <Link to="/iso-22301/informacion-documentada">Información documentada</Link>
              </li>
              <li>
                <Link to="/interrelacion">Integrar el SGCN con un SGSI</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Recursos</h3>
            <ul>
              <li>
                <Link to="/iso-22301/capitulo-3">Glosario</Link>
              </li>
              <li>
                <Link to="/iso-22301/normas-relacionadas">Normas relacionadas</Link>
              </li>
              <li>
                <Link to="/iso-22301/preguntas-frecuentes">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link to="/fuentes">Fuentes y verificación</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {anio} · Contenido divulgativo sobre ISO 22301:2019</span>
          <span>
            ISO 22301:2019 es propiedad de la Organización Internacional de Normalización.
          </span>
        </div>
      </div>
    </footer>
  );
}
