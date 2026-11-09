import type { Norma, Fuente } from './tipos';

// El contenido se importa como HTML crudo desde src/contenido. Los capítulos
// 1 a 10 están contrastados con el texto original en inglés de
// ISO 22301:2019(E); la terminología en español es traducción propia.
import cInicio from '../contenido/index.html?raw';
import c12 from '../contenido/capitulo-1-2.html?raw';
import c3 from '../contenido/capitulo-3.html?raw';
import c4 from '../contenido/capitulo-4.html?raw';
import c5 from '../contenido/capitulo-5.html?raw';
import c6 from '../contenido/capitulo-6.html?raw';
import c7 from '../contenido/capitulo-7.html?raw';
import c8 from '../contenido/capitulo-8.html?raw';
import c9 from '../contenido/capitulo-9.html?raw';
import c10 from '../contenido/capitulo-10.html?raw';
import cImplantacion from '../contenido/implantacion.html?raw';
import cDocumentada from '../contenido/informacion-documentada.html?raw';
import cRelacionadas from '../contenido/normas-relacionadas.html?raw';
import cFaq from '../contenido/preguntas-frecuentes.html?raw';

export const CONTENIDO: Record<string, string> = {
  'index': cInicio,
  'capitulo-1-2': c12,
  'capitulo-3': c3,
  'capitulo-4': c4,
  'capitulo-5': c5,
  'capitulo-6': c6,
  'capitulo-7': c7,
  'capitulo-8': c8,
  'capitulo-9': c9,
  'capitulo-10': c10,
  'implantacion': cImplantacion,
  'informacion-documentada': cDocumentada,
  'normas-relacionadas': cRelacionadas,
  'preguntas-frecuentes': cFaq,
};

const FUENTE_22301: Fuente = {
  procedencia: 'oficial',
  documento: 'ISO 22301:2019(E), segunda edición (texto original en inglés)',
};

const FUENTE_PROPIA: Fuente = {
  procedencia: 'elaboracion-propia',
  advertencia:
    'Esta página es elaboración propia con fines didácticos: ordena y aplica la norma, pero su contenido no es texto normativo.',
};

export const ISO_22301: Norma = {
  id: 'iso-22301',
  designacion: 'ISO 22301:2019',
  titulo:
    'Seguridad y resiliencia — Sistemas de gestión de continuidad del negocio — Requisitos',
  resumen:
    'Qué debe cumplir una organización para prepararse ante las interrupciones, responder a ellas y recuperarse.',
  naturaleza: 'requisitos',
  certificable: true,
  fuente: FUENTE_22301,
  secciones: [
    {
      slug: 'capitulo-1-2',
      rotulo: '1 y 2. Objeto y referencias normativas',
      titulo: 'Capítulos 1 y 2: objeto, campo de aplicación y referencias normativas',
      descripcion:
        'Qué cubre ISO 22301:2019, a qué organizaciones se aplica, cómo se demuestra la conformidad y su única referencia normativa.',
      contenido: 'capitulo-1-2',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-3',
      rotulo: '3. Términos y definiciones',
      titulo: 'Capítulo 3: términos y definiciones',
      descripcion:
        'Los 31 términos de la norma: continuidad del negocio, interrupción, impacto, BIA, actividad priorizada, plan de continuidad.',
      contenido: 'capitulo-3',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-4',
      rotulo: '4. Contexto de la organización',
      titulo: 'Capítulo 4: contexto de la organización',
      descripcion:
        'Cuestiones internas y externas, partes interesadas, requisitos legales y reglamentarios y alcance del SGCN.',
      contenido: 'capitulo-4',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-5',
      rotulo: '5. Liderazgo',
      titulo: 'Capítulo 5: liderazgo',
      descripcion:
        'Compromiso de la alta dirección, política de continuidad del negocio y roles, responsabilidades y autoridades.',
      contenido: 'capitulo-5',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-6',
      rotulo: '6. Planificación',
      titulo: 'Capítulo 6: planificación',
      descripcion:
        'Riesgos y oportunidades del sistema de gestión, objetivos de continuidad del negocio y planificación de los cambios.',
      contenido: 'capitulo-6',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-7',
      rotulo: '7. Apoyo',
      titulo: 'Capítulo 7: apoyo',
      descripcion:
        'Recursos, competencia, toma de conciencia, comunicación e información documentada del SGCN.',
      contenido: 'capitulo-7',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-8',
      rotulo: '8. Operación',
      titulo: 'Capítulo 8: operación',
      descripcion:
        'El núcleo de la norma: análisis de impacto en el negocio, evaluación de riesgos, estrategias y soluciones, planes, ejercicios y evaluación.',
      contenido: 'capitulo-8',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-9',
      rotulo: '9. Evaluación del desempeño',
      titulo: 'Capítulo 9: evaluación del desempeño',
      descripcion:
        'Seguimiento, medición, análisis y evaluación; auditoría interna y revisión por la dirección.',
      contenido: 'capitulo-9',
      fuente: FUENTE_22301,
    },
    {
      slug: 'capitulo-10',
      rotulo: '10. Mejora',
      titulo: 'Capítulo 10: mejora',
      descripcion: 'No conformidad, acción correctiva y mejora continua del SGCN.',
      contenido: 'capitulo-10',
      fuente: FUENTE_22301,
    },
    {
      slug: 'implantacion',
      rotulo: 'Implantación paso a paso',
      titulo: 'Implantar un SGCN paso a paso: las 10 fases',
      descripcion:
        'Lectura operativa de los capítulos 4 a 10 ordenada como se ejecuta un proyecto de implantación real.',
      contenido: 'implantacion',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'informacion-documentada',
      rotulo: 'Información documentada',
      titulo: 'Información documentada que exige ISO 22301',
      descripcion:
        'Lista de los documentos y registros que la norma pide de forma expresa, con el apartado que los exige.',
      contenido: 'informacion-documentada',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'normas-relacionadas',
      rotulo: 'Normas relacionadas',
      titulo: 'Normas relacionadas con ISO 22301',
      descripcion:
        'ISO 22300, ISO 22313, las especificaciones técnicas de la serie 223xx, ISO 31000, ISO/IEC 27001 e ISO/IEC 27031.',
      contenido: 'normas-relacionadas',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'preguntas-frecuentes',
      rotulo: 'Preguntas frecuentes',
      titulo: 'Preguntas frecuentes sobre ISO 22301',
      descripcion:
        'Las dudas más habituales al aplicar la norma, con la referencia al apartado que las responde.',
      contenido: 'preguntas-frecuentes',
      fuente: FUENTE_PROPIA,
    },
  ],
};

export const NORMAS: Norma[] = [ISO_22301];

export function buscarNorma(id: string): Norma | undefined {
  return NORMAS.find((n) => n.id === id);
}

export function buscarSeccion(idNorma: string, slug: string) {
  const norma = buscarNorma(idNorma);
  return norma?.secciones.find((s) => s.slug === slug);
}
