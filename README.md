# Sitio Web Oficial · Macroproyecto 3.º BTI

> **Bachillerato Técnico en Informática**  
> *Una muestra digital interactiva construida por y para los estudiantes: del aprendizaje y la colaboración al producto final.*

---

## 📖 1. ¿Qué es este proyecto?

Este sitio web es el **portafolio digital oficial del Macroproyecto del 3.º BTI**. A diferencia de una página corporativa o comercial, este portal está concebido como una vitrina académica que documenta tanto el resultado final como el recorrido formativo:

* **Investigación:** Detección de necesidades y recopilación de requerimientos.
* **Planificación:** Metodología ágil, división de roles y cronograma.
* **Diseño:** Prototipado UX/UI y diseño accesible.
* **Desarrollo:** Lógica funcional, componentes modulares y base de datos.
* **Pruebas (QA):** Verificación de compatibilidad, accesibilidad y usabilidad.
* **Presentación:** Socialización ante la comunidad educativa.

El sitio utiliza una estética contemporánea, cálida y limpia (blanco cálido, verde salvia, durazno suave y lavanda), evitando estéticas saturadas o fondos oscuros estilo cyberpunk.

---

## 📁 2. Estructura de Carpetas

```text
macroproyecto/
│
├── index.html                  # Estructura semántica de la página (Header, Hero, Indicadores, Secciones, Modales, Footer)
│
├── css/
│   └── style.css               # Estilos visuales, variables CSS, maquetación Grid/Flexbox, animaciones y diseño responsive
│
├── js/
│   └── script.js               # Lógica interactiva y ARRAYS DE DATOS EDITABLES (fases, evidencias, participantes, etc.)
│
├── assets/
│   ├── images/                 # Gráficos locales e imágenes del proyecto (SVG vectoriales ligeros y compatibles sin internet)
│   │   ├── hero-illustration.svg
│   │   ├── fase-01.svg a fase-06.svg
│   │   ├── evidencia-01.svg a evidencia-08.svg
│   │   ├── estudiante-01.svg a estudiante-06.svg
│   │   └── resultado-mockup.svg
│   └── icons/                  # Iconografía
│
└── README.md                   # Esta guía de uso y mantenimiento
```

---

## 🚀 3. Cómo ejecutar la página

El proyecto está construido exclusivamente con estándares web (**HTML5, CSS3 y JavaScript nativo**) sin necesidad de instalar dependencias complejas ni Node.js:

### Opción A (XAMPP / Servidor Local):
1. Inicia el servidor Apache desde el panel de control de **XAMPP**.
2. Abre tu navegador web e ingresa a:  
   `http://localhost/macroproyecto/`

### Opción B (Directa en cualquier navegador):
1. Haz doble clic en el archivo [`index.html`](file:///c:/xampp/htdocs/macroproyecto/index.html) para abrirlo directamente en Chrome, Edge, Firefox u Opera.
2. Funciona de manera 100% autónoma y offline.

---

## ✏️ 4. Guía para el Docente: ¿Cómo modificar la información?

Para facilitar la personalización sin riesgo de romper el diseño visual, la información principal está centralizada en constantes de JavaScript dentro de [`js/script.js`](file:///c:/xampp/htdocs/macroproyecto/js/script.js).

### A. Dónde cambiar los Indicadores (Stats)
En [`js/script.js`](file:///c:/xampp/htdocs/macroproyecto/js/script.js#L18), busca la constante `ESTADISTICAS_DATA`:
```javascript
const ESTADISTICAS_DATA = [
  { valor: "3BTI", esNumero: false, etiqueta: "Curso Participante", subtexto: "Bachillerato Técnico" },
  { valor: 28,     esNumero: true,  sufijo: "", etiqueta: "Estudiantes", subtexto: "Equipo de desarrollo" },
  { valor: 6,      esNumero: true,  sufijo: "", etiqueta: "Fases Desarrolladas", subtexto: "Ciclo de vida completo" },
  { valor: 14,     esNumero: true,  sufijo: "+", etiqueta: "Productos Realizados", subtexto: "Entregables técnicos" }
];
```
*Si cambias `valor: 28` por la cantidad real de estudiantes, el número se animará automáticamente hasta ese valor.*

---

### B. Dónde cambiar las Fases del Proyecto
En [`js/script.js`](file:///c:/xampp/htdocs/macroproyecto/js/script.js#L54), busca el array `FASES_DATA`. Cada objeto representa una fase:
```javascript
{
  id: "fase-01",
  numero: "01",
  titulo: "Investigación y Diagnóstico",
  descripcion: "Descripción breve que se muestra en la tarjeta.",
  actividades: [
    "Actividad 1 realizada por los estudiantes",
    "Actividad 2 realizada",
    "Actividad 3 realizada"
  ],
  entregable: "Documento o producto resultante de la fase"
}
```

---

### C. Dónde cambiar y agregar nuevas Evidencias
En [`js/script.js`](file:///c:/xampp/htdocs/macroproyecto/js/script.js#L137), busca el array `EVIDENCIAS_DATA`.

#### Para agregar una nueva evidencia:
Simplemente copia y pega un bloque al final de la lista:
```javascript
{
  id: "ev-13",
  titulo: "Título de la nueva evidencia",
  categoria: "pizzeada", // Opciones activas: donacion | pizzeada | festejo
  categoriaLabel: "Pizzeada Solidaria",
  descripcion: "Explicación breve de lo que se observa en la fotografía.",
  imagen: "assets/images/pizzeada/mi-nueva-foto.jpeg"
}
```

---

### D. Dónde cambiar los Integrantes / Estudiantes
En [`js/script.js`](file:///c:/xampp/htdocs/macroproyecto/js/script.js#L205), busca el array `PARTICIPANTES_DATA`:
```javascript
{
  nombre: "Nombre y Apellido del Estudiante",
  genero: "masculino", // Opciones: "masculino" | "femenino" (asigna automáticamente el icono correspondiente)
  rol: "Líder de Proyecto / Frontend / Base de Datos",
  tags: ["HTML5", "CSS3", "Investigación"],
  bio: "Breve descripción del aporte del estudiante al macroproyecto.",
  imagen: "assets/images/avatar-masculino.svg" // o assets/images/avatar-femenino.svg
}
```

---

### E. Dónde cambiar los Datos Institucionales de Contacto
En [`js/script.js`](file:///c:/xampp/htdocs/macroproyecto/js/script.js#L259) y en [`index.html`](file:///c:/xampp/htdocs/macroproyecto/index.html#L380):
* Nombre del Colegio / Institución.
* Nombre del Docente Guía.
* Correo Institucional.
* Enlaces a redes sociales institucionales.

---

### F. Dónde cambiar las Imágenes
Todas las imágenes se ubican en la carpeta:
`assets/images/`

Para reemplazarlas por fotografías reales de los estudiantes o capturas del sistema:
1. Guarda tu foto en formato `.jpg`, `.png` o `.webp` dentro de `assets/images/` (por ejemplo: `assets/images/equipo-real.jpg`).
2. Actualiza la ruta correspondiente en `js/script.js` en el campo `imagen: "assets/images/equipo-real.jpg"`.

---

## 💡 5. Características Técnicas Destacadas

* **Accesibilidad (a11y):** Atributos `aria-labels`, roles ARIA en modales y soporte completo para navegación con teclado (`Tab`, `Escape`, `Enter`, flechas `←` y `→`).
* **Micro-animaciones no invasivas:** Implementación con `IntersectionObserver` y respeto al modo `prefers-reduced-motion`.
* **Zero Dependencias Externas:** Funciona sin Node.js, sin Vite, sin librerías pesadas y con recursos locales que no fallan sin internet.
* **Diseño 100% Adaptativo:** Responsive en smartphones, tablets y pantallas de escritorio.
