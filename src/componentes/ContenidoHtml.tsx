import { useMemo, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/** Archivos de src/contenido y la ruta de la SPA que les corresponde. */
const RUTA_POR_ARCHIVO: Record<string, string> = {
  'index.html': '/',
  'capitulo-1-2.html': '/iso-22301/capitulo-1-2',
  'capitulo-3.html': '/iso-22301/capitulo-3',
  'capitulo-4.html': '/iso-22301/capitulo-4',
  'capitulo-5.html': '/iso-22301/capitulo-5',
  'capitulo-6.html': '/iso-22301/capitulo-6',
  'capitulo-7.html': '/iso-22301/capitulo-7',
  'capitulo-8.html': '/iso-22301/capitulo-8',
  'capitulo-9.html': '/iso-22301/capitulo-9',
  'capitulo-10.html': '/iso-22301/capitulo-10',
  'implantacion.html': '/iso-22301/implantacion',
  'informacion-documentada.html': '/iso-22301/informacion-documentada',
  'normas-relacionadas.html': '/iso-22301/normas-relacionadas',
  'preguntas-frecuentes.html': '/iso-22301/preguntas-frecuentes',
  'interrelacion.html': '/interrelacion',
  'fuentes.html': '/fuentes',
};

/**
 * Reescribe los href entre fragmentos (capitulo-8.html#bia) a rutas de la
 * SPA, conservando el ancla cuando la hay. Antepone la base de Vite para que
 * el enlace también sea correcto al abrirlo en una pestaña nueva cuando el
 * sitio cuelga de /<repo>/ en GitHub Pages.
 */
function reescribirEnlaces(html: string, base: string): string {
  return html.replace(/href="([^"]+)"/g, (original, destino: string) => {
    if (/^(https?:|mailto:|#|\/)/.test(destino)) return original;
    const [archivo, ancla] = destino.split('#');
    const ruta = RUTA_POR_ARCHIVO[archivo];
    if (!ruta) return original;
    return `href="${base}${ruta}${ancla ? `#${ancla}` : ''}"`;
  });
}

interface Props {
  html: string;
}

/**
 * Renderiza los fragmentos de contenido del sitio.
 *
 * Sobre dangerouslySetInnerHTML: el HTML procede exclusivamente de
 * src/contenido, son archivos propios incluidos en el bundle en tiempo de
 * compilación. No hay entrada de usuario ni contenido remoto en este camino,
 * por lo que no existe superficie de XSS. Si algún día el contenido pasa a
 * venir de un CMS o de la red, hay que sanearlo antes de llegar aquí.
 */
export function ContenidoHtml({ html }: Props) {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const procesado = useMemo(() => reescribirEnlaces(html, base), [html, base]);

  // Delegación: intercepta los enlaces internos para no recargar la página.
  const alHacerClic = (e: MouseEvent<HTMLDivElement>) => {
    const destino = (e.target as HTMLElement).closest('a');
    if (!destino) return;

    const href = destino.getAttribute('href');
    if (!href || !href.startsWith('/')) return;

    // Respeta las intenciones de abrir en pestaña nueva.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (destino.target === '_blank') return;

    e.preventDefault();
    // navigate() ya aplica el basename del router: hay que quitárselo.
    navigate(base && href.startsWith(base) ? href.slice(base.length) || '/' : href);
  };

  return (
    <div
      className="contenido"
      onClick={alHacerClic}
      dangerouslySetInnerHTML={{ __html: procesado }}
    />
  );
}
