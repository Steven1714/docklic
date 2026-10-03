// ============================================
// Doclick — Datos centralizados (v3)
// Sin localización geográfica hardcodeada
// ============================================

// plan: "fundador" | "pro" | "perfil"
// planHasta: fecha de vencimiento del plan (AAAA-MM-DD). Solo control interno, no se muestra.
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
    whatsappNumber: "58XXXXXXXXXX",
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
    whatsappNumber: "584148570327",
    instagramHandle: "diover.gonzalez",
    shortBio: "Neurocirujano en Maturín.",
    longBio: "",
    specialties: ["Neurocirugía"],
    address: "Isamica, Maturín",
    schedule: "",
    heroVideo: { title: "Conoce al Dr. Dióver González", duration: "1:38", youtubeId: "N9Sx3-YjhIY" },
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
