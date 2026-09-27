// ============================================
// Doclick — Datos centralizados (v3)
// Sin localización geográfica hardcodeada
// ============================================

const DOCTORS = [
  {
    id: 3,
    title: "Dr.",
    name: "Luis Martínez",
    initials: "LM",
    specialty: "Traumatología",
    city: "",
    founding: false,
    hasVideo: true,
    whatsappNumber: "58XXXXXXXXXX",
    instagramHandle: "dr.luismartinez",
    shortBio: "Traumatólogo y ortopedista. Fracturas, lesiones deportivas, cirugía artroscópica.",
    longBio: "El Dr. Luis Martínez es especialista en traumatología y ortopedia. Maneja lesiones deportivas, fracturas, artroscopia de rodilla y hombro, y rehabilitación postquirúrgica.",
    specialties: ["Traumatología", "Ortopedia", "Artroscopia", "Lesiones deportivas"],
    address: "Clínica El Ávila, Av. Principal",
    schedule: "Martes a Sábado: 9:00 am – 6:00 pm",
    heroVideo: { title: "Caso: reconstrucción de ligamento cruzado en atleta", duration: "5:48", youtubeId: null },
    pastVideos: []
  },
  {
    id: 4,
    title: "Dra.",
    name: "Carmen Silva",
    initials: "CS",
    specialty: "Dermatología",
    city: "",
    founding: false,
    hasVideo: true,
    whatsappNumber: "58XXXXXXXXXX",
    instagramHandle: "dra.carmensilva",
    shortBio: "Dermatóloga clínica y estética. Acné, melasma, cáncer de piel, procedimientos estéticos.",
    longBio: "La Dra. Carmen Silva ofrece diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas. Realiza procedimientos estéticos mínimamente invasivos con enfoque en resultados naturales.",
    specialties: ["Dermatología clínica", "Dermatología estética", "Acné", "Cáncer de piel"],
    address: "Centro Dermatológico, Calle Comercio",
    schedule: "Lunes a Viernes: 2:00 pm – 7:00 pm",
    heroVideo: { title: "Caso: melanoma detectado en revisión rutinaria", duration: "4:15", youtubeId: null },
    pastVideos: []
  },
  {
    id: 5,
    title: "Dr.",
    name: "José Ramírez",
    initials: "JR",
    specialty: "Medicina General",
    city: "",
    founding: false,
    hasVideo: false,
    whatsappNumber: "58XXXXXXXXXX",
    instagramHandle: "dr.joseramirez",
    shortBio: "Médico general integral. Atención primaria, chequeos preventivos, manejo de enfermedades crónicas.",
    longBio: "El Dr. José Ramírez es médico general con enfoque en medicina preventiva y manejo integral del paciente. Ideal como primer punto de contacto para cualquier síntoma o chequeo anual.",
    specialties: ["Medicina general", "Chequeos preventivos", "Hipertensión", "Diabetes"],
    address: "Consultorio Médico La Paz, Av. Bolívar",
    schedule: "Lunes a Sábado: 8:00 am – 2:00 pm",
    heroVideo: null,
    pastVideos: []
  },
  {
    id: 6,
    title: "Dr.",
    name: "Domingo Guerra",
    initials: "DG",
    specialty: "Neurocirugía",
    city: "",
    founding: true,
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
    founding: true,
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
    heroVideo: { title: "Conoce al Dr. Williams Vegas", duration: "1:28", youtubeId: "AKmDh6kZXDk" },
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
  foundingSpotsTaken: DOCTORS.filter(d => d.founding).length
};

function buildWaLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function buildMapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function getDoctorById(id) {
  return DOCTORS.find(d => d.id === parseInt(id));
}

// ============================================
// ARCHIVO DE REFERENCIA — NO SE USA EN EL SITIO
// Perfiles de ejemplo/ficticios sacados del directorio real el 2026-09-11
// porque inflaban el contador de "cupos fundadores" (contaban como
// fundadores reales sin serlo). Se guardan aquí solo como plantilla de
// referencia para el formato de un perfil completo. Esta constante no
// se importa ni se lee desde index.html ni perfil.html — no afecta el
// sitio en producción.
// ============================================
const EXAMPLE_PROFILES_ARCHIVE = [
  {
    id: 0,
    title: "Dra.",
    name: "María González",
    initials: "MG",
    specialty: "Ginecología",
    city: "",
    founding: true,
    hasVideo: true,
    whatsappNumber: "58XXXXXXXXXX",
    instagramHandle: "dr.mariagonzalez",
    shortBio: "Ginecóloga con 12 años de experiencia. Especialista en salud reproductiva y embarazo de alto riesgo.",
    longBio: "La Dra. María González es egresada de la Universidad de Oriente. Cuenta con 12 años de ejercicio profesional. Su enfoque está en brindar una atención cercana, informada y respetuosa. Atiende consulta ginecológica general, control prenatal, planificación familiar y menopausia.",
    specialties: ["Ginecología general", "Obstetricia", "Planificación familiar", "Menopausia"],
    address: "Centro Médico El Bosque, Av. Principal",
    schedule: "Lunes a Viernes: 8:00 am – 4:00 pm. Sábados: 8:00 am – 12:00 m.",
    heroVideo: { title: "Caso: embarazo ectópico detectado a tiempo", duration: "4:32", youtubeId: null },
    pastVideos: [
      { title: "¿Cuándo debo hacerme mi primera citología?", duration: "3:15", youtubeId: null },
      { title: "Síntomas de la menopausia que no debes ignorar", duration: "5:01", youtubeId: null }
    ]
  },
  {
    id: 1,
    title: "Dr.",
    name: "Carlos Rodríguez",
    initials: "CR",
    specialty: "Cardiología",
    city: "",
    founding: true,
    hasVideo: true,
    whatsappNumber: "58XXXXXXXXXX",
    instagramHandle: "dr.carlosrodriguez",
    shortBio: "Cardiólogo intervencionista. Prevención, diagnóstico y tratamiento de enfermedades cardiovasculares.",
    longBio: "El Dr. Carlos Rodríguez es cardiólogo egresado de la UCVM. Se especializa en prevención primaria de infarto, manejo de hipertensión arterial y estudios de imagen cardíaca.",
    specialties: ["Cardiología clínica", "Hipertensión", "Arritmias", "Prevención cardiovascular"],
    address: "Centro Cardiovascular, Calle 5 de Julio",
    schedule: "Lunes a Miércoles y Viernes: 9:00 am – 5:00 pm",
    heroVideo: { title: "Caso: infarto silencioso en paciente de 45 años", duration: "6:12", youtubeId: null },
    pastVideos: [{ title: "5 señales de que tu corazón necesita atención", duration: "4:45", youtubeId: null }]
  },
  {
    id: 2,
    title: "Dra.",
    name: "Ana Pérez",
    initials: "AP",
    specialty: "Pediatría",
    city: "",
    founding: true,
    hasVideo: false,
    whatsappNumber: "58XXXXXXXXXX",
    instagramHandle: "dra.anaperez",
    shortBio: "Pediatra dedicada al crecimiento y desarrollo infantil. Consulta general y control de vacunas.",
    longBio: "La Dra. Ana Pérez atiende desde el recién nacido hasta el adolescente. Su práctica se centra en el crecimiento saludable, la nutrición infantil y el acompañamiento a padres primerizos.",
    specialties: ["Pediatría general", "Control de crecimiento", "Vacunación", "Lactancia"],
    address: "Consultorio Pediátrico La Arboleda",
    schedule: "Lunes a Viernes: 8:00 am – 3:00 pm",
    heroVideo: null,
    pastVideos: []
  }
];
