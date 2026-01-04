/**
 * Seed data for the database
 * This file imports all events from the static data file
 */

import { getDb } from "./db";
import { events, foodItems, chefs } from "../drizzle/schema";

// Import static events data
import { events as staticEvents } from "../client/src/data/events";
import { chefs as staticChefs } from "../client/src/data/chefs";

// Hall of Fame items with correct food images
export const seedFoodItems = [
  {
    name: "Tortilla de Bar Pizcueta 14",
    description: "La tortilla que empezó todo. Jugosa, cremosa, perfecta.",
    image: "http://marti13.es/wp-content/uploads/2024/01/Pizcueta-14-3-1024x680-1.jpg",
    chef: "Fede",
    category: "Tortillas",
    rank: 1
  },
  {
    name: "Texas Pulled Conejo",
    description: "Conejo desmechado estilo Texas BBQ. Una fusión perfecta.",
    image: "http://marti13.es/wp-content/uploads/2024/02/GAwDIFWXsAAZdTb.jpeg",
    chef: "Justin",
    category: "Bocadillos",
    rank: 1
  },
  {
    name: "Epicurus - Sardinas",
    description: "Sardinas frescas con el toque mediterráneo perfecto.",
    image: "http://marti13.es/wp-content/uploads/2024/02/download-1.jpg",
    chef: "Tyler",
    category: "Bocadillos",
    rank: 2
  },
  {
    name: "Tang - Calabaza Asada",
    description: "Calabaza asada con especias orientales. Vegetariano y delicioso.",
    image: "http://marti13.es/wp-content/uploads/2024/02/long_french_bread_sandwhich_of_Calabaza_asada_salchicha_de_pavo_cebolla_asada_pinones_miel_de_limon_huevos_cocinado.png",
    chef: "Tang",
    category: "Bocadillos",
    rank: 3
  },
  {
    name: "Melisa - Sobrasada",
    description: "Sobrasada mallorquina con miel. Simple pero inolvidable.",
    image: "http://marti13.es/wp-content/uploads/2024/02/Sobrasada-con-Miel-El-Aperitivo-Perfecto-1.jpg",
    chef: "Fede",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Tokio - Atún Picante",
    description: "Atún con mayonesa picante estilo japonés.",
    image: "http://marti13.es/wp-content/uploads/2024/04/bocadillo_larga_pan_de_frances_Mayonesa_de_wasabi_pepino_aguacate_atun_picante_edamame.png",
    chef: "Tang",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Mafioso - Pollo Parma",
    description: "Pollo empanado con jamón y queso fundido.",
    image: "http://marti13.es/wp-content/uploads/2024/03/a_long_bocadillo_of_Pollo_empanizado_jamon_serrano_queso_manchego_tomate_lechuga_mayonesa_de_ajo.png",
    chef: "Justin",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Calamares Siglo XIX",
    description: "Calamares rebozados con receta tradicional valenciana.",
    image: "http://marti13.es/wp-content/uploads/2024/05/19th_century_calamari_dish_with_Tomate_pasas_pinones_cebolla_morada_aceitunas_alcaparras_Que_fantasia_png.png",
    chef: "Tyler",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Rabbi Tyler - Salmón",
    description: "Salmón ahumado con queso crema y alcaparras.",
    image: "http://marti13.es/wp-content/uploads/2024/03/larga_bocadillo_con_bacalao_o_salmon_cebolla_ajo_tierna_mermelada_de_naranja_aceite_de_oliva_rucula_tapenade.png",
    chef: "Tyler",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Valenciano - Figatells",
    description: "Figatells tradicionales valencianos.",
    image: "http://marti13.es/wp-content/uploads/2024/06/Figatells-1200x828-1.webp",
    chef: "Óscar",
    category: "Bocadillos",
    rank: null
  },
  {
    name: "Hamburguesas de Potro",
    description: "Las legendarias hamburguesas de carne de potro.",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-13.27.09-300x225.jpeg",
    chef: "Justin",
    category: "Hamburguesas",
    rank: 1
  },
  {
    name: "Bandeja de Mariscos",
    description: "Selección de mariscos frescos del día.",
    image: "http://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-19-at-13.23.45-300x225.jpeg",
    chef: "Tyler",
    category: "Bandejas",
    rank: 1
  }
];

// Chefs data from static file
export const seedChefs = staticChefs.map(chef => ({
  name: chef.name,
  nickname: chef.nickname,
  avatar: chef.avatar,
  bio: chef.bio,
  specialty: chef.specialty,
  signatureDishes: chef.signatureDishes.map(d => d.name),
  eventsHosted: chef.stats.eventsCooked,
  dishesCreated: chef.stats.signatureDishes
}));

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

  // Seed ALL events from static data
  for (const event of staticEvents) {
    try {
      await db.insert(events).values({
        title: event.title,
        date: event.date,
        description: event.description,
        image: event.image,
        chef: "Justin", // Default chef
        menuItems: event.menuItems || [],
        gallery: event.gallery || [],
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
