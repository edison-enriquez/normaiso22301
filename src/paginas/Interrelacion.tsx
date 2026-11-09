import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VINCULOS, FUENTE_27K } from '../datos/interrelacion';
import { AvisoFuente } from '../componentes/AvisoFuente';
import type { Vinculo } from '../datos/tipos';

/** Convierte "8.2.3" o "10" en la ruta del capítulo de ISO 22301 que lo contiene. */
function rutaDe22301(punto: string): string {
  const capitulo = Number.parseInt(punto, 10);
  if (capitulo >= 3 && capitulo <= 10) return `/iso-22301/capitulo-${capitulo}`;
  return '/iso-22301/capitulo-1-2';
}

function Tarjeta({ v, origen }: { v: Vinculo; origen: string }) {
  return (
    <div className="caja caja-info">
      <span className="titulo-caja">
        {origen} · {v.desde.punto} — {v.desde.rotulo}
      </span>
      <p>
        <strong>
          Se corresponde con{' '}
          <Link to={rutaDe22301(v.hacia.punto)}>
            ISO 22301 {v.hacia.punto} — {v.hacia.rotulo}
          </Link>
        </strong>
      </p>
      <p>{v.nota}</p>
    </div>
  );
}

export function Interrelacion() {
  useEffect(() => {
    document.title = 'SGCN y SGSI — correspondencia entre ISO 22301 e ISO/IEC 27001';
    window.scrollTo(0, 0);
  }, []);

  const de27001 = VINCULOS.filter((v) => v.desde.norma === 'iso-27001');
  const de27002 = VINCULOS.filter((v) => v.desde.norma === 'iso-27002');

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>SGCN y SGSI</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article className="contenido">
            <h1 className="sin-margen-sup">Integrar el SGCN con un SGSI</h1>
            <p className="entradilla">
              ISO/IEC 27001 pide que la seguridad de la información se mantenga durante una
              interrupción y que las TIC estén preparadas para la continuidad, pero no dice{' '}
              <em>cuánto</em> ni <em>en qué plazo</em>. ISO 22301 aporta el método para
              responderlo. Esta página empareja ambas normas.
            </p>

            <AvisoFuente fuente={FUENTE_27K} />

            <div className="caja caja-clave">
              <span className="titulo-caja">El vínculo que lo explica todo</span>
              <p>
                Los controles de continuidad del SGSI necesitan un dato de entrada que el SGSI no
                produce: <strong>en cuánto tiempo y a qué capacidad</strong> debe volver a
                funcionar cada cosa. Ese dato sale del{' '}
                <Link to="/iso-22301/capitulo-8#bia">
                  análisis de impacto en el negocio (apartado 8.2.2 de ISO 22301)
                </Link>
                , que fija los plazos priorizados de reanudación de las actividades y los recursos
                de los que dependen.
              </p>
              <p>
                Por eso la relación no es de alternativa sino de encaje: 27001 protege la
                información; 22301 protege la entrega de productos y servicios, y dice a
                tecnología qué tiene que recuperar primero.
              </p>
            </div>

            <h2 id="por-requisito">Requisitos comunes de sistema de gestión</h2>
            <p>
              Ambas normas aplican los requisitos de ISO para normas de sistemas de gestión:
              estructura de alto nivel, texto básico idéntico y términos comunes. Los capítulos 4 a
              7, 9 y 10 se parecen mucho; estas son las diferencias que importan al integrar.
            </p>

            {de27001.map((v) => (
              <Tarjeta key={`${v.desde.punto}-${v.hacia.punto}`} v={v} origen="27001" />
            ))}

            <h2 id="por-control">Controles de ISO/IEC 27002 relacionados con la continuidad</h2>
            <p>
              Cada uno de estos controles se apoya en un apartado del capítulo 8 de ISO 22301, que
              es donde la introducción de la norma sitúa casi todos los requisitos específicos de
              la disciplina.
            </p>

            {de27002.map((v) => (
              <Tarjeta key={`${v.desde.punto}-${v.hacia.punto}`} v={v} origen="27002" />
            ))}

            <h2 id="errores">Tres errores al integrar ambos sistemas</h2>

            <div className="caja caja-error">
              <span className="titulo-caja">
                1. Creer que el plan de recuperación ante desastres de TI es el SGCN
              </span>
              <p>
                Las TIC son <strong>uno de los ocho tipos de recursos</strong> que enumera el
                apartado <Link to="/iso-22301/capitulo-8#recursos">8.3.4</Link>. Los otros siete
                —personas, información y datos, infraestructura física, equipos y consumibles,
                transporte y logística, finanzas, socios y proveedores— quedan fuera de un plan de
                recuperación tecnológica. Un centro de datos alterno no sirve si nadie puede llegar
                a trabajar.
              </p>
            </div>

            <div className="caja caja-error">
              <span className="titulo-caja">2. Fusionar los dos análisis de riesgos sin más</span>
              <p>
                ISO 22301 distingue con dos notas cruzadas los riesgos para la eficacia del sistema
                de gestión (<Link to="/iso-22301/capitulo-6">6.1</Link>) de los riesgos de
                interrupción del negocio (<Link to="/iso-22301/capitulo-8#riesgos">8.2.3</Link>).
                Y ninguno de los dos coincide con el riesgo de seguridad de la información. Un
                registro único es posible, pero cada riesgo debe saber a cuál de las tres preguntas
                responde.
              </p>
            </div>

            <div className="caja caja-error">
              <span className="titulo-caja">
                3. Fijar los tiempos de recuperación desde tecnología
              </span>
              <p>
                El orden que marca el apartado{' '}
                <Link to="/iso-22301/capitulo-8#bia">8.2.2</Link> es: primero el plazo a partir del
                cual el impacto es inaceptable, después el plazo priorizado de reanudación dentro
                de él, y solo entonces los recursos necesarios. Cuando el área de sistemas declara
                lo que <em>puede</em> recuperar y el negocio lo acepta, el análisis se ha hecho al
                revés.
              </p>
            </div>

            <h2 id="compartir">Qué se puede compartir y qué no</h2>
            <div className="tabla-scroll">
              <table className="tabla">
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}>Se comparte sin problema</th>
                    <th>Es propio del SGCN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Control de la información documentada (7.5)</td>
                    <td>Análisis de impacto en el negocio (8.2.2)</td>
                  </tr>
                  <tr>
                    <td>Gestión de la competencia y de la comunicación (7.2, 7.4)</td>
                    <td>Estrategias y soluciones de continuidad (8.3)</td>
                  </tr>
                  <tr>
                    <td>Programa de auditoría interna (9.2)</td>
                    <td>Estructura de respuesta y equipos (8.4.2)</td>
                  </tr>
                  <tr>
                    <td>Revisión por la dirección, con entradas ampliadas (9.3)</td>
                    <td>Planes de continuidad y procedimientos de recuperación (8.4.4, 8.4.5)</td>
                  </tr>
                  <tr>
                    <td>No conformidades y acciones correctivas (10.1)</td>
                    <td>Programa de ejercicios (8.5)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="caja caja-aviso">
              <span className="titulo-caja">Dos certificados, no uno</span>
              <p>
                Integrar los sistemas no integra las certificaciones. ISO 22301 e ISO/IEC 27001 se
                certifican por separado, cada una contra sus propios requisitos, aunque la entidad
                de certificación pueda auditarlas de forma combinada. Para la competencia de
                quienes auditan y certifican un SGCN, la bibliografía de ISO 22301 remite a{' '}
                <strong>ISO/IEC/TS 17021-6</strong>.
              </p>
            </div>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>En esta página</h2>
              <div className="cuerpo">
                <ul>
                  <li>
                    <a href="#por-requisito">Requisitos comunes</a>
                  </li>
                  <li>
                    <a href="#por-control">Controles de ISO/IEC 27002</a>
                  </li>
                  <li>
                    <a href="#errores">Tres errores frecuentes</a>
                  </li>
                  <li>
                    <a href="#compartir">Qué se puede compartir</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="widget">
              <h2>ISO 22301 más usada aquí</h2>
              <div className="cuerpo">
                <ul>
                  <li>
                    <Link to="/iso-22301/capitulo-8#bia">8.2.2 Análisis de impacto</Link>
                  </li>
                  <li>
                    <Link to="/iso-22301/capitulo-8#estrategias">8.3 Estrategias y soluciones</Link>
                  </li>
                  <li>
                    <Link to="/iso-22301/capitulo-8#planes">8.4 Planes y procedimientos</Link>
                  </li>
                  <li>
                    <Link to="/iso-22301/capitulo-8#ejercicios">8.5 Programa de ejercicios</Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
