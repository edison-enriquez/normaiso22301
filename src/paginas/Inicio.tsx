import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTENIDO, ISO_22301 } from '../datos/normas';
import { VINCULOS } from '../datos/interrelacion';
import { ContenidoHtml } from '../componentes/ContenidoHtml';

export function Inicio() {
  useEffect(() => {
    document.title = 'ISO 22301:2019 — Sistemas de gestión de continuidad del negocio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="contenedor hero-grid">
          <div>
            <span className="etiqueta">Segunda edición · Octubre 2019</span>
            <h1>ISO 22301:2019 — Sistemas de gestión de continuidad del negocio</h1>
            <p>
              La norma internacional de requisitos para que una organización se prepare ante las
              interrupciones, responda a ellas y recupere la entrega de sus productos y servicios
              dentro de plazos aceptables.
            </p>
            <div className="hero-acciones">
              <Link className="boton boton-principal" to="/iso-22301/capitulo-8">
                El capítulo 8: operación
              </Link>
              <Link className="boton boton-claro" to="/iso-22301/implantacion">
                Implantación paso a paso
              </Link>
            </div>
          </div>

          <aside className="tarjeta-ficha">
            <h2>Ficha de la norma</h2>
            <dl>
              <div className="fila">
                <dt>Referencia</dt>
                <dd>ISO 22301:2019</dd>
              </div>
              <div className="fila">
                <dt>Edición</dt>
                <dd>Segunda (2019-10)</dd>
              </div>
              <div className="fila">
                <dt>Sustituye a</dt>
                <dd>ISO 22301:2012</dd>
              </div>
              <div className="fila">
                <dt>Comité</dt>
                <dd>ISO/TC 292</dd>
              </div>
              <div className="fila">
                <dt>Naturaleza</dt>
                <dd>Requisitos, certificable</dd>
              </div>
              <div className="fila">
                <dt>Capítulos</dt>
                <dd>10, sin anexos</dd>
              </div>
              <div className="fila">
                <dt>ICS</dt>
                <dd>03.100.01; 03.100.70</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="franja">
        <div className="contenedor franja-grid">
          <div className="dato">
            <strong>7</strong>
            <span>capítulos de requisitos (4 a 10)</span>
          </div>
          <div className="dato">
            <strong>31</strong>
            <span>términos definidos</span>
          </div>
          <div className="dato">
            <strong>8</strong>
            <span>tipos de recursos a considerar</span>
          </div>
          <div className="dato">
            <strong>0</strong>
            <span>requisitos nuevos frente a 2012</span>
          </div>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <ContenidoHtml html={CONTENIDO['index']} />
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>ISO 22301:2019</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_22301.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-22301/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>De la 27001 a la 22301</h2>
              <p>
                {VINCULOS.length} correspondencias entre los requisitos y controles del SGSI y el
                apartado de ISO 22301 que los desarrolla.
              </p>
              <Link className="boton boton-claro" to="/interrelacion">
                Ver la correspondencia
              </Link>
            </div>

            <div className="widget">
              <h2>Sobre las fuentes</h2>
              <div className="texto">
                <p>
                  El contenido de ISO 22301 está contrastado con el texto original en inglés de la
                  norma; los términos en español son traducción propia. El de ISO/IEC 27001 y
                  27002 no tiene documento de respaldo en este proyecto.
                </p>
                <p>
                  <Link to="/fuentes">Ver el detalle</Link>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="cta">
        <div className="contenedor">
          <h2>Un plan que no se ha ejercitado es solo una hipótesis</h2>
          <p>
            La norma no pide un documento: pide una capacidad demostrada de seguir entregando
            productos y servicios durante una interrupción.
          </p>
          <Link className="boton boton-principal" to="/iso-22301/implantacion">
            Implantar un SGCN en 10 fases
          </Link>
        </div>
      </section>
    </>
  );
}
