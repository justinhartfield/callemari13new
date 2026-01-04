/**
 * Seed data for the database
 * This file contains the initial data to populate the database
 */

import { getDb } from "./db";
import { events, foodItems, chefs } from "../drizzle/schema";

// Events data from the static file
export const seedEvents = [
  {
    title: "2/1 Arranca el año nuevo con estilo",
    date: "2026-01-02",
    description: "Primer almorzar del 2026, arrancando el año con estilo y buena comida.",
    image: "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-14.03.18-1.jpeg",
    chef: "Justin",
    menuItems: ["Atún con aceitunas", "Torreznos", "Patatas fritos estilo criss cut"],
    gallery: []
  },
  {
    title: "19/12 Lo final del año",
    date: "2025-12-19",
    description: "Último almorzar del año 2025, despidiendo el año con los mejores platos.",
    image: "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-14.03.18-1.jpeg",
    chef: "Justin",
    menuItems: ["Bacalao con pesto alioli", "Hamburguesas de conejo", "Pollo rebozado con oregano"],
    gallery: [
      "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-14.03.18-1.jpeg",
      "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-14.03.18.jpeg"
    ]
  },
  {
    title: "12/12 Vuelve al Potro",
    date: "2025-12-12",
    description: "El potro vuelve al menú con las famosas hamburguesas de potro.",
    image: "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-14.06.27.jpeg",
    chef: "Justin",
    menuItems: ["Hamburguesas de potro y pavo", "Tortilla de toda la vida", "Hamburguesas de alubias de la fabada asturiana estilo Chez Justin"],
    gallery: [
      "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-14.06.27.jpeg",
      "https://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-14.06.26.jpeg"
    ]
  }
];

// Hall of Fame items
export const seedFoodItems = [
  {
    name: "Tortilla de Bar Pizcueta 14",
    description: "La tortilla que empezó todo. Jugosa, cremosa, perfecta.",
    image: "https://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-15.28.11-225x300.jpeg",
    chef: "Óscar",
    category: "Tortillas",
    rank: 1
  },
  {
    name: "Texas Pulled Conejo",
    description: "Conejo desmechado estilo Texas BBQ. Una fusión perfecta.",
    image: "https://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-13.28.02-1-300x225.jpeg",
    chef: "Justin",
    category: "Bocadillos",
    rank: 1
  },
  {
    name: "Epicurus - Sardinas",
    description: "Sardinas frescas con el toque mediterráneo perfecto.",
    image: "https://marti13.es/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-31-at-13.31.33-300x225.jpeg",
    chef: "Tyler",
    category: "Bocadillos",
    rank: 2
  },
  {
    name: "Tang - Calabaza Asada",
    description: "Calabaza asada con especias orientales. Vegetariano y delicioso.",
    image: "https://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-14-at-13.13.48-1-300x225.jpeg",
    chef: "Tang",
    category: "Bocadillos",
    rank: 3
  },
  {
    name: "Melisa - Sobrasada",
    description: "Sobrasada mallorquina con miel. Simple pero inolvidable.",
    image: "https://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-26-at-13.22.16-300x225.jpeg",
    chef: "Fede",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Tokio - Atún Picante",
    description: "Atún con mayonesa picante estilo japonés.",
    image: "https://marti13.es/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-13.29.12-300x225.jpeg",
    chef: "Tang",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Mafioso - Pollo Parma",
    description: "Pollo empanado con jamón y queso fundido.",
    image: "https://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-07-at-13.37.30-300x225.jpeg",
    chef: "Justin",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Calamares Siglo XIX",
    description: "Calamares rebozados con receta tradicional valenciana.",
    image: "https://marti13.es/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-05-at-13.35.12-300x225.jpeg",
    chef: "Óscar",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Rabbi Tyler - Salmón",
    description: "Salmón ahumado con queso crema y alcaparras.",
    image: "https://marti13.es/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-24-at-13.30.08-300x225.jpeg",
    chef: "Tyler",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Valenciano - Figatells",
    description: "Figatells tradicionales valencianos.",
    image: "https://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-13.19.30-300x225.jpeg",
    chef: "Óscar",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Hamburguesas de Potro",
    description: "Las legendarias hamburguesas de carne de potro.",
    image: "https://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-22-at-13.27.06-300x225.jpeg",
    chef: "Justin",
    category: "Hamburguesas",
    rank: 1
  },
  {
    name: "Bandeja de Mariscos",
    description: "Selección de mariscos frescos del día.",
    image: "https://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-19-at-13.23.45-300x225.jpeg",
    chef: "Tyler",
    category: "Bandejas",
    rank: 1
  }
];

// Chefs data
export const seedChefs = [
  {
    name: "Justin",
    nickname: "El Arquitecto",
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&h=200&fit=crop",
    bio: "Fundador del gremio y arquitecto de los menús más ambiciosos. Especialista en fusiones inesperadas.",
    specialty: "Fusión Americana-Mediterránea",
    signatureDishes: ["Texas Pulled Conejo", "Hamburguesas de Potro", "Mafioso Pollo Parma"],
    eventsHosted: 35,
    dishesCreated: 48
  },
  {
    name: "Tyler",
    nickname: "El Pescador",
    avatar: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=200&h=200&fit=crop",
    bio: "Maestro de los frutos del mar. Si viene del agua, Tyler sabe cómo prepararlo.",
    specialty: "Pescados y Mariscos",
    signatureDishes: ["Epicurus Sardinas", "Rabbi Tyler Salmón", "Bandeja de Mariscos"],
    eventsHosted: 18,
    dishesCreated: 25
  },
  {
    name: "Fede",
    nickname: "El Clásico",
    avatar: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=200&h=200&fit=crop",
    bio: "Defensor de la tradición. Sus platos son un homenaje a la cocina de siempre.",
    specialty: "Cocina Tradicional Española",
    signatureDishes: ["Melisa Sobrasada", "Tortilla Clásica", "Jamón Ibérico"],
    eventsHosted: 12,
    dishesCreated: 15
  },
  {
    name: "Molly",
    nickname: "La Innovadora",
    avatar: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=200&h=200&fit=crop",
    bio: "Siempre experimentando con sabores nuevos. Sus creaciones sorprenden cada vez.",
    specialty: "Cocina Experimental",
    signatureDishes: ["Ensalada de Quinoa", "Tacos Fusion", "Postres Creativos"],
    eventsHosted: 8,
    dishesCreated: 20
  },
  {
    name: "Tang",
    nickname: "El Oriental",
    avatar: "https://images.unsplash.com/photo-1583394293214-28ez24e6dce?w=200&h=200&fit=crop",
    bio: "Trae los sabores de Asia a Valencia. Maestro del umami y las especias.",
    specialty: "Fusión Asiática",
    signatureDishes: ["Tang Calabaza Asada", "Tokio Atún Picante", "Gyozas Caseras"],
    eventsHosted: 10,
    dishesCreated: 18
  },
  {
    name: "Óscar",
    nickname: "El Tortillero",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    bio: "La tortilla es su lienzo. Nadie la hace como él.",
    specialty: "Tortillas y Frituras",
    signatureDishes: ["Tortilla de Bar Pizcueta", "Calamares Siglo XIX", "Valenciano Figatells"],
    eventsHosted: 15,
    dishesCreated: 22
  },
  {
    name: "Nero",
    nickname: "El Misterioso",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bio: "Aparece cuando menos lo esperas con platos que nadie vio venir.",
    specialty: "Sorpresas Culinarias",
    signatureDishes: ["NERO Bocadillo Especial", "Plato Misterioso", "Postre Secreto"],
    eventsHosted: 5,
    dishesCreated: 12
  }
];

export async function seedDatabase() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const results = {
    events: 0,
    foodItems: 0,
    chefs: 0
  };

  // Seed events
  for (const event of seedEvents) {
    try {
      await db.insert(events).values({
        title: event.title,
        date: event.date,
        description: event.description,
        image: event.image,
        chef: event.chef,
        menuItems: event.menuItems,
        gallery: event.gallery,
        isPublished: true
      });
      results.events++;
    } catch (err) {
      console.error(`Error seeding event ${event.title}:`, err);
    }
  }

  // Seed food items
  for (const item of seedFoodItems) {
    try {
      await db.insert(foodItems).values({
        name: item.name,
        description: item.description,
        image: item.image,
        chef: item.chef,
        category: item.category,
        rank: item.rank,
        isPublished: true
      });
      results.foodItems++;
    } catch (err) {
      console.error(`Error seeding food item ${item.name}:`, err);
    }
  }

  // Seed chefs
  for (const chef of seedChefs) {
    try {
      await db.insert(chefs).values({
        name: chef.name,
        nickname: chef.nickname,
        avatar: chef.avatar,
        bio: chef.bio,
        specialty: chef.specialty,
        signatureDishes: chef.signatureDishes,
        eventsHosted: chef.eventsHosted,
        dishesCreated: chef.dishesCreated,
        isActive: true
      });
      results.chefs++;
    } catch (err) {
      console.error(`Error seeding chef ${chef.name}:`, err);
    }
  }

  return results;
}
