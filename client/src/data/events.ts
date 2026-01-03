/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Real event data from Martí 13 WordPress export
 */

export interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  menuItems: string[];
}

export interface HallOfFameItem {
  id: string;
  name: string;
  date: string;
  eventTitle: string;
  image: string;
  chef?: string;
}

// Real events from marti13.es WordPress export
export const events: Event[] = [
  {
    id: "1",
    title: "Vuelve al Potro",
    date: "2025-10-24",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.27.jpeg",
    description: "ÓSCAR: Tortilla de toda la vida. TANG: Calabaza asada, salchicha de pavo, cebolla asada, piñones, miel de limón, huevos cocinado",
    menuItems: ["Tortilla de toda la vida", "Calabaza asada con salchicha de pavo"]
  },
  {
    id: "2",
    title: "Tortilla de Óscar",
    date: "2024-10-17",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-2.jpeg",
    description: "Hamburgers Estilo Americana, Pollo rebozada con cruijentes, Hamburguesas de alubias de la fabada asturiana estilo Chez Justin",
    menuItems: ["Hamburgers Estilo Americana", "Pollo rebozada", "Hamburguesas de alubias"]
  },
  {
    id: "3",
    title: "Antes de Vacaciones | Cara esta mal",
    date: "2024-12-20",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-21.56.53-1.jpeg",
    description: "BIG D - Una despedida épica antes de las vacaciones de Navidad",
    menuItems: ["Especial de despedida"]
  },
  {
    id: "4",
    title: "Lo final del año!",
    date: "2024-12-19",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-2.jpeg",
    description: "Bacalao con Pesto Alioli. NERO: Bocadillo con chuletón de pavo, romero, miel, mostaza, piñones, bayas de goji, arugula",
    menuItems: ["Bacalao con Pesto Alioli", "NERO: Bocadillo con chuletón de pavo"]
  },
  {
    id: "5",
    title: "Feliz Navidad antes de Amsterdam",
    date: "2024-12-12",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-06-at-06.52.28.jpeg",
    description: "Albondigas de carne con salsa italiano, Albondigas vegano, Caesar salad",
    menuItems: ["Albondigas de carne con salsa italiano", "Albondigas vegano", "Caesar salad"]
  },
  {
    id: "6",
    title: "Día De Constitution",
    date: "2024-12-06",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
    description: "ELEGANTE: Pollo cert - Celebrando el día de la Constitución con estilo",
    menuItems: ["Pollo elegante"]
  },
  {
    id: "7",
    title: "Marko Visitamos",
    date: "2024-12-05",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-22-at-06.17.22.jpeg",
    description: "Hamburguesas de Potro, Hamburguesas de Vaca, French Fries",
    menuItems: ["Hamburguesas de Potro", "Hamburguesas de Vaca", "French Fries"]
  },
  {
    id: "8",
    title: "Los chavalas regresan a Thailandia con mucho éxito",
    date: "2024-11-29",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-14.49.54-1.jpeg",
    description: "Una celebración del regreso de los chavalas de su viaje a Tailandia",
    menuItems: ["Especial tailandés"]
  },
  {
    id: "9",
    title: "Primera Tortilla de Tyler",
    date: "2024-11-22",
    image: "http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-24.jpg",
    description: "Con asistencia de Carla y Momma. MOSHE: Filete de salmón con mantequilla y azúcar moreno, Gambas en salsa agridulce estilo chino",
    menuItems: ["Tortilla de Tyler", "MOSHE: Filete de salmón", "Gambas agridulce"]
  },
  {
    id: "10",
    title: "Mezclar la carne de caballo con la de vaca",
    date: "2024-11-21",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-14-at-15.42.46-1.jpeg",
    description: "Ensalada de Tuna, Crab Salad, Gambas de Denia",
    menuItems: ["Ensalada de Tuna", "Crab Salad", "Gambas de Denia"]
  },
  {
    id: "11",
    title: "Óscar será un bombero y MAC regalita",
    date: "2024-11-14",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.14.jpeg",
    description: "Hamburgesas de Conejo, ÓSCAR: Tortilla de toda la vida",
    menuItems: ["Hamburgesas de Conejo", "Tortilla de toda la vida"]
  },
  {
    id: "12",
    title: "Pocos gente, muchos amore",
    date: "2024-11-08",
    image: "http://marti13.es/wp-content/uploads/2024/11/PXL_20241108_094344432-scaled.jpg",
    description: "Revuelto de queso de cabra, sobrasada y cebolla carmelizada, Chivito Estilo California",
    menuItems: ["Revuelto de queso de cabra", "Chivito Estilo California"]
  },
  {
    id: "13",
    title: "Tortilla de Óscar y Conejo de Justino",
    date: "2024-11-07",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-12.50.05.jpeg",
    description: "Pero nadie comían. Hamburgesas de Pollo Curry, Pollo Rebozado con Oregano",
    menuItems: ["Hamburgesas de Pollo Curry", "Pollo Rebozado con Oregano"]
  },
  {
    id: "14",
    title: "Después del diluvio :(",
    date: "2024-11-01",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-26-at-20.24.43.jpeg",
    description: "Reunión después de las inundaciones de Valencia - solidaridad y comunidad",
    menuItems: []
  },
  {
    id: "15",
    title: "Halloweed @ Martí 13",
    date: "2024-10-31",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.27.jpeg",
    description: "Hamburgesas de Potro - Celebración de Halloween",
    menuItems: ["Hamburgesas de Potro"]
  },
  {
    id: "16",
    title: "Ilia Topuria vs Max Halloway",
    date: "2024-10-27",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-26-at-20.24.43.jpeg",
    description: "Marisca fresca del día, Super Deviled Egg Salad",
    menuItems: ["Marisca fresca del día", "Super Deviled Egg Salad"]
  },
  {
    id: "17",
    title: "Mariscos Mientras Fede y Dick en Alemania",
    date: "2024-10-25",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-15.58.30.jpeg",
    description: "Salchichas y Pimientos estilo italiano, Club Sandwhich de Richard Cowan desde Restaurante Aquarium",
    menuItems: ["Salchichas y Pimientos italiano", "Club Sandwich de Richard Cowan"]
  },
  {
    id: "18",
    title: "Almorzar Regresamos a Martí",
    date: "2024-10-18",
    image: "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075308097-scaled.jpg",
    description: "Ali e pebre de angulia - Un clásico valenciano",
    menuItems: ["Ali e pebre de angulia"]
  },
  {
    id: "19",
    title: "Almorzar Restaurante Casa Baina!",
    date: "2024-10-11",
    image: "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075308097-scaled.jpg",
    description: "Pollo y Salmón con costra de patatas fritas, Salchichas Blanco y Negro (y Rojo)",
    menuItems: ["Pollo con costra de patatas", "Salmón con patatas fritas", "Salchichas variadas"]
  },
  {
    id: "20",
    title: "Finalmente regresa al frío",
    date: "2024-10-10",
    image: "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.57-1.jpeg",
    description: "Pollo teriyaki y verduras estilo asia, Salmón glaseado con aminos de coco",
    menuItems: ["Pollo teriyaki", "Salmón glaseado"]
  },
  {
    id: "21",
    title: "Almorzar Para Seis",
    date: "2024-09-27",
    image: "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-20.42.00.jpeg",
    description: "POLLO CAMPERO, TORTILLA DE SOBRASADA IBÉRICA, QUESO BRIE, Y MAHONESA DE MIEL",
    menuItems: ["Pollo Campero", "Tortilla de Sobrasada Ibérica", "Ensalada de atún TOGOS"]
  },
  {
    id: "22",
    title: "Finalmente Verano Se Acabo",
    date: "2024-09-20",
    image: "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg",
    description: "MOSHE: Filete de salmón con mantequilla y azúcar moreno, CA LA MAR: Calamar a la plancha",
    menuItems: ["Filete de salmón MOSHE", "Calamar a la plancha CA LA MAR"]
  },
  {
    id: "23",
    title: "Tyler Olvidó El Coleslaw",
    date: "2024-09-19",
    image: "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.57-1.jpeg",
    description: "Quesadilla vegana con carne picada ahumada, DÍA DE PARTIDO LOS TACOS DE CARNE PICADA",
    menuItems: ["Quesadilla vegana", "Tacos de carne picada"]
  },
  {
    id: "24",
    title: "Almorzar Antes de Viaje",
    date: "2024-07-12",
    image: "http://marti13.es/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-14.27.00.jpeg",
    description: "Hamburguesas de Potro, Hamburguesas de Vaca",
    menuItems: ["Hamburguesas de Potro", "Hamburguesas de Vaca"]
  }
];

// Hall of Fame - Signature dishes and memorable moments
export const hallOfFame: HallOfFameItem[] = [
  {
    id: "hof-1",
    name: "Tortilla de toda la vida",
    date: "2024-11-14",
    eventTitle: "Óscar será un bombero",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.14.jpeg",
    chef: "Óscar"
  },
  {
    id: "hof-2",
    name: "Bacalao con Pesto Alioli",
    date: "2024-12-19",
    eventTitle: "Lo final del año!",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-2.jpeg"
  },
  {
    id: "hof-3",
    name: "NERO: Bocadillo con chuletón de pavo",
    date: "2024-12-19",
    eventTitle: "Lo final del año!",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-2.jpeg",
    chef: "Nero"
  },
  {
    id: "hof-4",
    name: "Hamburguesas de Potro",
    date: "2024-12-05",
    eventTitle: "Marko Visitamos",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-22-at-06.17.22.jpeg"
  },
  {
    id: "hof-5",
    name: "MOSHE: Filete de salmón con mantequilla",
    date: "2024-11-22",
    eventTitle: "Primera Tortilla de Tyler",
    image: "http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-24.jpg",
    chef: "Moshe"
  },
  {
    id: "hof-6",
    name: "Hamburgesas de Conejo",
    date: "2024-11-14",
    eventTitle: "Óscar será un bombero",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.14.jpeg"
  },
  {
    id: "hof-7",
    name: "Revuelto de queso de cabra y sobrasada",
    date: "2024-11-08",
    eventTitle: "Pocos gente, muchos amore",
    image: "http://marti13.es/wp-content/uploads/2024/11/PXL_20241108_094344432-scaled.jpg"
  },
  {
    id: "hof-8",
    name: "Ali e pebre de angulia",
    date: "2024-10-18",
    eventTitle: "Almorzar Regresamos a Martí",
    image: "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075308097-scaled.jpg"
  },
  {
    id: "hof-9",
    name: "Pollo Campero con Tortilla de Sobrasada",
    date: "2024-09-27",
    eventTitle: "Almorzar Para Seis",
    image: "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-20.42.00.jpeg"
  },
  {
    id: "hof-10",
    name: "CA LA MAR: Calamar a la plancha",
    date: "2024-09-20",
    eventTitle: "Finalmente Verano Se Acabo",
    image: "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg"
  },
  {
    id: "hof-11",
    name: "Albondigas de carne con salsa italiano",
    date: "2024-12-12",
    eventTitle: "Feliz Navidad antes de Amsterdam",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-06-at-06.52.28.jpeg"
  },
  {
    id: "hof-12",
    name: "Gambas de Denia",
    date: "2024-11-21",
    eventTitle: "Mezclar la carne de caballo",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-14-at-15.42.46-1.jpeg"
  }
];

// Format date for display
export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleDateString('es-ES', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// Get upcoming events (future dates)
export function getUpcomingEvents(): Event[] {
  const today = new Date();
  return events.filter(e => new Date(e.date) >= today).slice(0, 3);
}

// Get past events
export function getPastEvents(): Event[] {
  const today = new Date();
  return events.filter(e => new Date(e.date) < today);
}
