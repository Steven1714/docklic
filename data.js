// ============================================
// Doclick — Datos centralizados (v3)
// Sin localización geográfica hardcodeada
// ============================================

// plan: "fundador" | "pro" | "perfil"
// planHasta: fecha de vencimiento del plan (AAAA-MM-DD). Solo control interno, no se muestra.
// landing: (opcional) personalización de link.html — theme {deep, accent, paper, ink, soft}, coverUrl (foto vertical 4:5), logoUrl, facts [[dato, detalle], ...] (máx. 3, solo datos confirmados).
// mpps / cmm: registro MPPS y Colegio de Médicos de Monagas. Vacío = no se muestra.
const DOCTORS = [
  {
    id: 6,
    title: "Dr.",
    name: "Domingo Guerra",
    initials: "DG",
    specialty: "Neurocirugía",
    city: "",
    plan: "fundador",
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
    plan: "fundador",
    planHasta: "",
    mpps: "",
    cmm: "",
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
    heroVideo: { title: "Conoce al Dr. Williams Vegas", duration: "0:50", youtubeId: "AKmDh6kZXDk" },
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
    plan: "fundador",
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
    heroVideo: { title: "Conoce al Dr. Dióver González", duration: "1:38", youtubeId: "N9Sx3-YjhIY" },
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
    plan: "fundador",
    planHasta: "",
    mpps: "69118",
    cmm: "6329",
    hasVideo: false,
    photoUrl: "images/dra-florimar-pinto.jpg",
    whatsappNumber: "584249587296",
    instagramHandle: "floripsiquiatra",
    shortBio: "Médico psiquiatra egresada de la ULA, con 18 años como especialista. Servicio de salud mental.",
    longBio: "Médico psiquiatra egresada de la Universidad de Los Andes (ULA), con 18 años de experiencia como especialista. Miembro de la Sociedad Venezolana de Psiquiatría (SVP) y de la Asociación Venezolana de Psiquiatría (AVP). Ofrece un servicio de salud mental integral, complementado con formación en ontoescritura, psicología holística y gestalt básico.",
    specialties: ["Salud mental", "Psiquiatría", "Telemedicina", "Ontoescritura", "Psicología holística", "Gestalt"],
    address: "Centro de Especialidades Médicas (Edificio CEMCA), Av. Andrés Eloy Blanco, Maturín, Monagas",
    mapQuery: "PRQJ+V4J, Av. Andres Eloy Blanco, Maturín 6201, Monagas, Venezuela",
    schedule: "Presencial: mar, jue y vie, 9:00am–4:00pm · Telemedicina: lun, miér y sáb",
    heroVideo: { title: "Conoce a la Dra. Florimar Pinto", duration: "", youtubeId: null },
    landing: {
      theme: { deep: "#8D5BA3", accent: "#3BA08E", paper: "#F7F2FA", ink: "#2E1F38", soft: "#6E5A7C" },
      coverUrl: "images/cover-dra-florimar-pinto.jpg",
      logoUrl: "images/logo-dra-florimar-pinto.png",
      facts: [["18 años", "como especialista"], ["ULA", "médico psiquiatra"], ["Online", "lun, miér y sáb"]]
    },
    pastVideos: []
  }
];

const DOCLICK = {
  contactWhatsapp: "584267619312",
  contactMessage: "Hola, soy médico y quiero unirme a Doclick. ¿Cómo empiezo?",
  city: "",
  state: "",
  country: "",
  domain: "https://doclick.net",
  foundingSpotsTotal: 5,
  foundingSpotsTaken: DOCTORS.filter(d => d.plan === "fundador").length
};

function buildWaLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function buildMapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function hasFeaturedPlan(d) {
  return d.plan === "fundador" || d.plan === "pro";
}

function getDoctorById(id) {
  return DOCTORS.find(d => d.id === parseInt(id));
}
