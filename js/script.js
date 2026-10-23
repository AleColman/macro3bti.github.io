/**
 * ==============================================================================
 * MACROPROYECTO 3.° BTI - "TECNOLOGÍA PARA TODOS"
 * Bachillerato Técnico en Informática · Colegio Gimnasio del Saber (Año 2026)
 * ==============================================================================
 * Este script administra la estructura de datos real extraída de la memoria técnica
 * y controla la interactividad completa de la plataforma web.
 */

// ==============================================================================
// 1. DATOS OFICIALES DEL PROYECTO
// ==============================================================================

/**
 * Indicadores del proyecto (Animados dinámicamente)
 */
const ESTADISTICAS_DATA = [
  {
    valor: "3.° BTI",
    esNumero: false,
    etiqueta: "Curso y Especialidad",
    subtexto: "Gimnasio del Saber"
  },
  {
    valor: 20,
    esNumero: true,
    sufijo: "",
    etiqueta: "Alumnos Responsables",
    subtexto: "100% de la nómina"
  },
  {
    valor: 128,
    esNumero: true,
    sufijo: " hs",
    etiqueta: "Horas de Trabajo",
    subtexto: "Presenciales y a distancia"
  },
  {
    valor: 3950000,
    esNumero: true,
    sufijo: " mil Gs.",
    etiqueta: "Fondos Autogestionados",
    subtexto: "100% Pizzeada Solidaria"
  }
];

/**
 * Fases oficiales del Macroproyecto (Cronograma ejecutado de Abril a Octubre 2026)
 */
const FASES_DATA = [
  {
    id: "fase-01",
    numero: "01",
    titulo: "Elaboración del Proyecto y Diagnóstico",
    descripcion: "Estructuración teórica, relevamiento ambiental en la Escuela N.º 6711 y levantamiento de la situación deficitaria (34 horas totales).",
    actividades: [
      "Visitas previas de observación y entrevistas con la dirección de la Escuela N.º 6711 Madre Teresa de Calcuta.",
      "Constatación del impacto de las altas temperaturas en la somnolencia y fatiga de los niños.",
      "Evaluación preliminar de la red eléctrica escolar y de la capacidad de carga residual.",
      "Redacción del marco introductorio, justificación y definición de competencias de Aprendizaje-Servicio."
    ],
    entregable: "Documento Formal del Proyecto y Diagnóstico Situacional Aprobado"
  },
  {
    id: "fase-02",
    numero: "02",
    titulo: "Campaña de Autogestión (Pizzeada Solidaria)",
    descripcion: "Organización de actividades económico-cooperativas y búsqueda de auspiciantes para financiar los costos (15 horas).",
    actividades: [
      "Planificación financiera y estimación de costos en la disciplina de Administración Financiera.",
      "Compra colectiva de insumos, preparación, amasado y armado de pizzas por los alumnos.",
      "Venta y distribución masiva comunitaria en Ciudad del Este.",
      "Recaudación íntegra de Gs. 3.950.000 para solventar climatización, materiales eléctricos e infraestructura web."
    ],
    entregable: "Fondos Totales Recaudados (Gs. 3.950.000) y Balance Financiero"
  },
  {
    id: "fase-03",
    numero: "03",
    titulo: "Preparación de Infraestructura Eléctrica",
    descripcion: "Adecuación de la red eléctrica de baja tensión cumpliendo estrictamente el reglamento de la ANDE (30 horas).",
    actividades: [
      "Tendido de circuito ramal independiente exclusivo para el equipo de aire acondicionado.",
      "Instalación de conductores de sección reglamentaria de 2.5 mm² con aislación antiflama.",
      "Montaje de llave termomagnética de protección de 16 A con curva de disparo tipo C.",
      "Verificación de la jabalina de puesta a tierra con resistencia menor a 10 Ω para protección de personas."
    ],
    entregable: "Línea Eléctrica Dedicada y Tablero con Protección Termomagnética"
  },
  {
    id: "fase-04",
    numero: "04",
    titulo: "Montaje e Instalación del Aire Acondicionado",
    descripcion: "Fijación mecánica, interconexión frigorífica y prueba de estanqueidad de la unidad tipo Split (15 horas).",
    actividades: [
      "Recepción y verificación técnica de los equipos de aire acondicionado tipo Split marca Heiko.",
      "Fijación de la unidad condensadora exterior mediante ménsulas reforzadas y tacos de amortiguación.",
      "Tendido de cañería de cobre con aislación elastomérica y conexión del circuito de drenaje de condensado.",
      "Prueba de vacío, estanqueidad y puesta en marcha del sistema frigorífico."
    ],
    entregable: "Equipo de Climatización Operativo en la Sala de Clases"
  },
  {
    id: "fase-05",
    numero: "05",
    titulo: "Capacitaciones, Concienciación y Festejo",
    descripcion: "Charlas de uso eficiente del aire a 24 °C, mantenimiento preventivo y festejo solidario del Día del Niño (30 horas).",
    actividades: [
      "Taller con los docentes y alumnos delegados sobre la importancia de mantener puertas y ventanas cerradas.",
      "Instrucción para programar el termostato a 24 °C como temperatura óptima de bienestar psicofísico y ahorro.",
      "Demostración práctica del protocolo de limpieza quincenal de los filtros antipolvo con agua corriente.",
      "Festejo del Día del Niño con merienda, juegos y panchos para agasajar a los educandos de la institución."
    ],
    entregable: "Folletería Informativa Entregada y Comunidad Escolar Capacitada"
  },
  {
    id: "fase-06",
    numero: "06",
    titulo: "Desarrollo Web, Memoria Final y Defensa",
    descripcion: "Maquetación del portal web en HTML5/CSS/JS, redacción de la memoria técnica y defensa final (4 horas).",
    actividades: [
      "Maquetación semántica del sitio web institucional en HTML5, CSS adaptativo y manipulación del DOM con JS.",
      "Publicación del portal en hosting comercial con dominio propio y certificado SSL.",
      "Redacción y encuadernación de la Memoria Final con referencias según Normas APA 7.ª Edición.",
      "Defensa oral pública del macroproyecto ante el tribunal docente del Colegio Gimnasio del Saber."
    ],
    entregable: "Sitio Web Desplegado en Vivo y Memoria Técnica Aprobada"
  }
];

/**
 * Galería de Evidencias reales del proyecto (basadas en los Anexos 1, 2 y 3 del documento)
 * Categorías: "climatizacion", "pizzeada", "comunidad", "desarrollo"
 */
const EVIDENCIAS_DATA = [
  // CATEGORÍA: DONACIÓN Y CLIMATIZACIÓN
  {
    id: "ev-01",
    titulo: "Entrega Oficial de los Equipos de Climatización",
    categoria: "donacion",
    categoriaLabel: "Donación y Climatización",
    descripcion: "Alumnos del 3.° BTI junto al docente tutor y directivos haciendo entrega formal de las unidades Split marca Heiko a la Escuela N.º 6711 Madre Teresa de Calcuta.",
    imagen: "assets/images/donacion/entrega-aires-01.jpeg"
  },

  // CATEGORÍA: PIZZEADA SOLIDARIA
  {
    id: "ev-02",
    titulo: "Jornada Masiva en el Polideportivo",
    categoria: "pizzeada",
    categoriaLabel: "Pizzeada Solidaria",
    descripcion: "Vista panorámica del curso completo coordinando mesas de despacho, empaque y distribución de pizzas para la comunidad.",
    imagen: "assets/images/pizzeada/pizzeada-tinglado-01.jpeg"
  },
  {
    id: "ev-03",
    titulo: "Organización y Empaque de Pedidos",
    categoria: "pizzeada",
    categoriaLabel: "Pizzeada Solidaria",
    descripcion: "Alumnos del 3.° BTI clasificando y empaquetando las pizzas listas para su distribución masiva comunitaria.",
    imagen: "assets/images/pizzeada/pizzeada-empaque-02.jpeg"
  },
  {
    id: "ev-04",
    titulo: "Horneado Continuo y Cocción Artesanal",
    categoria: "pizzeada",
    categoriaLabel: "Pizzeada Solidaria",
    descripcion: "Proceso de cocción y supervisión en los hornos eléctricos, garantizando la calidad de las pizzas solidarias.",
    imagen: "assets/images/pizzeada/pizzeada-horneado-03.jpeg"
  },
  {
    id: "ev-05",
    titulo: "Equipo del 3.° BTI en la Producción",
    categoria: "pizzeada",
    categoriaLabel: "Pizzeada Solidaria",
    descripcion: "Estudiantes del bachillerato exhibiendo las pizzas elaboradas durante la campaña de autogestión de los Gs. 3.950.000.",
    imagen: "assets/images/pizzeada/pizzeada-equipo-04.jpeg"
  },
  {
    id: "ev-06",
    titulo: "Elaboración y Manejo con Pala Pizzera",
    categoria: "pizzeada",
    categoriaLabel: "Pizzeada Solidaria",
    descripcion: "Manejo cuidadoso de los insumos y bandejas de pizzas listas para ser horneadas durante la jornada de recaudación.",
    imagen: "assets/images/pizzeada/pizzeada-pala-05.jpeg"
  },

  // CATEGORÍA: COMUNIDAD Y FESTEJO
  {
    id: "ev-07",
    titulo: "Integración con la Comunidad Escolar",
    categoria: "festejo",
    categoriaLabel: "Comunidad y Festejo",
    descripcion: "Fotografía grupal de los 20 alumnos del 3.° BTI junto a los niños, docentes y directivos de la Escuela N.º 6711 en el patio.",
    imagen: "assets/images/festejo/festejo-grupal-01.jpeg"
  },
  {
    id: "ev-08",
    titulo: "Puesto Festivo del Día del Niño",
    categoria: "festejo",
    categoriaLabel: "Comunidad y Festejo",
    descripcion: "Mesa de merienda solidaria preparada con panchos, salsas y pizarra conmemorativa para homenajear a los niños de la escuela.",
    imagen: "assets/images/festejo/festejo-merienda-02.jpeg"
  },
  {
    id: "ev-09",
    titulo: "Servicio y Entrega de la Merienda",
    categoria: "festejo",
    categoriaLabel: "Comunidad y Festejo",
    descripcion: "Los estudiantes del 3.° BTI atendiendo y sirviendo meriendas a los niños de la institución escolar.",
    imagen: "assets/images/festejo/festejo-entrega-panchos-03.jpeg"
  },
  {
    id: "ev-10",
    titulo: "Puesto de Refrescos e Hidratación",
    categoria: "festejo",
    categoriaLabel: "Comunidad y Festejo",
    descripcion: "Servicio de bebidas y atención continua a los niños durante las dinámicas y juegos en el patio.",
    imagen: "assets/images/festejo/festejo-bebidas-04.jpeg"
  },
  {
    id: "ev-11",
    titulo: "Convivencia y Recreación con los Niños",
    categoria: "festejo",
    categoriaLabel: "Comunidad y Festejo",
    descripcion: "Retrato comunitario compartiendo juegos, risas y disfraces al aire libre bajo la metodología Aprendizaje-Servicio.",
    imagen: "assets/images/festejo/festejo-comunitario-05.jpeg"
  },
  {
    id: "ev-12",
    titulo: "Stand y Pancarta Conmemorativa",
    categoria: "festejo",
    categoriaLabel: "Comunidad y Festejo",
    descripcion: "Stand decorado con globos, disfraces y mensajes de agasajo por los estudiantes del 3.° BTI.",
    imagen: "assets/images/festejo/festejo-cartel-06.jpeg"
  }
];

/**
 * Nómina Oficial Completa de los 20 Alumnos del 3.° BTI
 * (Colegio Gimnasio del Saber - Año 2026)
 */
const PARTICIPANTES_DATA = [
  {
    nombre: "Julio Mateo Aguiar Castillo",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, colaborando en la adecuación técnica y maquetación frontend.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Alan Yamil Benitez Valenzuela",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, coordinando la administración financiera y programación interactiva.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Lider Junior Caballero Franco",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, integrando requerimientos de infraestructura y codificación web.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Kamila Vanessa Caceres Ortiz",
    genero: "femenino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, diseñando la experiencia de usuario (UI/UX) y folletería técnica.",
    imagen: "assets/images/avatar-femenino.svg"
  },
  {
    nombre: "Nicolas Alexander Espinola Arevalos",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, participando en la arquitectura frontend y validación en hosting.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Sebastian Manuel Fariña Rivero",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, aportando en estilos responsivos y logística de montaje.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Carlos David Franco Sala",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, estructurando componentes informativos y documentación web.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Kevin Gao",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, implementando módulos interactivos en JavaScript y seguridad.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Alexis Eduardo Gaona Britez",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, realizando pruebas de funcionamiento y diagnóstico técnico.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Juan Carlos Godoy Gonzalez",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, supervisando gestión presupuestaria y testing web.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Fabricio Daniel Goyburu Cordoba",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, gestionando registro fotográfico y maquetación multimedia.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Juan Jose Lin Vazquez",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, programando lógica algorítmica y filtros de navegación.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Igor Damian Martinez Curtido",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, colaborando en adecuación eléctrica y desarrollo frontend.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Maia Fernanda Molinas Ocampos",
    genero: "femenino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, elaborando guías técnicas, diseño y comunicación.",
    imagen: "assets/images/avatar-femenino.svg"
  },
  {
    nombre: "Juan David Quesada Duarte",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, coordinando logística comunitaria y componentes visuales.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Ronny Alberto Rodriguez Medina",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, configurando hosting, DNS, SSL y despliegue del portal.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Mathias Ezequiel Rolon Garcia",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, elaborando planes de mantenimiento y maquetación semántica.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Adriana Monserrath Simon Arriola",
    genero: "femenino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, redactando la memoria APA y diseño de interfaces.",
    imagen: "assets/images/avatar-femenino.svg"
  },
  {
    nombre: "Jhosef Ferdinand Stumpf Britez",
    genero: "masculino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, participando en la interactividad web y autogestión.",
    imagen: "assets/images/avatar-masculino.svg"
  },
  {
    nombre: "Melany Aylen Velazquez Escobar",
    genero: "femenino",
    rol: "Equipo de Desarrollo Web",
    tags: ["HTML", "CSS", "JavaScript"],
    bio: "Formó parte del equipo de desarrollo mediante metodologías ágiles de trabajo, asegurando calidad de software y adaptabilidad móvil.",
    imagen: "assets/images/avatar-femenino.svg"
  }
];

// ==============================================================================
// 2. INICIALIZACIÓN
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderizarEstadisticas();
  renderizarFases();
  renderizarEvidencias(EVIDENCIAS_DATA);
  renderizarParticipantes();
  inicializarMenuMovil();
  inicializarHeaderScroll();
  inicializarScrollspy();
  inicializarContadores();
  inicializarFiltrosEvidencias();
  inicializarModalesFases();
  inicializarLightbox();
  inicializarFormularioContacto();
  inicializarBotonVolverArriba();
  inicializarAnimacionesEntrada();
});

// ==============================================================================
// 3. FUNCIONES DE RENDERIZADO
// ==============================================================================

function renderizarEstadisticas() {
  const contenedor = document.getElementById("statsGrid");
  if (!contenedor) return;

  contenedor.innerHTML = ESTADISTICAS_DATA.map((item, index) => {
    return `
      <div class="stat-card fade-in-up" style="transition-delay: ${index * 0.1}s">
        <div class="stat-value" data-stat-target="${item.esNumero ? item.valor : ''}" data-stat-suffix="${item.sufijo || ''}">
          ${item.esNumero ? '0' + (item.sufijo || '') : item.valor}
        </div>
        <div class="stat-label">${item.etiqueta}</div>
        <div class="stat-subtext">${item.subtexto}</div>
      </div>
    `;
  }).join("");
}

function renderizarFases() {
  const contenedor = document.getElementById("phasesTimeline");
  if (!contenedor) return;

  contenedor.innerHTML = FASES_DATA.map((fase) => {
    return `
      <article class="phase-card fade-in-up" data-phase-id="${fase.id}" tabindex="0" role="button" aria-label="Ver detalles de la fase ${fase.numero}: ${fase.titulo}">
        <div class="phase-number">${fase.numero}</div>
        <div class="phase-info">
          <h3>${fase.titulo}</h3>
          <p>${fase.descripcion}</p>
        </div>
        <div class="phase-deliverable">
          <div class="phase-deliverable-label">Entregable principal</div>
          <div class="phase-deliverable-value">${fase.entregable}</div>
        </div>
        <button class="phase-btn-open" type="button" data-phase-id="${fase.id}" tabindex="-1">
          <span>Ver detalles</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </article>
    `;
  }).join("");
}

function renderizarEvidencias(lista) {
  const contenedor = document.getElementById("galleryGrid");
  if (!contenedor) return;

  contenedor.innerHTML = lista.map((ev) => {
    return `
      <article class="evidence-card fade-in-up" data-category="${ev.categoria}" data-evidence-id="${ev.id}" tabindex="0" role="button" aria-label="Abrir evidencia: ${ev.titulo}">
        <div class="evidence-media">
          <img src="${ev.imagen}" alt="${ev.titulo}" loading="lazy" onerror="this.onerror=null; this.src='assets/images/portada.jpeg';">
          <span class="evidence-badge">${ev.categoriaLabel}</span>
        </div>
        <div class="evidence-body">
          <h3 class="evidence-title">${ev.titulo}</h3>
          <p class="evidence-desc">${ev.descripcion}</p>
          <div class="evidence-footer">
            <span>Ver evidencia fotográfica</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderizarParticipantes() {
  const contenedor = document.getElementById("teamGrid");
  if (!contenedor) return;

  contenedor.innerHTML = PARTICIPANTES_DATA.map((estudiante) => {
    const esFemenino = estudiante.genero === "femenino";
    const avatarSrc = esFemenino ? "assets/images/avatar-femenino.svg" : "assets/images/avatar-masculino.svg";
    const generoLabel = esFemenino ? "Alumna" : "Alumno";
    const tagsHtml = estudiante.tags.map(tag => `<span class="member-tag">${tag}</span>`).join("");
    return `
      <article class="member-card fade-in-up" data-genero="${estudiante.genero}">
        <div class="member-avatar ${esFemenino ? 'avatar-femenino' : 'avatar-masculino'}">
          <img src="${avatarSrc}" alt="Icono de ${generoLabel}: ${estudiante.nombre}" loading="lazy">
        </div>
        <h3 class="member-name">${estudiante.nombre}</h3>
        <div class="member-role">${estudiante.rol}</div>
        <div class="member-tags">${tagsHtml}</div>
        <p class="member-bio">${estudiante.bio}</p>
      </article>
    `;
  }).join("");
}

// ==============================================================================
// 4. INTERACTIVIDAD Y COMPORTAMIENTOS
// ==============================================================================

function inicializarMenuMovil() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link, .nav-cta");

  if (!navToggle || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  navToggle.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      toggleMenu();
    }
  });
}

function inicializarHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

function inicializarScrollspy() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

function inicializarContadores() {
  const statsSection = document.getElementById("indicadores");
  if (!statsSection) return;

  let animado = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animado) {
        animado = true;
        const statValues = document.querySelectorAll(".stat-value[data-stat-target]");
        
        statValues.forEach(el => {
          const targetStr = el.getAttribute("data-stat-target");
          if (!targetStr) return;
          
          const target = parseInt(targetStr, 10);
          const suffix = el.getAttribute("data-stat-suffix") || "";
          const duracion = 1600;
          const inicio = performance.now();

          const updateCounter = (tiempoActual) => {
            const transcurrido = tiempoActual - inicio;
            const progreso = Math.min(transcurrido / duracion, 1);
            const easeProgress = progreso * (2 - progreso);
            const actual = Math.floor(easeProgress * target);

            el.textContent = `${actual}${suffix}`;

            if (progreso < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

// ==============================================================================
// 5. FILTROS Y LIGHTBOX
// ==============================================================================

let categoriaActiva = "todos";
let evidenciaActualIndex = 0;
let evidenciasVisibles = [...EVIDENCIAS_DATA];

function inicializarFiltrosEvidencias() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      categoriaActiva = btn.getAttribute("data-filter");
      const tarjetas = document.querySelectorAll(".evidence-card");

      tarjetas.forEach(tarjeta => {
        const catTarjeta = tarjeta.getAttribute("data-category");
        if (categoriaActiva === "todos" || catTarjeta === categoriaActiva) {
          tarjeta.classList.remove("hidden");
        } else {
          tarjeta.classList.add("hidden");
        }
      });

      // Sincronizar array visible para el lightbox
      if (categoriaActiva === "todos") {
        evidenciasVisibles = [...EVIDENCIAS_DATA];
      } else {
        evidenciasVisibles = EVIDENCIAS_DATA.filter(ev => ev.categoria === categoriaActiva);
      }
    });
  });
}

function inicializarLightbox() {
  const backdrop = document.getElementById("lightboxModal");
  if (!backdrop) return;

  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  const imgEl = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const categoryEl = document.getElementById("lightboxCategory");
  const descEl = document.getElementById("lightboxDesc");

  const actualizarLightbox = () => {
    const item = evidenciasVisibles[evidenciaActualIndex];
    if (!item) return;

    imgEl.src = item.imagen;
    imgEl.alt = item.titulo;
    titleEl.textContent = item.titulo;
    categoryEl.textContent = item.categoriaLabel;
    descEl.textContent = item.descripcion;
  };

  const abrirLightbox = (evId) => {
    const index = evidenciasVisibles.findIndex(ev => ev.id === evId);
    evidenciaActualIndex = index !== -1 ? index : 0;
    actualizarLightbox();

    backdrop.classList.add("active");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const cerrarLightbox = () => {
    backdrop.classList.remove("active");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const mostrarSiguiente = () => {
    if (evidenciasVisibles.length === 0) return;
    evidenciaActualIndex = (evidenciaActualIndex + 1) % evidenciasVisibles.length;
    actualizarLightbox();
  };

  const mostrarAnterior = () => {
    if (evidenciasVisibles.length === 0) return;
    evidenciaActualIndex = (evidenciaActualIndex - 1 + evidenciasVisibles.length) % evidenciasVisibles.length;
    actualizarLightbox();
  };

  document.getElementById("galleryGrid")?.addEventListener("click", (e) => {
    const card = e.target.closest(".evidence-card");
    if (card) {
      const id = card.getAttribute("data-evidence-id");
      abrirLightbox(id);
    }
  });

  document.getElementById("galleryGrid")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".evidence-card");
      if (card) {
        e.preventDefault();
        const id = card.getAttribute("data-evidence-id");
        abrirLightbox(id);
      }
    }
  });

  closeBtn?.addEventListener("click", cerrarLightbox);
  prevBtn?.addEventListener("click", mostrarAnterior);
  nextBtn?.addEventListener("click", mostrarSiguiente);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      cerrarLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!backdrop.classList.contains("active")) return;
    if (e.key === "Escape") cerrarLightbox();
    if (e.key === "ArrowRight") mostrarSiguiente();
    if (e.key === "ArrowLeft") mostrarAnterior();
  });
}

// ==============================================================================
// 6. MODAL INTERACTIVO PARA LAS FASES
// ==============================================================================

function inicializarModalesFases() {
  const backdrop = document.getElementById("phaseModal");
  if (!backdrop) return;

  const closeBtn = document.getElementById("phaseModalClose");
  const numEl = document.getElementById("phaseModalNum");
  const titleEl = document.getElementById("phaseModalTitle");
  const descEl = document.getElementById("phaseModalDesc");
  const activitiesList = document.getElementById("phaseModalActivities");
  const deliverableEl = document.getElementById("phaseModalDeliverable");

  const abrirModal = (phaseId) => {
    const fase = FASES_DATA.find(f => f.id === phaseId);
    if (!fase) return;

    if (numEl) numEl.textContent = `FASE ${fase.numero}`;
    if (titleEl) titleEl.textContent = fase.titulo;
    if (descEl) descEl.textContent = fase.descripcion;
    if (deliverableEl) deliverableEl.textContent = fase.entregable;

    // Asegurar que la imagen permanezca 100% oculta
    const imgEl = document.getElementById("phaseModalImg");
    if (imgEl) {
      imgEl.style.display = "none";
      imgEl.src = "";
    }

    if (activitiesList) {
      activitiesList.innerHTML = (fase.actividades || []).map(act => `
        <li style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
          <span style="color: var(--sage-primary); font-weight: 700; font-size: 1.05rem; line-height: 1.2;">✓</span>
          <span style="color: var(--text-secondary); font-size: 0.94rem; line-height: 1.55;">${act}</span>
        </li>
      `).join("");
    }

    backdrop.classList.add("active");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    backdrop.classList.remove("active");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const timelineContainer = document.getElementById("phasesTimeline");
  if (timelineContainer) {
    timelineContainer.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-phase-id]");
      if (trigger) {
        const id = trigger.getAttribute("data-phase-id");
        if (id) abrirModal(id);
      }
    });

    timelineContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const trigger = e.target.closest("[data-phase-id]");
        if (trigger) {
          e.preventDefault();
          const id = trigger.getAttribute("data-phase-id");
          if (id) abrirModal(id);
        }
      }
    });
  }

  closeBtn?.addEventListener("click", cerrarModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      cerrarModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("active")) {
      cerrarModal();
    }
  });
}

// ==============================================================================
// 7. FORMULARIO DE CONTACTO
// ==============================================================================

function inicializarFormularioContacto() {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toastNotice");
  if (!form || !toast) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const toastMsg = document.getElementById("toastMsg");
    if (toastMsg) {
      toastMsg.textContent = "¡Mensaje recibido! Gracias por contactar al equipo del 3.° BTI.";
    }

    toast.classList.add("show");
    form.reset();

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  });
}

// ==============================================================================
// 8. BOTÓN VOLVER ARRIBA Y ANIMACIONES
// ==============================================================================

function inicializarBotonVolverArriba() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function inicializarAnimacionesEntrada() {
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}