import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Fuentes() {
  useEffect(() => {
    document.title = 'Fuentes y verificación';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>Fuentes y verificación</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor">
          <article className="contenido" style={{ maxWidth: '820px' }}>
            <h1 className="sin-margen-sup">Fuentes y verificación</h1>
            <p className="entradilla">
              No todo el contenido de este sitio tiene el mismo respaldo documental. Esta página
              dice exactamente qué se verificó, contra qué, y qué no.
            </p>

            <h2>Contenido verificado</h2>
            <div className="tabla-scroll">
              <table className="tabla">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Contenido</th>
                    <th>Fuente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>ISO 22301:2019</strong>, prólogo, introducción, capítulos 1 a 10 y
                      bibliografía
                    </td>
                    <td>
                      Texto original en inglés, <strong>ISO 22301:2019(E)</strong>, segunda
                      edición (2019-10). Numeración de apartados, listas de requisitos, notas y
                      definiciones contrastadas una a una.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="caja caja-aviso">
              <span className="titulo-caja">La terminología en español es traducción propia</span>
              <p>
                El documento de respaldo está en inglés. Los términos en español de este sitio
                —«interrupción» para <em>disruption</em>, «actividad priorizada» para{' '}
                <em>prioritized activity</em>, «evaluación de riesgos» para{' '}
                <em>risk assessment</em>, «apoyo» para <em>support</em>— siguen el uso habitual en
                las normas ISO de sistemas de gestión, pero{' '}
                <strong>no se han contrastado con la traducción oficial al español</strong> ni con
                la adopción nacional (en Colombia, NTC-ISO 22301 de ICONTEC), que pueden emplear
                otras palabras.
              </p>
              <p>
                Por eso el <Link to="/iso-22301/capitulo-3">glosario</Link> da siempre el término
                original en inglés junto al español. Si va a citar un requisito en un informe de
                auditoría o en un contrato, cite el texto de la edición oficial que haya adquirido.
              </p>
            </div>

            <h2>Contenido sin respaldo documental</h2>
            <div className="caja caja-aviso">
              <span className="titulo-caja">Léase con cautela</span>
              <p>
                Las referencias a <strong>ISO/IEC 27001:2022</strong> e{' '}
                <strong>ISO/IEC 27002:2022</strong> de la página{' '}
                <Link to="/interrelacion">SGCN y SGSI</Link> proceden de conocimiento general, no
                de los textos de esas normas. Lo mismo ocurre con las descripciones de las demás
                normas de la página de{' '}
                <Link to="/iso-22301/normas-relacionadas">normas relacionadas</Link>: de ellas solo
                se ha verificado el título, tal como figura en la bibliografía de ISO 22301, que
                las cita sin fecha.
              </p>
              <p>
                Verifique cualquier referencia a esas normas contra su texto oficial y su edición
                vigente antes de usarla como criterio de conformidad.
              </p>
            </div>

            <h2>Elaboración propia</h2>
            <p>
              Las páginas de <Link to="/iso-22301/implantacion">implantación paso a paso</Link>,{' '}
              <Link to="/iso-22301/informacion-documentada">información documentada</Link>,{' '}
              <Link to="/iso-22301/normas-relacionadas">normas relacionadas</Link>,{' '}
              <Link to="/iso-22301/preguntas-frecuentes">preguntas frecuentes</Link> y{' '}
              <Link to="/interrelacion">SGCN y SGSI</Link>, junto con los ejemplos, las figuras y
              las cajas de «error frecuente» y «en la práctica» repartidas por el sitio, son
              elaboración propia con fines didácticos. Ordenan y aplican la norma, pero{' '}
              <strong>no son texto normativo</strong> y no deben citarse como tal.
            </p>

            <h2>Sobre las normas y su adquisición</h2>
            <p>
              Las normas ISO son documentos con derechos de autor. Este sitio las explica y resume;
              no las reproduce ni las sustituye. El texto oficial debe adquirirse en ISO o en el
              organismo nacional de normalización correspondiente — en Colombia,{' '}
              <strong>ICONTEC</strong>.
            </p>

            <div className="caja caja-info">
              <span className="titulo-caja">Independencia</span>
              <p>
                Este sitio no está afiliado a ISO, a IEC, a ICONTEC ni a ninguna institución
                académica. No utiliza logotipos, escudos ni marcas institucionales. La paleta de
                color es una referencia cromática, no un uso de identidad corporativa.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
