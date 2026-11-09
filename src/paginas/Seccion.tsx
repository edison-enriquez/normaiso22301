import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CONTENIDO, ISO_22301, buscarSeccion } from '../datos/normas';
import { ContenidoHtml } from '../componentes/ContenidoHtml';
import { AvisoFuente } from '../componentes/AvisoFuente';

export function Seccion() {
  const { slug = '' } = useParams();
  const seccion = buscarSeccion('iso-22301', slug);

  useEffect(() => {
    if (!seccion) return;
    document.title = `${seccion.titulo} — ISO 22301`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', seccion.descripcion);
    // Sin ancla en la URL, arranca arriba: al cambiar de capítulo, el
    // navegador conservaría el scroll anterior.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [seccion]);

  if (!seccion) return <Navigate to="/" replace />;

  const indice = ISO_22301.secciones.findIndex((s) => s.slug === slug);
  const anterior = ISO_22301.secciones[indice - 1];
  const siguiente = ISO_22301.secciones[indice + 1];

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/iso-22301/capitulo-1-2">ISO 22301</Link>
            </li>
            <li>{seccion.rotulo}</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <AvisoFuente fuente={seccion.fuente} />
            <ContenidoHtml html={CONTENIDO[seccion.contenido]} />

            <nav className="nav-clausulas" aria-label="Navegación entre capítulos">
              {anterior ? (
                <Link to={`/iso-22301/${anterior.slug}`}>
                  <span>Anterior</span>
                  <strong>{anterior.rotulo}</strong>
                </Link>
              ) : (
                <Link to="/">
                  <span>Anterior</span>
                  <strong>Inicio</strong>
                </Link>
              )}
              {siguiente ? (
                <Link className="siguiente" to={`/iso-22301/${siguiente.slug}`}>
                  <span>Siguiente</span>
                  <strong>{siguiente.rotulo}</strong>
                </Link>
              ) : (
                <Link className="siguiente" to="/interrelacion">
                  <span>Siguiente</span>
                  <strong>Integrar el SGCN con un SGSI</strong>
                </Link>
              )}
            </nav>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>ISO 22301:2019</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_22301.secciones.map((s) => (
                    <li key={s.slug} className={s.slug === slug ? 'activo' : undefined}>
                      <Link to={`/iso-22301/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>SGCN y SGSI</h2>
              <p>
                Qué apartado de ISO 22301 desarrolla cada requisito y control de continuidad de
                ISO/IEC 27001, y por qué.
              </p>
              <Link className="boton boton-claro" to="/interrelacion">
                Ver la correspondencia
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
