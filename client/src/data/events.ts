/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Real event data from Martí 13 WordPress export
 * Gallery images extracted from marti13.es
 */

export interface Event {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  menuItems: string[];
  gallery?: string[];
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
    menuItems: ["Tortilla de toda la vida", "Calabaza asada con salchicha de pavo"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-13-at-19.07.20.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-13-at-19.07.21.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-13-at-19.07.20-1.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-2.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.28.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.16.jpeg",
          "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.27.jpeg"
    ]
  },
  {
    id: "2",
    title: "Tortilla de Óscar",
    date: "2024-10-17",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-2.jpeg",
    description: "Hamburgers Estilo Americana, Pollo rebozada con cruijentes, Hamburguesas de alubias de la fabada asturiana estilo Chez Justin",
    menuItems: ["Hamburgers Estilo Americana", "Pollo rebozada", "Hamburguesas de alubias"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "3",
    title: "Antes de Vacaciones | Cara esta mal",
    date: "2024-12-20",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-21.56.53-1.jpeg",
    description: "BIG D - Una despedida épica antes de las vacaciones de Navidad",
    menuItems: ["Especial de despedida"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.01.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.00.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57.jpeg"
    ]
  },
  {
    id: "4",
    title: "Lo final del año!",
    date: "2024-12-19",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-2.jpeg",
    description: "Bacalao con Pesto Alioli. NERO: Bocadillo con chuletón de pavo, romero, miel, mostaza, piñones, bayas de goji, arugula",
    menuItems: ["Bacalao con Pesto Alioli", "NERO: Bocadillo con chulet\u00f3n de pavo"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.01.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.00.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57.jpeg"
    ]
  },
  {
    id: "5",
    title: "Feliz Navidad antes de Amsterdam",
    date: "2024-12-12",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-06-at-06.52.28.jpeg",
    description: "Albondigas de carne con salsa italiano, Albondigas vegano, Caesar salad",
    menuItems: ["Albondigas de carne con salsa italiano", "Albondigas vegano", "Caesar salad"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.01.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.00.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57.jpeg"
    ]
  },
  {
    id: "6",
    title: "Día De Constitution",
    date: "2024-12-06",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
    description: "ELEGANTE: Pollo cert - Celebrando el día de la Constitución con estilo",
    menuItems: ["Pollo elegante"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.01.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.00.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57.jpeg"
    ]
  },
  {
    id: "7",
    title: "Marko Visitamos",
    date: "2024-12-05",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-22-at-06.17.22.jpeg",
    description: "Hamburguesas de Potro, Hamburguesas de Vaca, French Fries",
    menuItems: ["Hamburguesas de Potro", "Hamburguesas de Vaca", "French Fries"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.03.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.02.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.01.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.07.00.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.59.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.57.jpeg"
    ]
  },
  {
    id: "8",
    title: "Los chavalas regresan a Thailandia con mucho éxito",
    date: "2024-11-29",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-14.49.54-1.jpeg",
    description: "Una celebración del regreso de los chavalas de su viaje a Tailandia",
    menuItems: ["Especial tailand\u00e9s"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "9",
    title: "Primera Tortilla de Tyler",
    date: "2024-11-22",
    image: "http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-24.jpg",
    description: "Con asistencia de Carla y Momma. MOSHE: Filete de salmón con mantequilla y azúcar moreno, Gambas en salsa agridulce estilo chino",
    menuItems: ["Tortilla de Tyler", "MOSHE: Filete de salm\u00f3n", "Gambas agridulce"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "10",
    title: "Mezclar la carne de caballo con la de vaca",
    date: "2024-11-21",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-14-at-15.42.46-1.jpeg",
    description: "Ensalada de Tuna, Crab Salad, Gambas de Denia",
    menuItems: ["Ensalada de Tuna", "Crab Salad", "Gambas de Denia"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "11",
    title: "Óscar será un bombero y MAC regalita",
    date: "2024-11-14",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.14.jpeg",
    description: "Hamburgesas de Conejo, ÓSCAR: Tortilla de toda la vida",
    menuItems: ["Hamburgesas de Conejo", "Tortilla de toda la vida"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "12",
    title: "Pocos gente, muchos amore",
    date: "2024-11-08",
    image: "http://marti13.es/wp-content/uploads/2024/11/PXL_20241108_094344432-scaled.jpg",
    description: "Revuelto de queso de cabra, sobrasada y cebolla carmelizada, Chivito Estilo California",
    menuItems: ["Revuelto de queso de cabra", "Chivito Estilo California"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "13",
    title: "Tortilla de Óscar y Conejo de Justino",
    date: "2024-11-07",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-12.50.05.jpeg",
    description: "Pero nadie comían. Hamburgesas de Pollo Curry, Pollo Rebozado con Oregano",
    menuItems: ["Hamburgesas de Pollo Curry", "Pollo Rebozado con Oregano"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "14",
    title: "Después del diluvio :(",
    date: "2024-11-01",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-26-at-20.24.43.jpeg",
    description: "Reunión después de las inundaciones de Valencia - solidaridad y comunidad",
    menuItems: [],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-3.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-2.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-9.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-8.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-7.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-6.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-5.jpeg",
          "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-4.jpeg"
    ]
  },
  {
    id: "15",
    title: "Halloweed @ Martí 13",
    date: "2024-10-31",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.27.jpeg",
    description: "Hamburgesas de Potro - Celebración de Halloween",
    menuItems: ["Hamburgesas de Potro"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "16",
    title: "Ilia Topuria vs Max Halloway",
    date: "2024-10-27",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-26-at-20.24.43.jpeg",
    description: "Marisca fresca del día, Super Deviled Egg Salad",
    menuItems: ["Marisca fresca del d\u00eda", "Super Deviled Egg Salad"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "17",
    title: "Mariscos Mientras Fede y Dick en Alemania",
    date: "2024-10-25",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-15.58.30.jpeg",
    description: "Salchichas y Pimientos estilo italiano, Club Sandwhich de Richard Cowan desde Restaurante Aquarium",
    menuItems: ["Salchichas y Pimientos italiano", "Club Sandwich de Richard Cowan"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "18",
    title: "Almorzar Regresamos a Martí",
    date: "2024-10-18",
    image: "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075308097-scaled.jpg",
    description: "Ali e pebre de angulia - Un clásico valenciano",
    menuItems: ["Ali e pebre de angulia"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "19",
    title: "Almorzar Restaurante Casa Baina!",
    date: "2024-10-11",
    image: "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075308097-scaled.jpg",
    description: "Pollo y Salmón con costra de patatas fritas, Salchichas Blanco y Negro (y Rojo)",
    menuItems: ["Pollo con costra de patatas", "Salm\u00f3n con patatas fritas", "Salchichas variadas"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "20",
    title: "Finalmente regresa al frío",
    date: "2024-10-10",
    image: "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.57-1.jpeg",
    description: "Pollo teriyaki y verduras estilo asia, Salmón glaseado con aminos de coco",
    menuItems: ["Pollo teriyaki", "Salm\u00f3n glaseado"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/10/IMG_4709-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.34.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30-1.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.30.jpeg",
          "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.29-1.jpeg"
    ]
  },
  {
    id: "21",
    title: "Almorzar Para Seis",
    date: "2024-09-27",
    image: "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-20.42.00.jpeg",
    description: "POLLO CAMPERO, TORTILLA DE SOBRASADA IBÉRICA, QUESO BRIE, Y MAHONESA DE MIEL",
    menuItems: ["Pollo Campero", "Tortilla de Sobrasada Ib\u00e9rica", "Ensalada de at\u00fan TOGOS"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-19.08.56.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0002.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0004.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/PXL_20240906_092314834-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0010.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/PXL_20240913_083729936-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-20.55.41.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.20.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.40.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-09.55.43.jpeg"
    ]
  },
  {
    id: "22",
    title: "Finalmente Verano Se Acabo",
    date: "2024-09-20",
    image: "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg",
    description: "MOSHE: Filete de salmón con mantequilla y azúcar moreno, CA LA MAR: Calamar a la plancha",
    menuItems: ["Filete de salm\u00f3n MOSHE", "Calamar a la plancha CA LA MAR"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-19.08.56.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0002.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0004.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/PXL_20240906_092314834-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0010.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/PXL_20240913_083729936-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-20.55.41.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.20.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.40.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-09.55.43.jpeg"
    ]
  },
  {
    id: "23",
    title: "Tyler Olvidó El Coleslaw",
    date: "2024-09-19",
    image: "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.57-1.jpeg",
    description: "Quesadilla vegana con carne picada ahumada, DÍA DE PARTIDO LOS TACOS DE CARNE PICADA",
    menuItems: ["Quesadilla vegana", "Tacos de carne picada"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-19.08.56.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0002.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0004.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/PXL_20240906_092314834-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0010.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/PXL_20240913_083729936-scaled.jpg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-20.55.41.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.20.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.33.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.40.jpeg",
          "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-09.55.43.jpeg"
    ]
  },
  {
    id: "24",
    title: "Almorzar Antes de Viaje",
    date: "2024-07-12",
    image: "http://marti13.es/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-14.27.00.jpeg",
    description: "Hamburguesas de Potro, Hamburguesas de Vaca",
    menuItems: ["Hamburguesas de Potro", "Hamburguesas de Vaca"],
    gallery: [
          "http://marti13.es/wp-content/uploads/2024/07/IMG-20240701-WA0029.jpg",
          "http://marti13.es/wp-content/uploads/2024/07/IMG-20240701-WA0031.jpg",
          "http://marti13.es/wp-content/uploads/2024/07/IMG-20240701-WA0032.jpg",
          "http://marti13.es/wp-content/uploads/2024/07/IMG-20240705-WA0041.jpg",
          "http://marti13.es/wp-content/uploads/2024/07/IMG-20240705-WA0042.jpg",
          "http://marti13.es/wp-content/uploads/2024/07/IMG-20240705-WA0043.jpg",
          "http://marti13.es/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-30-at-08.06.35.jpeg"
    ]
  }
];

// Hall of Fame dishes - signature dishes that made history
export const hallOfFame: HallOfFameItem[] = [
  {
    id: "hof-1",
    name: "Tortilla Española Perfecta",
    date: "2024-10-17",
    eventTitle: "Tortilla de Óscar",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.35-1.jpeg",
    chef: "Óscar"
  },
  {
    id: "hof-2",
    name: "Hamburguesas de Potro",
    date: "2024-12-05",
    eventTitle: "Marko Visitamos",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-14.49.54-1.jpeg",
    chef: "El Gremio"
  },
  {
    id: "hof-3",
    name: "Bacalao con Pesto Alioli",
    date: "2024-12-19",
    eventTitle: "Lo final del año!",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-21.56.53-1.jpeg",
    chef: "Tang"
  },
  {
    id: "hof-4",
    name: "Filete de Salmón con Mantequilla",
    date: "2024-11-22",
    eventTitle: "Primera Tortilla de Tyler",
    image: "http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-24.jpg",
    chef: "Moshe"
  },
  {
    id: "hof-5",
    name: "Albondigas con Salsa Italiano",
    date: "2024-12-12",
    eventTitle: "Feliz Navidad antes de Amsterdam",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-07-at-06.06.58.jpeg",
    chef: "El Gremio"
  },
  {
    id: "hof-6",
    name: "Gambas en Salsa Agridulce",
    date: "2024-11-22",
    eventTitle: "Primera Tortilla de Tyler",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-15.58.34-1.jpeg",
    chef: "Moshe"
  },
  {
    id: "hof-7",
    name: "Pollo Rebozada con Cruijentes",
    date: "2024-10-17",
    eventTitle: "Tortilla de Óscar",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.32.jpeg",
    chef: "Justin"
  },
  {
    id: "hof-8",
    name: "Conejo Estilo Tradicional",
    date: "2024-11-07",
    eventTitle: "Tortilla de Óscar y Conejo de Justino",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-08-at-14.44.23.jpeg",
    chef: "Justino"
  },
  {
    id: "hof-9",
    name: "Hamburguesas de Alubias Fabada",
    date: "2024-10-17",
    eventTitle: "Tortilla de Óscar",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-12.18.31.jpeg",
    chef: "Justin"
  },
  {
    id: "hof-10",
    name: "Bocadillo NERO con Chuletón de Pavo",
    date: "2024-12-19",
    eventTitle: "Lo final del año!",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-13-at-14.43.06-1.jpeg",
    chef: "Nero"
  },
  {
    id: "hof-11",
    name: "Carne de Caballo con Vaca",
    date: "2024-11-21",
    eventTitle: "Mezclar la carne de caballo con la de vaca",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-15.58.34.jpeg",
    chef: "El Gremio"
  },
  {
    id: "hof-12",
    name: "Mariscos Especiales",
    date: "2024-10-25",
    eventTitle: "Mariscos Mientras Fede y Dick en Alemania",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-15.58.33-1.jpeg",
    chef: "El Gremio"
  }
];

// Menu categories for the menu page
export const menuCategories = {
  tortillas: [
    { name: "Tortilla Española Clásica", description: "Patatas, huevos, cebolla caramelizada" },
    { name: "Tortilla de Óscar", description: "Receta secreta del maestro" },
    { name: "Tortilla de Tyler", description: "Primera creación del aprendiz" }
  ],
  hamburguesas: [
    { name: "Hamburguesa de Potro", description: "Carne de caballo premium" },
    { name: "Hamburguesa Americana", description: "Estilo clásico USA" },
    { name: "Hamburguesa de Alubias Fabada", description: "Vegetariana estilo Chez Justin" }
  ],
  pescados: [
    { name: "Bacalao con Pesto Alioli", description: "Bacalao fresco con alioli casero" },
    { name: "Filete de Salmón", description: "Con mantequilla y azúcar moreno" },
    { name: "Gambas Agridulce", description: "Estilo chino tradicional" },
    { name: "Mariscos del Día", description: "Selección fresca del mercado" }
  ],
  carnes: [
    { name: "Pollo Rebozada", description: "Con cruijentes crujientes" },
    { name: "Conejo Tradicional", description: "Receta de Justino" },
    { name: "Chuletón de Pavo NERO", description: "Con romero, miel, mostaza, piñones" },
    { name: "Albondigas Italianas", description: "Con salsa de tomate casera" }
  ],
  especialidades: [
    { name: "Calabaza Asada", description: "Con salchicha de pavo, piñones, miel de limón" },
    { name: "Caesar Salad", description: "Ensalada clásica" },
    { name: "French Fries", description: "Patatas fritas caseras" }
  ]
};
