/**
 * DESIGN: Neo-Brutalist "Zine Bodega"
 * Complete event data from Martí 13 WordPress export
 * Events sorted chronologically (most recent first)
 * Total events: 76
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

// Complete events from marti13.es WordPress export
// Sorted chronologically: most recent first, inaugural event last
export const events: Event[] = [
  {
    id: "1",
    title: "19/12 Lo final del año !",
    date: "2025-12-19",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-12.14.13.jpeg",
    description: "19/12 Lo final del año !",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-12.14.03-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-19-at-12.14.07-768x1024.jpeg"]
  },
  {
    id: "2",
    title: "12/12 Feliz Navidad antes de Amsterdam",
    date: "2025-12-12",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-2.jpeg",
    description: "Bacalao con Pesto Alioli. NERO: Bocadillo con chuletón de pavo, romero, miel, mostaza, piñones, bayas de goji, arugula",
    menuItems: ["Bacalao con Pesto Alioli", "NERO: Bocadillo con chuletón de pavo, romero, miel, mostaza, piñones, bayas de goji, arugula"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-12-at-16.21.15-1024x768.jpeg"]
  },
  {
    id: "3",
    title: "5/12 Marko Visitamos ",
    date: "2025-12-05",
    image: "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-06-at-06.52.28.jpeg",
    description: "Albondigas de carne con salsa italiano. Albondigas vegano. Caesar salad",
    menuItems: ["Albondigas de carne con salsa italiano", "Albondigas vegano", "Caesar salad"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-06-at-06.52.27-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-06-at-06.52.26-768x1024.jpeg"]
  },
  {
    id: "4",
    title: "21/11 Mezclar la carne de caballo con la de vaca",
    date: "2025-11-21",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-22-at-06.17.22.jpeg",
    description: "Hamburguesas de Potro. Hamburguesas de Vaca. French Fries",
    menuItems: ["Hamburguesas de Potro", "Hamburguesas de Vaca", "French Fries"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-22-at-06.17.20-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-22-at-06.17.23-768x1024.jpeg"]
  },
  {
    id: "5",
    title: "14/11 Óscar será un bombero y MAC regalita ",
    date: "2025-11-14",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-14-at-15.42.46-1.jpeg",
    description: "Ensalada de Tuna. Crab Salad. Gambas de Denia",
    menuItems: ["Ensalada de Tuna", "Crab Salad", "Gambas de Denia"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-14-at-15.42.46-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-14-at-15.42.47-768x1024.jpeg"]
  },
  {
    id: "6",
    title: "7/11 Tortilla de Óscar y Conejo de Justino (pero nadie comían) ",
    date: "2025-11-07",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.14.jpeg",
    description: "Hamburgesas de Conejo. ÓSCAR: Tortilla de toda la vida",
    menuItems: ["Hamburgesas de Conejo", "ÓSCAR: Tortilla de toda la vida"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.15-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-08-at-06.14.15-1-768x1024.jpeg"]
  },
  {
    id: "7",
    title: "31/10 Halloweed @ Martí 13",
    date: "2025-10-31",
    image: "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-12.50.05.jpeg",
    description: "Hamburgesas de Pollo Curry. Pollo Rebozado con Oregano",
    menuItems: ["Hamburgesas de Pollo Curry", "Pollo Rebozado con Oregano"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-12.50.00-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-12.50.02-1024x768.jpeg"]
  },
  {
    id: "8",
    title: "24/10/25 Vuelve al Potro",
    date: "2025-10-24",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.27.jpeg",
    description: "24/10/25 Vuelve al Potro",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.28-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-1-768x1024.jpeg"]
  },
  {
    id: "9",
    title: "10/17 Tortilla de Óscar ",
    date: "2025-10-17",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-2.jpeg",
    description: "10/17 Tortilla de Óscar ",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-08.20.32-768x1024.jpeg"]
  },
  {
    id: "10",
    title: "10/10 Finalmente resgresa al frío  ",
    date: "2025-10-10",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-13-at-19.07.20.jpeg",
    description: "10/10 Finalmente resgresa al frío  ",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-13-at-19.07.21-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-13-at-19.07.20-1-768x1024.jpeg"]
  },
  {
    id: "11",
    title: "19/9 Tyler Olvidó El Coleslaw",
    date: "2025-09-19",
    image: "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.57-1.jpeg",
    description: "19/9 Tyler Olvidó El Coleslaw",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.57-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-19-at-15.44.56-1-768x1024.jpeg"]
  },
  {
    id: "12",
    title: "12/9 Bienvenidos Familia de Cowan",
    date: "2025-09-12",
    image: "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-12-at-13.58.28.jpeg",
    description: "Quesadilla vegana con carne picada ahumada y pimientos asados. DÍA DE PARTIDO LOS TACOS DE CARNE PICADA",
    menuItems: ["Quesadilla vegana con carne picada ahumada y pimientos asados", "DÍA DE PARTIDO LOS TACOS DE CARNE PICADA"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-12-at-13.58.43-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-12-at-13.58.44-768x1024.jpeg"]
  },
  {
    id: "13",
    title: "5/9 Regresamos en la iglesia ",
    date: "2025-09-05",
    image: "http://marti13.es/wp-content/uploads/2025/09/PXL_20250905_091220119-scaled.jpg",
    description: "Albondigas de carne con salsa italiano. Albondigas de vegetales con salsa de pesto",
    menuItems: ["Albondigas de carne con salsa italiano", "Albondigas de vegetales con salsa de pesto"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/09/PXL_20250905_101043115-1024x771.jpg", "http://marti13.es/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-09-at-15.47.48-768x1024.jpeg"]
  },
  {
    id: "14",
    title: "25/7 Verano a Fuerte Pero La Gente Lo Quieren Almorzar",
    date: "2025-07-25",
    image: "http://marti13.es/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-30-at-06.45.43.jpeg",
    description: "Tortillas de Pizcueta 14, gracias a Fede. Lomo, Pollo, Beicon",
    menuItems: ["Tortillas de Pizcueta 14, gracias a Fede", "Lomo, Pollo, Beicon"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-30-at-06.45.38-5-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-30-at-06.45.38-6-768x1024.jpeg"]
  },
  {
    id: "15",
    title: "4/7 Verano en Fuerte / Noche de Fantasma de la Opera",
    date: "2025-07-04",
    image: "http://marti13.es/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-05-at-06.59.47.jpeg",
    description: "Salchichas y Pimientos estilo italiano",
    menuItems: ["Salchichas y Pimientos estilo italiano"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-05-at-06.59.49-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-05-at-06.59.48-6-768x1024.jpeg"]
  },
  {
    id: "16",
    title: "27/6 Verano y Se Marchan Hana y Justin al Hospital",
    date: "2025-06-27",
    image: "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-11.56.47.jpeg",
    description: "Salmón glaseado con miso. Fish y Chips",
    menuItems: ["Salmón glaseado con miso", "Fish y Chips"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-11.56.46-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-11.56.49-1-768x1024.jpeg"]
  },
  {
    id: "17",
    title: "13/6 Pollo con queso azul y verano casi empieza ",
    date: "2025-06-13",
    image: "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-14-at-07.01.02-1.jpeg",
    description: "Lomo barbacoa con manzana verde confitada y bacon de azúcar moreno. Pollo con queso azul",
    menuItems: ["Lomo barbacoa con manzana verde confitada y bacon de azúcar moreno", "Pollo con queso azul"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-14-at-07.00.43-1024x768.jpeg", "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-14-at-07.01.00-768x1024.jpeg"]
  },
  {
    id: "18",
    title: "6/6 Entrecot y huevos por los caballeros ",
    date: "2025-06-06",
    image: "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-06-at-12.46.03-3.jpeg",
    description: "El Comboi: Entrecot, tomate natural rallado, salsa mery, queso manchego y mermelada de bacon casera. Japanese 7/11 Sandwich",
    menuItems: ["El Comboi: Entrecot, tomate natural rallado, salsa mery, queso manchego y mermelada de bacon casera", "Japanese 7/11 Sandwich"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-06-at-12.46.04-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-06-at-12.46.04-2-768x1024.jpeg"]
  },
  {
    id: "19",
    title: "23/5 Don Perrito en la oficina!",
    date: "2025-05-23",
    image: "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-30-at-12.51.42.jpeg",
    description: "Currysauce für Currywurst. Bayerischer Kartoffelsalat",
    menuItems: ["Currysauce für Currywurst", "Bayerischer Kartoffelsalat"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-30-at-13.58.13-1024x768.jpeg", "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-30-at-12.51.55-768x1024.jpeg"]
  },
  {
    id: "20",
    title: "23/5 Albondigas IKEA y Tex Mex Estilo Judio ",
    date: "2025-05-23",
    image: "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-13.37.24.jpeg",
    description: "DEL BOSQUE: Albondigas, setas salteadas, queso azul, rúcula, cebolla morada encurtida. OSCAR DE LA JOYA: cerdo desmenuzado, guacamole, jalapeños, queso, pepinos dulce asado",
    menuItems: ["DEL BOSQUE: Albondigas, setas salteadas, queso azul, rúcula, cebolla morada encurtida", "OSCAR DE LA JOYA: cerdo desmenuzado, guacamole, jalapeños, queso, pepinos dulce asado"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-13.37.10-3-1024x768.jpeg", "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-13.37.23-1024x768.jpeg"]
  },
  {
    id: "21",
    title: "16/5 Salmon estilo Rabbi Tang",
    date: "2025-05-16",
    image: "http://marti13.es/wp-content/uploads/2025/05/PXL_20250513_041036047-scaled.jpg",
    description: "Salmon marinado estilo Justin",
    menuItems: ["Salmon marinado estilo Justin"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/05/PXL_20250516_085537340-1024x771.jpg", "http://marti13.es/wp-content/uploads/2025/05/PXL_20250516_085539568-1024x771.jpg"]
  },
  {
    id: "22",
    title: "9/5 Dia de Philadelphia Cheesesteak",
    date: "2025-05-09",
    image: "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-19.27.14-3.jpeg",
    description: "Philly Cheesesteak",
    menuItems: ["Philly Cheesesteak"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-19.27.13-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-19.27.21-768x1024.jpeg"]
  },
  {
    id: "23",
    title: "25/4 Semana Santa Con Las Niñas y Hacienda ",
    date: "2025-04-25",
    image: "http://marti13.es/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-25-at-14.29.55-1.jpeg",
    description: "Berenejas de marinara y queso de Tyler",
    menuItems: ["Berenejas de marinara y queso de Tyler"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-25-at-14.30.14-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-25-at-14.29.53-1-768x1024.jpeg"]
  },
  {
    id: "24",
    title: "4/3 Justin acaba de hacer su primera tortilla! ",
    date: "2025-03-04",
    image: "http://marti13.es/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-05-at-06.30.35.jpeg",
    description: "Tortilla a la Justino. De Gypsy Chef: Cecina, queso, miel, pistachios salados, albahaca",
    menuItems: ["Tortilla a la Justino", "De Gypsy Chef: Cecina, queso, miel, pistachios salados, albahaca"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-05-at-06.30.34-2-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-05-at-06.30.33-3-768x1024.jpeg"]
  },
  {
    id: "25",
    title: "28/2 La Almorzar Antes de Fallas",
    date: "2025-02-28",
    image: "http://marti13.es/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-01-at-06.42.58.jpeg",
    description: "Tortilla De Bar Pizcueta 14. Blanco y Negro (y Rojo)",
    menuItems: ["Tortilla De Bar Pizcueta 14", "Blanco y Negro (y Rojo)"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-01-at-06.43.02-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-01-at-06.43.00-3-768x1024.jpeg"]
  },
  {
    id: "26",
    title: "21/2 La Almorzar Despues de Fallas",
    date: "2025-02-21",
    image: "http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-16.39.25-2.jpeg",
    description: "Huevos revueltos con espinacas y berenjenas. Huevos revueltos con longaniza, espinacas y queso de cabra salsa",
    menuItems: ["Huevos revueltos con espinacas y berenjenas", "Huevos revueltos con longaniza, espinacas y queso de cabra salsa"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/01/Papasarrugadas-1024x768.jpg", "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-13.20.53-3-768x1024.jpeg"]
  },
  {
    id: "27",
    title: "21/2 Invasión de las Charros",
    date: "2025-02-21",
    image: "http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-21-at-14.57.42-7.jpeg",
    description: "Calamari Frito ala Romana    Bocadillo Clásico Con Tomate, Bonito y Olivas",
    menuItems: ["Calamari Frito ala Romana    Bocadillo Clásico Con Tomate, Bonito y Olivas"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-21-at-14.57.39-7-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-21-at-14.57.39-5-768x1024.jpeg"]
  },
  {
    id: "28",
    title: "14/2 San Valentín Estilo Chino",
    date: "2025-02-14",
    image: "http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-14-at-13.30.07-1.jpeg",
    description: "Chuletas de pollo a la naranja. Carne de teriyaki y brócoli",
    menuItems: ["Chuletas de pollo a la naranja", "Carne de teriyaki y brócoli"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-14-at-13.30.05-2-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-14-at-13.30.08-1-768x1024.jpeg"]
  },
  {
    id: "29",
    title: "17/1 Fede estranó nueva peldric",
    date: "2025-01-17",
    image: "http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-17.00.26.jpeg",
    description: "Papas morado arrugadas de Canarias con huevos camperos. Pollo al chipotle con cilantro y lima Adobo",
    menuItems: ["Papas morado arrugadas de Canarias con huevos camperos", "Pollo al chipotle con cilantro y lima Adobo"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-17.00.05-3-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-17.00.01-1-768x1024.jpeg"]
  },
  {
    id: "30",
    title: "10/1 Los últimos días del cabello de fede",
    date: "2025-01-10",
    image: "http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-16.39.28-2.jpeg",
    description: "CA LA MAR  Un clásico a la plancha. CARDIBRIE  Imagina un bocadillo hecho de tomate rallado natural, salsa mery, lomo exquisito y queso brie coronándolo todo.",
    menuItems: ["CA LA MAR  Un clásico a la plancha", "CARDIBRIE  Imagina un bocadillo hecho de tomate rallado natural, salsa mery, lomo exquisito y queso "],
    gallery: ["http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-16.39.26-2-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-16.39.26-4-768x1024.jpeg"]
  },
  {
    id: "31",
    title: "3/1 Regresamos con fuerza!  ",
    date: "2025-01-03",
    image: "http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-04-at-05.41.49.jpeg",
    description: "B’NAI BRITH: Salmon ahumado, pepinos, philadelphia. Hamburguesa de pavo desde Cocina de Molly",
    menuItems: ["B’NAI BRITH: Salmon ahumado, pepinos, philadelphia", "Hamburguesa de pavo desde Cocina de Molly"],
    gallery: ["http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-04-at-05.41.50-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-04-at-05.41.51-768x1024.jpeg"]
  },
  {
    id: "32",
    title: "20/12 Antes de Vacaciones| Cara esta mal",
    date: "2024-12-20",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-21.56.53-1.jpeg",
    description: "BIG DAWG: Huevos revueltos con espinicas y habas. De la mente atormentada del chef Tyler. VERDE: Bocadillo con pavo a las finas hierbas, pesto, piñons, queso de cabra, y tomates secos",
    menuItems: ["BIG DAWG: Huevos revueltos con espinicas y habas", "De la mente atormentada del chef Tyler", "VERDE: Bocadillo con pavo a las finas hierbas, pesto, piñons, queso de cabra, y tomates secos"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-21.56.51-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-21.56.55-1-768x1024.jpeg"]
  },
  {
    id: "33",
    title: "6/12 Día De Constitution ",
    date: "2024-12-06",
    image: "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-13-at-14.43.04.jpeg",
    description: "ÓSCAR: huevos revueltos con boletus y ajo tierno. BURGER TANG: Pollo Manzana Espies de albahaca y canela",
    menuItems: ["ÓSCAR: huevos revueltos con boletus y ajo tierno", "BURGER TANG: Pollo Manzana Espies de albahaca y canela"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-13-at-14.43.05-1-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-13-at-14.43.06-1-1024x768.jpeg"]
  },
  {
    id: "34",
    title: "29/11 Los chavalas regresan a Thailandia con mucho éxito ",
    date: "2024-11-29",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-14.49.54-1.jpeg",
    description: "Tortilla De Bar Pizcueta 14. Mezcla de tomates, berenjenas y alcachofas",
    menuItems: ["Tortilla De Bar Pizcueta 14", "Mezcla de tomates, berenjenas y alcachofas"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-14.49.54-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-14.49.53-768x1024.jpeg"]
  },
  {
    id: "35",
    title: "22/11 Primera Tortilla de Tyler (con asistencia de Carla y Momma)",
    date: "2024-11-22",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-13.20.54-1.jpeg",
    description: "Tortillas de Tyler. Salchicha de cerdo castaña, pollo y morcilla",
    menuItems: ["Tortillas de Tyler", "Salchicha de cerdo castaña, pollo y morcilla"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-13.20.53-2-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-22-at-13.20.53-5-768x1024.jpeg"]
  },
  {
    id: "36",
    title: "15/11 Bienvenidos Ethan (No aparece en la foto)",
    date: "2024-11-15",
    image: "http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-24.jpg",
    description: "MOSHE: Filete de salmón con mantequilla y azúcar moreno. Gambas en salsa agridulce estilo chino",
    menuItems: ["MOSHE: Filete de salmón con mantequilla y azúcar moreno", "Gambas en salsa agridulce estilo chino"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-23-768x1024.jpg", "http://marti13.es/wp-content/uploads/2024/11/PHOTO-2024-11-16-06-25-29-768x1024.jpg"]
  },
  {
    id: "37",
    title: "8/11 Pocos gente, muchos amore",
    date: "2024-11-08",
    image: "http://marti13.es/wp-content/uploads/2024/11/PXL_20241108_094344432-scaled.jpg",
    description: "Filete Wellington deconstruido. EMPERADOR JUSTINIANO: Calabaza rellena de manzana, cebolla y salchicha",
    menuItems: ["Filete Wellington deconstruido", "EMPERADOR JUSTINIANO: Calabaza rellena de manzana, cebolla y salchicha"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-08-at-19.46.31-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-08-at-19.49.00-768x1024.jpeg"]
  },
  {
    id: "38",
    title: "1/11 Después del diluvio :( ",
    date: "2024-11-01",
    image: "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-4.jpeg",
    description: "Revuelto de queso de cabra, sobrasada y cebolla carmelizada. Chivito Estilo California",
    menuItems: ["Revuelto de queso de cabra, sobrasada y cebolla carmelizada", "Chivito Estilo California"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.11-5-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-01-at-14.01.10-1-768x1024.jpeg"]
  },
  {
    id: "39",
    title: "27/10 ilia topuria vs max halloway",
    date: "2024-10-27",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-26-at-20.24.43.jpeg",
    description: "27/10 ilia topuria vs max halloway",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-26-at-18.43.57-1024x768.jpeg"]
  },
  {
    id: "40",
    title: "25/10 Mariscos Mientras Fede y Dick en Alemania ",
    date: "2024-10-25",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-15.58.30.jpeg",
    description: "Marisca fresca del día. Super Deviled Egg Salad",
    menuItems: ["Marisca fresca del día", "Super Deviled Egg Salad"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-15.58.31-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-25-at-15.58.30-1-768x1024.jpeg"]
  },
  {
    id: "41",
    title: "18/10 Almorzar Regresamos a Martí",
    date: "2024-10-18",
    image: "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-19-at-06.55.49-1.jpeg",
    description: "Salchichas y Pimientos estilo italiano. Club Sandwhich de Richard Cowan desde Restaurante Aquarium",
    menuItems: ["Salchichas y Pimientos estilo italiano", "Club Sandwhich de Richard Cowan desde Restaurante Aquarium"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-19-at-06.55.49-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-19-at-06.55.45-768x1024.jpeg"]
  },
  {
    id: "42",
    title: "11/10 Almorzar Restaurante Casa Baina!",
    date: "2024-10-11",
    image: "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075308097-scaled.jpg",
    description: "Ali e pebre de angulia",
    menuItems: ["Ali e pebre de angulia"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075254374-1024x771.jpg", "http://marti13.es/wp-content/uploads/2024/10/PXL_20241011_075252378-1024x771.jpg"]
  },
  {
    id: "43",
    title: "27/9 Almorzar Para Seis ",
    date: "2024-09-27",
    image: "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-20.42.00.jpeg",
    description: "Gambas y Ajo. Mezcla de tomates, berenjenas y alcachofas. Sano por las patas flojas",
    menuItems: ["Gambas y Ajo", "Mezcla de tomates, berenjenas y alcachofas", "Sano por las patas flojas"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-10.25.14-576x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-09.55.43-576x1024.jpeg"]
  },
  {
    id: "44",
    title: "20/9 Finalmente Verano Se Acabo",
    date: "2024-09-20",
    image: "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.40.jpeg",
    description: "POLLO CAMPERO, TORTILLA DE SOBRASADA IBÉRICA, QUESO BRIE, Y MAHONESA DE MIEL. Ensalada de atún estilo TOGOS Americana. Tortilla De Bar Pizcueta 14",
    menuItems: ["POLLO CAMPERO, TORTILLA DE SOBRASADA IBÉRICA, QUESO BRIE, Y MAHONESA DE MIEL", "Ensalada de atún estilo TOGOS Americana", "Tortilla De Bar Pizcueta 14"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.33-576x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-11.59.20-576x1024.jpeg"]
  },
  {
    id: "45",
    title: "13/9 Mariscos por días y días (sin Fede)",
    date: "2024-09-13",
    image: "http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0008.jpg",
    description: "MOSHE: Filete de salmón con mantequilla y azúcar moreno. CA LA MAR: Calamar a la plancha, rúcula, salsa pesto, piñones",
    menuItems: ["MOSHE: Filete de salmón con mantequilla y azúcar moreno", "CA LA MAR: Calamar a la plancha, rúcula, salsa pesto, piñones"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/09/IMG-20240913-WA0010-576x1024.jpg", "http://marti13.es/wp-content/uploads/2024/09/PXL_20240913_083729936-1024x771.jpg"]
  },
  {
    id: "46",
    title: "6/9 Regresamos a Vacaciones",
    date: "2024-09-06",
    image: "http://marti13.es/wp-content/uploads/2024/09/PXL_20240906_092314834-scaled.jpg",
    description: "BALDO: Huevos Rotos con Chistorra y Cebolla Caramelizada. NERO: Bocadillo con chuletón de pavo, romero, miel, mostaza, piñones, bayas de goji, arugula.",
    menuItems: ["BALDO: Huevos Rotos con Chistorra y Cebolla Caramelizada", "NERO: Bocadillo con chuletón de pavo, romero, miel, mostaza, piñones, bayas de goji, arugula."],
    gallery: ["http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0002-768x1024.jpg", "http://marti13.es/wp-content/uploads/2024/09/IMG-20240907-WA0004-768x1024.jpg"]
  },
  {
    id: "47",
    title: "30/8 Falta Persons Pero Amor No",
    date: "2024-08-30",
    image: "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-30-at-10.34.18.jpeg",
    description: "MAFIOSO: POLLO DE PARMA ESTILO HORNEADO. Chivito Estilo California",
    menuItems: ["MAFIOSO: POLLO DE PARMA ESTILO HORNEADO", "Chivito Estilo California"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-30-at-10.33.50-576x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-30-at-10.34.08-577x1024.jpeg"]
  },
  {
    id: "48",
    title: "23/8 Almorzar de Calor con Carlos ",
    date: "2024-08-23",
    image: "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-13.03.31-1.jpeg",
    description: "Tortilla De Bar Pizcueta 14. HANA: POLLO ASADO CON ALL-I-OLI DE LIMÒN Y TOMILLO Y PATATAS ASADAS",
    menuItems: ["Tortilla De Bar Pizcueta 14", "HANA: POLLO ASADO CON ALL-I-OLI DE LIMÒN Y TOMILLO Y PATATAS ASADAS"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-13.03.27-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-13.03.30-768x1024.jpeg"]
  },
  {
    id: "49",
    title: "16/8 Augusto Almorzar Tradicional   Piscina ",
    date: "2024-08-16",
    image: "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-16-at-15.59.26-2.jpeg",
    description: "Blanco y Negro (y Rojo)",
    menuItems: ["Blanco y Negro (y Rojo)"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-16-at-15.59.27-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-16-at-15.59.27-1-576x1024.jpeg"]
  },
  {
    id: "50",
    title: "5/7 Almorzar de Verano",
    date: "2024-07-05",
    image: "http://marti13.es/wp-content/uploads/2024/07/IMG-20240705-WA0042.jpg",
    description: "SENECA: CONTRAMUSLO DE POLLO, PIMIENTOS ASADOS, MANCHEGO, ALIOLI, LECHUGA ROMANA. HECTOR: PIMIENTOS RELLENOS FIESTA AL HORNO",
    menuItems: ["SENECA: CONTRAMUSLO DE POLLO, PIMIENTOS ASADOS, MANCHEGO, ALIOLI, LECHUGA ROMANA", "HECTOR: PIMIENTOS RELLENOS FIESTA AL HORNO"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/07/IMG-20240705-WA0041-576x1024.jpg", "http://marti13.es/wp-content/uploads/2024/07/IMG-20240705-WA0043-576x1024.jpg"]
  },
  {
    id: "51",
    title: "1/7 Poker Night #2!",
    date: "2024-07-01",
    image: "http://marti13.es/wp-content/uploads/2024/07/IMG-20240701-WA0029.jpg",
    description: "NOCHE DE POKER, #2 CON FLORIAN Y MELISSA.",
    menuItems: ["NOCHE DE POKER, #2 CON FLORIAN Y MELISSA."],
    gallery: ["http://marti13.es/wp-content/uploads/2024/07/IMG-20240701-WA0031-576x1024.jpg", "http://marti13.es/wp-content/uploads/2024/07/IMG-20240701-WA0032-938x1024.jpg"]
  },
  {
    id: "52",
    title: "28/6 Verano Empiezan! ",
    date: "2024-06-28",
    image: "http://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-29-at-08.18.14.jpeg",
    description: "VALENCIANO: FIGATELLS, PANCETA IBÉRICA, LECHUGA, TOMATE, PATATAS POBRES, CEBOLLA, MAYONESA  Estilo clásico todavía toque de moderno    CALIFORNIANO: BURGERS DE AGUACATE Y PAVO",
    menuItems: ["VALENCIANO: FIGATELLS, PANCETA IBÉRICA, LECHUGA, TOMATE, PATATAS POBRES, CEBOLLA, MAYONESA  Estilo c"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/06/PXL_20240628_104029590-1024x771.jpg", "http://marti13.es/wp-content/uploads/2024/06/PXL_20240628_104032445-1024x771.jpg"]
  },
  {
    id: "53",
    title: "21/6 Volverse a Berlin y Celebrar! ",
    date: "2024-06-21",
    image: "http://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-21-at-11.04.06.jpeg",
    description: "ENSALADA DE ATÚN ESTILO TOGOS AMERICANA  Lo mejor bocadillo de atún en el estado unido pero mejorar con ingredientes mediterráneo. CLASSICO ENSALADA TO HUEVOS ESTILO AMERICANA",
    menuItems: ["ENSALADA DE ATÚN ESTILO TOGOS AMERICANA  Lo mejor bocadillo de atún en el estado unido pero mejorar ", "CLASSICO ENSALADA TO HUEVOS ESTILO AMERICANA"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-21-at-11.32.32-576x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.04.22-576x1024.jpeg"]
  },
  {
    id: "54",
    title: "14/6 Mery Jane Berlin ",
    date: "2024-06-14",
    image: "",
    description: "RABBI TYLER: SALMÓN MARINADO, COGOLLO DE LECHUGA, SALSA TÁRTARA Y PIPARRAS",
    menuItems: ["RABBI TYLER: SALMÓN MARINADO, COGOLLO DE LECHUGA, SALSA TÁRTARA Y PIPARRAS"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-14-at-21.13.45-576x1024.jpeg"]
  },
  {
    id: "55",
    title: "7/6 ¡Bienvenida la mamá de Fede!",
    date: "2024-06-07",
    image: "http://marti13.es/wp-content/uploads/2024/06/IMG-20240607-WA0010.jpg",
    description: "ALITAS DE LIMÓN Y PIMIENTA | ALITAS DE POLLO BUFFALO | LONGANIZA DE PUEBLO: gracias de Carla!",
    menuItems: ["ALITAS DE LIMÓN Y PIMIENTA | ALITAS DE POLLO BUFFALO | LONGANIZA DE PUEBLO: gracias de Carla!"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/06/PXL_20240607_095022494-1024x771.jpg", "http://marti13.es/wp-content/uploads/2024/06/PXL_20240607_095027259-1024x771.jpg"]
  },
  {
    id: "56",
    title: "2/6 Almorzar en la plena de verano ",
    date: "2024-06-02",
    image: "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-03-at-05.59.15.jpeg",
    description: "BOQUERONES FRESCOS, ESCALIVADA DE PIMIENTO ROJO, BERENEJA Y CEBOLLA CON BASE DE TOMATE RALLADO. HANA: POLLO ASADO CON ALL-I-OLI DE LIMÒN Y TOMILLO Y PATATAS ASADAS",
    menuItems: ["BOQUERONES FRESCOS, ESCALIVADA DE PIMIENTO ROJO, BERENEJA Y CEBOLLA CON BASE DE TOMATE RALLADO", "HANA: POLLO ASADO CON ALL-I-OLI DE LIMÒN Y TOMILLO Y PATATAS ASADAS"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-03-at-05.59.08-768x1024.jpeg", "http://marti13.es/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-03-at-05.59.12-768x1024.jpeg"]
  },
  {
    id: "57",
    title: "1/6 Noche de Poker #1!",
    date: "2024-06-01",
    image: "http://marti13.es/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-02-at-12.15.47.jpeg",
    description: "1/6 Noche de Poker #1!",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2024/06/IMG-20240601-WA0033-e1717349172148-1024x805.jpg"]
  },
  {
    id: "58",
    title: "24/5 batalla de puntuación más alta",
    date: "2024-05-24",
    image: "http://marti13.es/wp-content/uploads/2024/05/IMG-20240524-WA0015.jpg",
    description: "CALAMARES – RECETA DEL SIGLO XIX  Tomate, pasas, piñones, cebolla morada, aceitunas, alcaparras! Qué fantasía!. TORTILLA DE BAR PIZCUETA",
    menuItems: ["CALAMARES – RECETA DEL SIGLO XIX  Tomate, pasas, piñones, cebolla morada, aceitunas, alcaparras! Qué", "TORTILLA DE BAR PIZCUETA"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/05/IMG-20240524-WA0016-300x225.jpg", "http://marti13.es/wp-content/uploads/2024/05/PXL_20240524_095730213-300x226.jpg"]
  },
  {
    id: "59",
    title: "17/5 PRIMAVERA ESTA AQUÍ!",
    date: "2024-05-17",
    image: "http://marti13.es/wp-content/uploads/2024/05/PXL_20240517_101100263-scaled.jpg",
    description: "DE TYLER. HECTOR",
    menuItems: ["DE TYLER", "HECTOR"],
    gallery: []
  },
  {
    id: "60",
    title: "10/5 TITAINA Y CALABACÍN ",
    date: "2024-05-10",
    image: "http://marti13.es/wp-content/uploads/2024/05/PXL_20240510_094311244-scaled.jpg",
    description: "EMPERADOR JUSTINIANO: CALABAZA RELLENA DE MANZANA, CEBOLLA Y SALCHICHA. ABUELITA: TITAINA DE ATÚN FRESCO Y HUEVO",
    menuItems: ["EMPERADOR JUSTINIANO: CALABAZA RELLENA DE MANZANA, CEBOLLA Y SALCHICHA", "ABUELITA: TITAINA DE ATÚN FRESCO Y HUEVO"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/05/PXL_20240510_091227031-300x226.jpg", "http://marti13.es/wp-content/uploads/2024/05/PXL_20240510_091235639-300x226.jpg"]
  },
  {
    id: "61",
    title: "3/5 Corto en gente pero largo en diversión ",
    date: "2024-05-03",
    image: "http://marti13.es/wp-content/uploads/2024/05/PXL_20240503_092819889-scaled.jpg",
    description: "MAFIOSO: POLLO DE PARMA ESTILO HORNEADO. olivas, lechuga y tomate rallado",
    menuItems: ["MAFIOSO: POLLO DE PARMA ESTILO HORNEADO", "olivas, lechuga y tomate rallado"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/05/PXL_20240503_092818632-300x226.jpg", "http://marti13.es/wp-content/uploads/2024/05/PXL_20240503_092821558-300x226.jpg"]
  },
  {
    id: "62",
    title: "26/4 COWAN DISPARO DE TEXAS",
    date: "2024-04-26",
    image: "http://marti13.es/wp-content/uploads/2024/05/PXL_20240426_101040837-scaled.jpg",
    description: "Tortilla De Bar Pizcueta 14. EL SANO: bonito, huevo duro, olivas, lechuga y tomate rallado",
    menuItems: ["Tortilla De Bar Pizcueta 14", "EL SANO: bonito, huevo duro, olivas, lechuga y tomate rallado"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/05/PXL_20240426_101045910-300x226.jpg", "http://marti13.es/wp-content/uploads/2024/05/PXL_20240426_091942833-300x226.jpg"]
  },
  {
    id: "63",
    title: "19/4 LOS ARMAS SE LLEVAN ",
    date: "2024-04-19",
    image: "http://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-19-at-12.46.57.jpeg",
    description: "PERRITOS CALIENTES: CON TODOS LOS FIXINS’. HAMBORGESAS ESTILO AMERICANA: BURGERS VEGANA Y CARNE, SALSA DE INN & OUT, LECHUGA, TOMATE, CEBOLLA CRUDA, KETCHUP, PAPAS FRITAS",
    menuItems: ["PERRITOS CALIENTES: CON TODOS LOS FIXINS’", "HAMBORGESAS ESTILO AMERICANA: BURGERS VEGANA Y CARNE, SALSA DE INN & OUT, LECHUGA, TOMATE, CEBOLLA C"],
    gallery: []
  },
  {
    id: "64",
    title: "12/4 JUSTIN QUEDA COMO RODRIQUEZ ",
    date: "2024-04-12",
    image: "http://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-12-at-14.15.34.jpeg",
    description: "BANDEJA: MUSLO DE CONEJO, HUEVOS, BATATA, CEBOLLA Y MANZANA CARAMELIZADA. EL SANO: BONITO, HUEVO DURO, OLIVAS, LECHUGA Y TOMATE RALLADO",
    menuItems: ["BANDEJA: MUSLO DE CONEJO, HUEVOS, BATATA, CEBOLLA Y MANZANA CARAMELIZADA", "EL SANO: BONITO, HUEVO DURO, OLIVAS, LECHUGA Y TOMATE RALLADO"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-12-at-14.15.30-225x300.jpeg"]
  },
  {
    id: "65",
    title: "5/4 CARLOS (CONTABLE) PRIMERA ALMORZOAR!",
    date: "2024-04-05",
    image: "http://marti13.es/wp-content/uploads/2024/04/PXL_20240405_093205572-scaled.jpg",
    description: "TOKIO: MAYONESA DE WASABI, PEPINO, AGUACATE, ATÚN PICANTE, EDAMAME. CALI: POLLO, BECION, AGUACATE, LECHUGA, SALSA DE RANCH (MOLLY)",
    menuItems: ["TOKIO: MAYONESA DE WASABI, PEPINO, AGUACATE, ATÚN PICANTE, EDAMAME", "CALI: POLLO, BECION, AGUACATE, LECHUGA, SALSA DE RANCH (MOLLY)"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-19.13.34-225x300.jpeg", "http://marti13.es/wp-content/uploads/2024/04/PXL_20240405_091541597-300x226.jpg"]
  },
  {
    id: "66",
    title: "29/3 NIÑAS PRIMERA ALMORZAR A MARTÍ 13",
    date: "2024-03-29",
    image: "http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-17.04.58-1.jpeg",
    description: "FEDE: LOMO ADOBADO EMPANIZADO, PAPAS FRITAS Y SALSA DE QUESO AZUL CON NUECES",
    menuItems: ["FEDE: LOMO ADOBADO EMPANIZADO, PAPAS FRITAS Y SALSA DE QUESO AZUL CON NUECES"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-17.04.58-225x300.jpeg", "http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-17.04.59-300x225.jpeg"]
  },
  {
    id: "67",
    title: "22/3 POST FALLAS ALMORZAR!",
    date: "2024-03-22",
    image: "http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-23-at-10.05.46.jpeg",
    description: "BONITO ENSALDA ESTILO AMERICANA. ENSALADA GAMBA ESTILO AMERICANA",
    menuItems: ["BONITO ENSALDA ESTILO AMERICANA", "ENSALADA GAMBA ESTILO AMERICANA"],
    gallery: []
  },
  {
    id: "68",
    title: "8/3 DIA DE LAS MUJERES",
    date: "2024-03-08",
    image: "http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-15.35.46.jpeg",
    description: "MELISA: SOBRASADA, CEBOLLA CARAMELIZADA, SALCHICHA DE POLLO, MIEL. TORTILLA DE BAR PIZCUETA 14",
    menuItems: ["MELISA: SOBRASADA, CEBOLLA CARAMELIZADA, SALCHICHA DE POLLO, MIEL", "TORTILLA DE BAR PIZCUETA 14"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-15.36.02-300x225.jpeg", "http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-08-at-15.36.46-300x225.jpeg"]
  },
  {
    id: "69",
    title: "1/3 Prohibido Peetardos ",
    date: "2024-03-01",
    image: "http://marti13.es/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-01-at-19.06.11.jpeg",
    description: "CA LA MAR: CALAMAR A LA PLANCHA, RÚCULA, SALSA PESTO, PIÑONES. BANDEJA DEPORTISTA: HUEVOS FRITOS (LIGERAMENTE), BONIATOS FRITOS, SALCHICHAS DE PAVO 97% PROTEINA",
    menuItems: ["CA LA MAR: CALAMAR A LA PLANCHA, RÚCULA, SALSA PESTO, PIÑONES", "BANDEJA DEPORTISTA: HUEVOS FRITOS (LIGERAMENTE), BONIATOS FRITOS, SALCHICHAS DE PAVO 97% PROTEINA"],
    gallery: []
  },
  {
    id: "70",
    title: "22/2 Tyler hacen el sushidillo",
    date: "2024-02-22",
    image: "http://marti13.es/wp-content/uploads/2024/02/PXL_20240223_112431833-scaled.jpg",
    description: "22/2 Tyler hacen el sushidillo",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2024/02/PXL_20240223_101054240-300x226.jpg", "http://marti13.es/wp-content/uploads/2024/02/IMG-20240223-WA0006-169x300.jpg"]
  },
  {
    id: "71",
    title: "16/2 Cara con pneumonia | Florian encontro Tony Hawk 1",
    date: "2024-02-16",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-12.02.32.jpeg",
    description: "EPICURUS: SARDINAS, PIMIENTOS ASADOS, CEBOLLAS ROJAS EN RODAJAS, PEREJIL FRESCO, ALIOLI, PATATAS FRITAS. SENECA: CONTRAMUSLO DE POLLO, PIMIENTOS ASADOS, MANCHEGO, ALIOLI, LECHUGA ROMANA",
    menuItems: ["EPICURUS: SARDINAS, PIMIENTOS ASADOS, CEBOLLAS ROJAS EN RODAJAS, PEREJIL FRESCO, ALIOLI, PATATAS FRI", "SENECA: CONTRAMUSLO DE POLLO, PIMIENTOS ASADOS, MANCHEGO, ALIOLI, LECHUGA ROMANA"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-11.20.19-169x300.jpeg", "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-16.02.50-1-225x300.jpeg"]
  },
  {
    id: "72",
    title: "9/2 fede's primero hole-en-uno",
    date: "2024-02-09",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-15.28.07.jpeg",
    description: "BANDINI: BERENEJA, CONFITURA DE TOMATE, QUESO DE CABRA, AJOS TIERNOS Y HABAS. TEXAS: PULLED CONEJO, CEBOLLA ENCURTIDA, MAHONESA, PAPAS FRITAS, SALSA DE BBQ Y LECHUGA FRESCA",
    menuItems: ["BANDINI: BERENEJA, CONFITURA DE TOMATE, QUESO DE CABRA, AJOS TIERNOS Y HABAS", "TEXAS: PULLED CONEJO, CEBOLLA ENCURTIDA, MAHONESA, PAPAS FRITAS, SALSA DE BBQ Y LECHUGA FRESCA"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-15.28.11-225x300.jpeg", "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-15.28.04-225x300.jpeg"]
  },
  {
    id: "73",
    title: "2/2/2024 aniversario y pizcuetzario 14  ",
    date: "2024-02-02",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-02-at-15.44.06-e1706890818860.jpeg",
    description: "TORTILLA DE BAR PIZCUETA 14. CAMPERO",
    menuItems: ["TORTILLA DE BAR PIZCUETA 14", "CAMPERO"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-02-at-15.44.02-e1706890597929-291x300.jpeg", "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-02-at-15.43.58-e1706890739334-300x261.jpeg"]
  },
  {
    id: "74",
    title: "26/1/2024 Molly arreglando su 'slice'",
    date: "2024-01-26",
    image: "http://marti13.es/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-26-at-14.01.40.jpeg",
    description: "BOCADILLO ESTILO EUSKADI. FULL EQUIP",
    menuItems: ["BOCADILLO ESTILO EUSKADI", "FULL EQUIP"],
    gallery: ["http://marti13.es/wp-content/uploads/2024/01/bocadillo-de-anchoas-de-la-escala-foto-principal-150x150.webp"]
  },
  {
    id: "75",
    title: "19/1/2024 Inaugural Almorzar ",
    date: "2024-01-19",
    image: "http://marti13.es/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-19-at-16.08.58.jpeg",
    description: "CHIVITO ESTILO CALIFORNIA. BOCADILLO CLÁSICO CON TOMATE, BONITO Y OLIVAS",
    menuItems: ["CHIVITO ESTILO CALIFORNIA", "BOCADILLO CLÁSICO CON TOMATE, BONITO Y OLIVAS"],
    gallery: ["https://marti13.es/wp-content/uploads/2017/03/145466_635x360.jpg"]
  },
  {
    id: "76",
    title: "31/4 llega el verano",
    date: "2024-04-31",
    image: "http://marti13.es/wp-content/uploads/2024/06/PXL_20240531_102828148-scaled.jpg",
    description: "31/4 llega el verano",
    menuItems: [],
    gallery: ["http://marti13.es/wp-content/uploads/2024/06/IMG-20240531-WA0017-1024x768.jpg"]
  },
];

// Hall of Fame - Signature dishes
export const hallOfFame: HallOfFameItem[] = [
  {
    id: "1",
    name: "Tortilla de Bar Pizcueta 14",
    date: "2024-02-02",
    eventTitle: "Aniversario y Pizcuetzario 14",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-02-at-15.44.02-e1706890597929-291x300.jpeg",
    chef: "Fede"
  },
  {
    id: "2",
    name: "Texas Pulled Conejo",
    date: "2024-02-09",
    eventTitle: "Fede's Primero Hole-en-uno",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-15.28.07.jpeg",
    chef: "Justin"
  },
  {
    id: "3",
    name: "Chivito Estilo California",
    date: "2024-01-19",
    eventTitle: "Inaugural Almorzar",
    image: "http://marti13.es/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-19-at-16.08.58.jpeg",
    chef: "Justin"
  },
  {
    id: "4",
    name: "Bocadillo Estilo Euskadi",
    date: "2024-01-26",
    eventTitle: "Molly arreglando su slice",
    image: "http://marti13.es/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-26-at-14.01.40.jpeg",
    chef: "Molly"
  },
  {
    id: "5",
    name: "Epicurus - Sardinas",
    date: "2024-02-16",
    eventTitle: "Cara con pneumonia",
    image: "http://marti13.es/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-12.02.32.jpeg",
    chef: "Tyler"
  },
  {
    id: "6",
    name: "Sushidillo de Tyler",
    date: "2024-02-22",
    eventTitle: "Tyler hacen el sushidillo",
    image: "http://marti13.es/wp-content/uploads/2024/02/PXL_20240223_112431833-scaled.jpg",
    chef: "Tyler"
  },
  {
    id: "7",
    name: "Hamburguesas de Potro",
    date: "2025-10-24",
    eventTitle: "Vuelve al Potro",
    image: "http://marti13.es/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-13.59.27.jpeg",
    chef: "Justin"
  },
  {
    id: "8",
    name: "Tokio - Atún Picante",
    date: "2024-04-05",
    eventTitle: "Carlos Primera Almorzar",
    image: "http://marti13.es/wp-content/uploads/2024/04/PXL_20240405_093205572-scaled.jpg",
    chef: "Tang"
  },
  {
    id: "9",
    name: "Philly Cheesesteak",
    date: "2025-05-09",
    eventTitle: "Dia de Philadelphia Cheesesteak",
    image: "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-09-at-19.27.14-3.jpeg",
    chef: "Justin"
  },
  {
    id: "10",
    name: "Albondigas IKEA",
    date: "2025-05-23",
    eventTitle: "Albondigas IKEA y Tex Mex",
    image: "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-23-at-13.37.24.jpeg",
    chef: "Tyler"
  },
  {
    id: "11",
    name: "Fish y Chips",
    date: "2025-06-27",
    eventTitle: "Verano y Se Marchan",
    image: "http://marti13.es/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-11.56.47.jpeg",
    chef: "Justin"
  },
  {
    id: "12",
    name: "Currywurst Alemana",
    date: "2025-05-30",
    eventTitle: "Don Perrito en la oficina",
    image: "http://marti13.es/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-30-at-12.51.42.jpeg",
    chef: "Florian"
  }
];

// Menu categories
export const menuCategories = [
  {
    name: "Tortillas",
    items: [
      { name: "Tortilla de Bar Pizcueta 14", description: "Estilo gallego proporcionado por Fede", price: "Clásico" },
      { name: "Tortilla a la Justino", description: "Primera tortilla de Justin", price: "Especial" },
      { name: "Tortilla de Óscar", description: "Tortilla de toda la vida", price: "Tradicional" }
    ]
  },
  {
    name: "Hamburguesas",
    items: [
      { name: "Hamburguesas de Potro", description: "Carne de potro con todos los fixins", price: "Premium" },
      { name: "Hamburguesas Estilo Americana", description: "Salsa de Inn & Out, lechuga, tomate", price: "Clásico" },
      { name: "Hamburguesas de Alubias", description: "Fabada asturiana estilo Chez Justin", price: "Vegano" },
      { name: "Hamburguesas de Conejo", description: "Pulled conejo con BBQ", price: "Especial" }
    ]
  },
  {
    name: "Pescados",
    items: [
      { name: "Bacalao con Pesto Alioli", description: "Pescado fresco con alioli casero", price: "Premium" },
      { name: "Salmón Marinado", description: "Estilo Rabbi Tang", price: "Especial" },
      { name: "Fish y Chips", description: "Estilo británico", price: "Clásico" },
      { name: "Calamari Frito ala Romana", description: "Calamar a la plancha", price: "Tradicional" }
    ]
  },
  {
    name: "Carnes",
    items: [
      { name: "Texas Pulled Conejo", description: "Cebolla encurtida, mahonesa, BBQ", price: "Especial" },
      { name: "Chivito Estilo California", description: "Con guacamole y alioli", price: "Premium" },
      { name: "Pollo de Parma", description: "Estilo horneado mafioso", price: "Clásico" },
      { name: "Entrecot El Comboi", description: "Con mermelada de bacon casera", price: "Premium" }
    ]
  },
  {
    name: "Especialidades",
    items: [
      { name: "Philly Cheesesteak", description: "Auténtico estilo Philadelphia", price: "Especial" },
      { name: "Currywurst", description: "Día de Alemania", price: "Internacional" },
      { name: "Albondigas IKEA", description: "Estilo sueco con salsa", price: "Especial" },
      { name: "Tacos de Carne Picada", description: "Día de partido", price: "Fiesta" }
    ]
  }
];
