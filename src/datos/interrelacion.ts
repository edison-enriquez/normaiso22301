import type { Vinculo, Fuente } from './tipos';

/**
 * Advertencia de procedencia para todo lo relativo a ISO/IEC 27001 y 27002.
 *
 * El lado de ISO 22301 de cada vínculo está verificado contra el texto de la
 * norma. El lado de 27001/27002 NO tiene documento de respaldo en este
 * proyecto: procede de conocimiento general de las ediciones de 2022.
 */
export const FUENTE_27K: Fuente = {
  procedencia: 'sin-respaldo',
  documento: 'ISO/IEC 27001:2022 e ISO/IEC 27002:2022',
  advertencia:
    'Las referencias a ISO/IEC 27001:2022 y 27002:2022 no están contrastadas contra el texto de esas normas: este proyecto solo dispone del texto de ISO 22301:2019. Verifíquelas contra el texto oficial antes de usarlas como criterio de conformidad.',
};

/**
 * Correspondencia entre los requisitos y controles del SGSI (ISO/IEC 27001 y
 * 27002) y el apartado de ISO 22301 que los desarrolla o con el que se
 * comparte evidencia.
 */
export const VINCULOS: Vinculo[] = [
  // --- Cláusulas comunes de la estructura armonizada ---
  {
    desde: { norma: 'iso-27001', punto: '4', rotulo: 'Contexto de la organización' },
    hacia: { norma: 'iso-22301', punto: '4', rotulo: 'Contexto de la organización' },
    nota: 'El análisis de contexto y de partes interesadas puede ser único para ambos sistemas. Lo que no es común es el apartado 4.2.2 de ISO 22301: exige un proceso propio para identificar, acceder y evaluar los requisitos legales y reglamentarios de continuidad, y mantenerlos documentados y al día. El alcance tampoco tiene por qué coincidir: el del SGCN se expresa en productos y servicios.',
  },
  {
    desde: { norma: 'iso-27001', punto: '5', rotulo: 'Liderazgo' },
    hacia: { norma: 'iso-22301', punto: '5', rotulo: 'Liderazgo' },
    nota: 'Los compromisos de la alta dirección son casi idénticos en redacción. Cabe una política integrada, siempre que contenga lo que pide el apartado 5.2.1 de ISO 22301: marco para fijar objetivos de continuidad, compromiso de cumplir los requisitos aplicables y compromiso de mejora continua del SGCN.',
  },
  {
    desde: { norma: 'iso-27001', punto: '6.1', rotulo: 'Acciones para tratar riesgos y oportunidades' },
    hacia: { norma: 'iso-22301', punto: '6.1', rotulo: 'Acciones para abordar riesgos y oportunidades' },
    nota: 'Cuidado con dar por equivalentes los dos análisis de riesgos. En ISO 22301 el apartado 6.1 trata solo los riesgos para la eficacia del sistema de gestión; los riesgos de interrupción del negocio se evalúan en 8.2.3. La nota del 6.1.2 lo dice de forma expresa.',
  },
  {
    desde: { norma: 'iso-27001', punto: '6.1.2', rotulo: 'Apreciación de riesgos de seguridad de la información' },
    hacia: { norma: 'iso-22301', punto: '8.2.3', rotulo: 'Evaluación de riesgos' },
    nota: 'Se puede compartir metodología (ISO 31000) y registro de riesgos, pero el objeto es distinto: en 27001, la pérdida de confidencialidad, integridad y disponibilidad de la información; en 22301, la interrupción de las actividades priorizadas y de los recursos que necesitan. Un registro único debe permitir filtrar por ambos criterios.',
  },
  {
    desde: { norma: 'iso-27001', punto: '7', rotulo: 'Apoyo' },
    hacia: { norma: 'iso-22301', punto: '7', rotulo: 'Apoyo' },
    nota: 'Competencia, comunicación y control documental se gestionan con los mismos procesos. La diferencia está en la toma de conciencia: el apartado 7.3 d) de ISO 22301 añade que cada persona conozca su propio rol y sus responsabilidades antes, durante y después de una interrupción.',
  },
  {
    desde: { norma: 'iso-27001', punto: '9.2', rotulo: 'Auditoría interna' },
    hacia: { norma: 'iso-22301', punto: '9.2', rotulo: 'Auditoría interna' },
    nota: 'Un único programa de auditoría puede cubrir los dos sistemas mediante auditorías combinadas. El apartado 9.2.2 de ISO 22301 exige que el programa considere la importancia de los procesos y los resultados de auditorías anteriores, y que el seguimiento verifique las acciones tomadas.',
  },
  {
    desde: { norma: 'iso-27001', punto: '9.3', rotulo: 'Revisión por la dirección' },
    hacia: { norma: 'iso-22301', punto: '9.3', rotulo: 'Revisión por la dirección' },
    nota: 'Cabe una sola revisión, pero con las entradas específicas del apartado 9.3.2 de ISO 22301: información del BIA y de la evaluación de riesgos, resultado de la evaluación de la documentación y las capacidades (8.6), riesgos no tratados adecuadamente y lecciones aprendidas de interrupciones y cuasi incidentes.',
  },
  {
    desde: { norma: 'iso-27001', punto: '10', rotulo: 'Mejora' },
    hacia: { norma: 'iso-22301', punto: '10', rotulo: 'Mejora' },
    nota: 'El proceso de no conformidades y acciones correctivas es común. En el SGCN se alimenta además de los informes posteriores a los ejercicios (8.5) y de los informes posteriores a incidentes (8.6).',
  },

  // --- Controles de ISO/IEC 27002:2022 ---
  {
    desde: { norma: 'iso-27002', punto: '5.29', rotulo: 'Seguridad de la información durante una interrupción' },
    hacia: { norma: 'iso-22301', punto: '8.4', rotulo: 'Planes y procedimientos de continuidad del negocio' },
    nota: 'El control pide planificar cómo mantener la seguridad de la información en un nivel adecuado durante la interrupción. En la práctica son requisitos que se incorporan a los planes de continuidad: un sitio alterno o un procedimiento manual no pueden suponer renunciar a los controles de acceso o de confidencialidad.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.30', rotulo: 'Preparación de las TIC para la continuidad del negocio' },
    hacia: { norma: 'iso-22301', punto: '8.2.2', rotulo: 'Análisis de impacto en el negocio' },
    nota: 'Es el vínculo principal. Los tiempos de recuperación de los sistemas no los decide el área de tecnología: se derivan de los plazos priorizados de reanudación (RTO) que el BIA fija para las actividades a las que esos sistemas dan servicio. Sin BIA, el control 5.30 no tiene de dónde tomar sus requisitos.',
  },
  {
    desde: { norma: 'iso-27002', punto: '8.13', rotulo: 'Copias de seguridad de la información' },
    hacia: { norma: 'iso-22301', punto: '8.3.4', rotulo: 'Requisitos de recursos' },
    nota: '«Información y datos» es uno de los ocho tipos de recursos que ISO 22301 obliga a considerar. La frecuencia y la retención de las copias son una solución de continuidad que se selecciona en 8.3 según la pérdida de datos que el negocio puede aceptar.',
  },
  {
    desde: { norma: 'iso-27002', punto: '8.14', rotulo: 'Redundancia de las instalaciones de tratamiento de información' },
    hacia: { norma: 'iso-22301', punto: '8.3', rotulo: 'Estrategias y soluciones de continuidad del negocio' },
    nota: 'La redundancia es una solución entre varias posibles. El apartado 8.3.3 obliga a seleccionarla valorando si cumple los plazos y la capacidad acordados, la cantidad y el tipo de riesgo que la organización acepta, y los costes y beneficios asociados.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.24 a 5.28', rotulo: 'Gestión de incidentes de seguridad de la información' },
    hacia: { norma: 'iso-22301', punto: '8.4.2', rotulo: 'Estructura de respuesta' },
    nota: 'Un incidente de seguridad puede convertirse en una interrupción. Hace falta un punto de enlace: los umbrales predefinidos que justifican iniciar una respuesta formal (8.4.2.3 b) deben contemplar el escalado desde el proceso de gestión de incidentes de seguridad.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.19 a 5.22', rotulo: 'Seguridad en las relaciones con proveedores' },
    hacia: { norma: 'iso-22301', punto: '8.6', rotulo: 'Evaluación de la documentación y las capacidades' },
    nota: 'ISO 22301 exige controlar la cadena de suministro (8.1), identificar las dependencias de socios y proveedores (8.2.2 h) y evaluar sus capacidades de continuidad (8.6 c). La evaluación de proveedores del SGSI puede ampliarse para cubrir las tres cosas con un único cuestionario o auditoría.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.31', rotulo: 'Requisitos legales, estatutarios, reglamentarios y contractuales' },
    hacia: { norma: 'iso-22301', punto: '4.2.2', rotulo: 'Requisitos legales y reglamentarios' },
    nota: 'El registro de requisitos legales puede ser único, incorporando los que afectan a la continuidad de productos, servicios, actividades y recursos. ISO 22301 añade en 8.6 d) la obligación de evaluar el cumplimiento de esos requisitos.',
  },
  {
    desde: { norma: 'iso-27002', punto: '6.3', rotulo: 'Concienciación, educación y formación' },
    hacia: { norma: 'iso-22301', punto: '8.5', rotulo: 'Programa de ejercicios' },
    nota: 'La formación del SGSI no sustituye a los ejercicios. El apartado 8.5 pide ejercicios y pruebas que desarrollen trabajo en equipo, competencia, confianza y conocimiento en quienes tienen un rol en las interrupciones, y que produzcan informes formales con acciones de mejora.',
  },
  {
    desde: { norma: 'iso-27002', punto: '7.5 y 7.11', rotulo: 'Amenazas físicas y ambientales; servicios de suministro' },
    hacia: { norma: 'iso-22301', punto: '8.3.2', rotulo: 'Identificación de estrategias y soluciones' },
    nota: 'Los controles físicos actúan sobre dos de los criterios del apartado 8.3.2: reducir la probabilidad de interrupción y acortar su duración. La infraestructura física y los servicios asociados son otro de los tipos de recursos de 8.3.4.',
  },
];

/** Agrupa los vínculos por la norma de origen, para renderizar por bloques. */
export function vinculosPorNorma(): Record<string, Vinculo[]> {
  return VINCULOS.reduce<Record<string, Vinculo[]>>((acc, v) => {
    (acc[v.desde.norma] ||= []).push(v);
    return acc;
  }, {});
}
