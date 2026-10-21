// ============================================
// Doclick — Datos centralizados (v3)
// Sin localización geográfica hardcodeada
// ============================================

const CONFIG = {
  FORM_REGISTRO_URL: "https://forms.gle/rJDpws9dyrK41cwF7", // enlace del Google Form de registro
  FECHA_LANZAMIENTO: "2026-10-16",  // día del lanzamiento
  DIAS_PRUEBA: 30,                  // Destacado y Pro (los fundadores tienen 60)
  WHATSAPP_DOCLICK: "584267619312"
};

// Categorías del directorio (pestañas). Una pestaña sin perfiles no se muestra.
// domicilio: true → la pestaña tiene filtros "Atiende a domicilio" y por zona.
const TIPOS = [
  { id: "medico", label: "Médicos", titulo: "Médicos verificados" },
  { id: "odontologia", label: "Odontología", titulo: "Odontólogos verificados" },
  { id: "fisioterapia", label: "Fisioterapia", titulo: "Fisioterapia", domicilio: true },
  { id: "enfermeria", label: "Enfermería a domicilio", titulo: "Enfermería a domicilio", domicilio: true }
];

// tipo: "medico" | "odontologia" | "fisioterapia" | "enfermeria"
// title: tratamiento antes del nombre ("Dr.", "Dra."). Vacío para licenciados: nunca "Dr.".
// titulo: título visible debajo del nombre ("Médico cirujano", "Odontólogo", "Lic. en Fisioterapia", "Lic. en Enfermería").
// plan: "basico" | "destacado" | "pro". Usar siempre planEfectivo(perfil), nunca perfil.plan directo.
// prueba: null | { plan: "destacado" | "pro", hasta: "AAAA-MM-DD" } — prueba gratis (30 días).
//   Los fundadores tienen 60 días: van con plan "pro" y se ajusta a mano al terminar.
// planHasta: fecha de vencimiento del plan pagado (AAAA-MM-DD). Solo control interno, no se muestra.
// fundador: true solo para los fundadores (sello "Fundador").
// verificado: true solo si la colegiatura se comprobó (sello "Verificado").
// mpps: registro MPPS. cmm: número del Colegio de Médicos de Monagas.
//   Otros colegios (odontología, fisioterapia, enfermería): colegio (sigla, ej. "COV", "CFV") + colegiatura (número). Vacío = no se muestra.
// telefono: (opcional) teléfono como se muestra en el plan Básico. Vacío = se forma desde whatsappNumber.
// zona: zona de Maturín. domicilio: atiende a domicilio (filtro en Fisioterapia y Enfermería).
// landing: (opcional) personalización de link.html — theme {deep, accent, paper, ink, soft}, coverUrl (foto vertical 4:5), logoUrl, facts [[dato, detalle], ...] (máx. 3, solo datos confirmados).
const DOCTORS = [
  {
    id: 6,
    title: "Dr.",
    name: "Domingo Guerra",
    initials: "DG",
    specialty: "Neurocirugía",
    city: "",
    zona: "",
    domicilio: false,
    tipo: "medico",
    titulo: "Médico cirujano",
    plan: "pro",
    prueba: null,
    fundador: true,
    verificado: true,
    planHasta: "",
    mpps: "",
    cmm: "",
    hasVideo: false,
    photoUrl: "images/dr-domingo-guerra.jpg",
    whatsappNumber: "584147667008",
    instagramHandle: "",
    shortBio: "Neurocirujano. [Pendiente: confirmar bio con el Dr. Guerra antes de publicar]",
    longBio: "[Pendiente: el Dr. Guerra aún no ha grabado su video de caso ni confirmado el texto de su bio. Este perfil está cargado como primer fundador real, con foto aprobada, mientras se completa el resto de su información.]",
    specialties: ["Neurocirugía"],
    address: "[Pendiente: confirmar dirección de consulta]",
    schedule: "[Pendiente: confirmar horario]",
    heroVideo: null,
    pastVideos: []
  },
  {
    id: 7,
    title: "Dr.",
    name: "Williams Vegas",
    initials: "WV",
    specialty: "Urología y Cirugía General",
    city: "",
    zona: "Las Avenidas",
    domicilio: false,
    tipo: "medico",
    titulo: "Médico cirujano",
    plan: "pro",
    prueba: null,
    fundador: true,
    verificado: true,
    planHasta: "",
    mpps: "71643",
    cmm: "3381",
    hasVideo: true,
    photoUrl: "images/dr-williams-vegas.jpg",
    whatsappNumber: "584240994557",
    whatsappNumbers: ["584240994557", "584128616055"],
    instagramHandle: "urologo.drvegas",
    shortBio: "Urólogo y cirujano general. Diagnóstico y tratamiento de patologías prostáticas, genitourinarias y oncológicas.",
    longBio: "Urólogo y cirujano general. Diagnóstico y tratamiento de patologías prostáticas, genitourinarias y oncológicas (cáncer de próstata, riñón, vejiga, testículo y pene). Ofrece cirugía mínimamente invasiva, procedimientos endoscópicos, tratamientos de fertilidad y consulta urológica integral (incluye ecosonograma cuando se requiere).",
    specialties: ["Patologías prostáticas", "Patologías genitourinarias", "Oncología urológica", "Cirugía mínimamente invasiva", "Fertilidad"],
    address: "Centro de Consulta Externa Santa Sofía, Av. Luis del Valle García con calle 6, Sector Las Avenidas, Maturín",
    mapQuery: "PRVG+MGQ, Calle 6, Maturín 6201, Monagas",
    schedule: "Lun, miér, jue y vie: 7:30am–12:30pm · Mar: 11:00am–2:00pm · Tardes y sábados: con cita previa",
    heroVideo: { title: "Conoce al Dr. Williams Vegas", duration: "0:50", youtubeId: "AKmDh6kZXDk", uploadDate: "2026-09-08" },
    landing: {
      theme: { deep: "#0B2F2A", accent: "#D9A55B", paper: "#F2F4F1", ink: "#13201D", soft: "#5E6E69" },
      coverUrl: "images/cover-dr-williams-vegas.jpg",
      facts: [["Urología", "y cirugía general"], ["Maturín", "Centro Santa Sofía"], ["Eco", "en consulta si se requiere"]]
    },
    pastVideos: []
  },
  {
    id: 8,
    title: "Dr.",
    name: "Dióver González",
    initials: "DG",
    specialty: "Neurocirugía",
    city: "",
    zona: "",
    domicilio: false,
    tipo: "medico",
    titulo: "Médico cirujano",
    plan: "pro",
    prueba: null,
    fundador: true,
    verificado: true,
    planHasta: "",
    mpps: "31456",
    cmm: "1714",
    hasVideo: true,
    photoUrl: "images/dr-diover-gonzalez.jpg",
    whatsappNumber: "584148570327",
    instagramHandle: "diover.gonzalez",
    shortBio: "Neurocirujano. Diagnóstico y tratamiento especialista en afecciones del cerebro, columna vertebral y sistema nervioso periférico.",
    longBio: "Neurocirujano. Especialista en diagnóstico y tratamiento de patologías del cerebro, columna vertebral y nervios periféricos (hernias discales, tumores, traumatismos, ACV, aneurismas y dolencias crónicas). Ofrece atención médica integral y abordaje quirúrgico especializado para la salud neurológica.",
    specialties: ["Cerebro", "Columna vertebral", "Nervios periféricos", "Hernias discales", "Tumores", "Traumatismos", "ACV y aneurismas"],
    address: "ISAMICA, Edificio de Consulta Externa, Consultorio 1, Planta Baja",
    mapUrl: "https://maps.app.goo.gl/zUBjhBA6wU7VqdEr8",
    schedule: "Lunes a viernes: 12:00pm–3:00pm",
    heroVideo: { title: "Conoce al Dr. Dióver González", duration: "1:03", youtubeId: "ht-Kqc0dVG0", uploadDate: "2026-10-12" },
    landing: {
      theme: { deep: "#123226", accent: "#8B6F4E", paper: "#F3EEE3", ink: "#2B2B2B", soft: "#2F4A3A" },
      coverUrl: "images/cover-dr-diover-gonzalez.jpg",
      facts: [["Cerebro", "columna y nervios"], ["ISAMICA", "Consultorio 1, PB"], ["Lun–Vie", "12:00 a 3:00 pm"]]
    },
    pastVideos: []
  },
  {
    id: 9,
    title: "Dra.",
    name: "Florimar Pinto",
    initials: "FP",
    specialty: "Psiquiatría",
    city: "",
    zona: "",
    domicilio: false,
    tipo: "medico",
    titulo: "Médico cirujano",
    plan: "pro",
    prueba: null,
    fundador: true,
    verificado: true,
    planHasta: "",
    mpps: "69118",
    cmm: "6329",
    hasVideo: true,
    photoUrl: "images/dra-florimar-pinto.jpg",
    whatsappNumber: "584249587296",
    instagramHandle: "floripsiquiatra",
    shortBio: "Médico psiquiatra egresada de la ULA, con 18 años como especialista. Servicio de salud mental.",
    longBio: "Médico psiquiatra egresada de la Universidad de Los Andes (ULA), con 18 años de experiencia como especialista. Miembro de la Sociedad Venezolana de Psiquiatría (SVP) y de la Asociación Venezolana de Psiquiatría (AVP). Ofrece un servicio de salud mental integral, complementado con formación en ontoescritura, psicología holística y gestalt básico.",
    specialties: ["Salud mental", "Psiquiatría", "Telemedicina", "Ontoescritura", "Psicología holística", "Gestalt"],
    address: "Centro de Especialidades Médicas (Edificio CEMCA), Av. Andrés Eloy Blanco, Maturín, Monagas",
    mapQuery: "PRQJ+V4J, Av. Andres Eloy Blanco, Maturín 6201, Monagas, Venezuela",
    schedule: "Presencial: mar, jue y vie, 9:00am–4:00pm · Telemedicina: lun, miér y sáb",
    heroVideo: { title: "Conoce a la Dra. Florimar Pinto", duration: "1:24", youtubeId: "SVwEoEXR7sc", uploadDate: "2026-10-12" },
    landing: {
      theme: { deep: "#8D5BA3", accent: "#3BA08E", paper: "#F7F2FA", ink: "#2E1F38", soft: "#6E5A7C" },
      coverUrl: "images/cover-dra-florimar-pinto.jpg",
      logoUrl: "images/logo-dra-florimar-pinto.png",
      facts: [["18 años", "como especialista"], ["ULA", "médico psiquiatra"], ["Online", "lun, miér y sáb"]]
    },
    pastVideos: []
  },
  {
    id: 10,
    title: "Dra.",
    name: "Yurkys Yance",
    initials: "YY",
    specialty: "Cirugía Pediátrica",
    city: "",
    zona: "",
    domicilio: false,
    tipo: "medico",
    titulo: "Médico cirujano",
    plan: "basico",
    prueba: { plan: "pro", hasta: "2026-11-20" },
    fundador: false,
    verificado: false, // pasar a true cuando se comprueben MPPS y CMM
    planHasta: "",
    mpps: "",
    cmm: "",
    hasVideo: true,
    photoUrl: "", // pendiente: foto de la sesión del 18-10 (IMG_0993 en Drive, está en HEIC)
    whatsappNumber: "584249338540", // número de sus flyers de Guía Médica Monagas: confirmar que es su WhatsApp
    instagramHandle: "yurkyscirujanapediatra", // cuenta nueva (la personal @yurkysyance no va)
    shortBio: "Cirujana pediatra. Evaluación de recién nacidos y niños, hernias, criptorquidia, circuncisión y ecografía pediátrica.",
    longBio: "Médico cirujano egresada de la Universidad de Oriente (UDO) y cirujana pediatra. Evalúa recién nacidos y niños, y trata hernias inguinales y umbilicales, criptorquidia (testículo no descendido), fimosis y circuncisión, con ecografía pediátrica. Participa en la Sociedad Venezolana de Puericultura y Pediatría (SVPP), filial Monagas, y en jornadas de Emergencias Pediátricas.",
    specialties: ["Cirugía pediátrica", "Recién nacidos", "Hernia inguinal y umbilical", "Criptorquidia", "Fimosis y circuncisión", "Ecografía pediátrica"],
    address: "ISAMICA, Maturín, Monagas",
    mapUrl: "https://maps.app.goo.gl/zUBjhBA6wU7VqdEr8", // mismo enlace de ISAMICA que el Dr. Dióver
    schedule: "Lunes a viernes: 2:00pm–4:00pm",
    heroVideo: { title: "Conoce a la Dra. Yurkys Yance", duration: "", youtubeId: "", uploadDate: "" }, // completar youtubeId, duración y fecha al subir el video
    landing: {
      theme: { deep: "#4A5D6B", accent: "#E8C766", paper: "#F7F3F0", ink: "#2B2422", soft: "#6B7C88" },
      facts: [["Cirugía", "pediátrica"], ["ISAMICA", "Maturín"], ["Lun–Vie", "2:00 a 4:00 pm"]]
    },
    pastVideos: []
  }
];

const DOCLICK = {
  contactWhatsapp: CONFIG.WHATSAPP_DOCLICK,
  contactMessage: "Hola, soy profesional de salud y quiero unirme a Doclick. ¿Cómo empiezo?",
  city: "",
  state: "",
  country: "",
  domain: "https://doclick.net",
  foundingSpotsTotal: 5,
  foundingSpotsTaken: DOCTORS.filter(d => d.fundador).length
};

function buildWaLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function buildMapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

// Fecha de hoy en hora local, como "AAAA-MM-DD" (para comparar con prueba.hasta y FECHA_LANZAMIENTO).
function hoyISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Plan con el que se muestra el perfil: el de la prueba mientras esté vigente; si no, el contratado.
function planEfectivo(p) {
  if (p.prueba && p.prueba.plan && p.prueba.hasta && p.prueba.hasta >= hoyISO()) return p.prueba.plan;
  return p.plan || "basico";
}

// Destacado y Pro tienen página de perfil, foto y WhatsApp. Básico no.
function tienePerfil(p) {
  return planEfectivo(p) !== "basico";
}

// Compatibilidad con páginas viejas (mockup-portada.html): igual que tienePerfil
function hasFeaturedPlan(p) {
  return tienePerfil(p);
}

function nombreVisible(p) {
  return [p.title, p.name].filter(Boolean).join(" ");
}

function getTipo(p) {
  return p.tipo || "medico";
}

// "MPPS 71643 · CMM 3381" (o el colegio que corresponda)
function registroProfesional(p) {
  const num = p.colegiatura || p.cmm;
  return [p.mpps ? `MPPS ${p.mpps}` : "", num ? `${p.colegio || "CMM"} ${num}` : ""].filter(Boolean).join(" · ");
}

// Teléfono como texto para el plan Básico: "584147667008" → "0414-7667008"
function telefonoVisible(p) {
  if (p.telefono) return p.telefono;
  const n = String(p.whatsappNumber || "");
  if (!n) return "";
  const local = n.startsWith("58") ? `0${n.slice(2)}` : n;
  return local.length === 11 ? `${local.slice(0, 4)}-${local.slice(4)}` : local;
}

// Orden del directorio: Pro y Destacado primero, mezclados con una semilla que cambia cada día
// (nadie queda siempre arriba); Básico después, en orden alfabético.
function ordenarPerfiles(lista) {
  const dia = hoyISO();
  let seed = 0;
  for (const c of dia) seed = (seed * 31 + c.charCodeAt(0)) >>> 0;
  const rand = () => { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  // Se ordena por id antes de mezclar para que el resultado del día no dependa del orden en data.js
  const pagos = lista.filter(tienePerfil).sort((a, b) => a.id - b.id);
  for (let i = pagos.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [pagos[i], pagos[j]] = [pagos[j], pagos[i]]; }
  const basicos = lista.filter(p => !tienePerfil(p)).sort((a, b) => a.name.localeCompare(b.name, "es"));
  return [...pagos, ...basicos];
}

function getDoctorById(id) {
  return DOCTORS.find(d => d.id === parseInt(id));
}

// Planes (se muestran en index.html y registro.html). incluye: [texto, sí/no]
const PLANES = [
  {
    id: "basico", nombre: "Básico", precio: "Gratis", periodo: "",
    desc: "Apareces en la guía con tus datos y tu colegiatura.",
    incluye: [
      ["Nombre, título, especialidad y colegiatura", true],
      ["Teléfono visible", true],
      ["Sello de Verificado", true],
      ["Foto de perfil", false],
      ["Dirección, Google Maps y horario", false],
      ["Botón de WhatsApp", false],
      ["Página de perfil propia", false]
    ]
  },
  {
    id: "destacado", nombre: "Destacado", precio: "$10", periodo: "/mes",
    desc: "Tu perfil con foto, ubicación y WhatsApp directo.",
    incluye: [
      ["Todo lo del Básico", true],
      ["Foto de perfil", true],
      ["Dirección, Google Maps y horario", true],
      ["Botón de WhatsApp directo", true],
      ["Página de perfil propia", true],
      ["Primero en los resultados", true],
      ["Video en tu perfil", false]
    ]
  },
  {
    id: "pro", nombre: "Pro", precio: "$25", periodo: "/mes", recomendado: true,
    desc: "Todo lo del Destacado, más video y herramientas para convertir visitas en pacientes.",
    incluye: [
      ["Todo lo del Destacado", true],
      ["Video mensual profesional (lo grabamos nosotros)", true],
      ["Perfil completo con video", true],
      ["Landing personalizada para Instagram", true],
      ["WhatsApp automatizado", true],
      ["Estadísticas de visitas", true]
    ]
  }
];

function planCardsHtml(ctaFor) {
  const check = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;
  return PLANES.map(pl => `
    <article class="price-card${pl.recomendado ? " featured" : ""}">
      ${pl.recomendado ? `<div class="price-badge">Recomendado</div>` : ""}
      <h3>${pl.nombre}</h3>
      <div class="price-amount">${pl.precio}${pl.periodo ? ` <span>${pl.periodo}</span>` : ""}</div>
      ${pl.id !== "basico" ? `<p class="price-launch">Pruébalo ${CONFIG.DIAS_PRUEBA} días gratis</p>` : `<p class="price-launch">Para siempre</p>`}
      <p class="price-desc">${pl.desc}</p>
      <ul class="price-features">${pl.incluye.map(([t, si]) => si
        ? `<li>${check}${t}</li>`
        : `<li class="is-excluded"><span class="dash" aria-hidden="true">–</span><span><span class="sr-only">No incluye: </span>${t}</span></li>`).join("")}</ul>
      ${ctaFor ? ctaFor(pl) : ""}
    </article>`).join("");
}
