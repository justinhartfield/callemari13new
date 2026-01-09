// Los Cocineros - Chef profiles with stats and signature dishes
// Data extracted from marti13.es events and food items

export interface Chef {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  bio: string;
  specialty: string;
  stats: {
    eventsCooked: number;
    signatureDishes: number;
    hallOfFameEntries: number;
  };
  signatureDishes: {
    name: string;
    image: string;
    description: string;
  }[];
  funFact: string;
}

export const chefs: Chef[] = [
  {
    id: "1",
    name: "Justin",
    nickname: "El Fundador",
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400",
    bio: "Fundador del Gremio del Almorzar y maestro de los bocadillos creativos. Su pasión por la cocina americana fusionada con ingredientes valencianos ha dado lugar a algunas de las creaciones más memorables del club.",
    specialty: "Bocadillos Creativos & Fusión Americana",
    stats: {
      eventsCooked: 35,
      signatureDishes: 42,
      hallOfFameEntries: 6
    },
    signatureDishes: [
      {
        name: "Texas Pulled Conejo",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/02/GAwDIFWXsAAZdTb.jpeg",
        description: "Conejo deshilachado estilo Texas con salsa BBQ casera"
      },
      {
        name: "Chivito Estilo California",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2017/03/chivito_valenciano_NoticiaAmpliada.jpg",
        description: "El bocadillo inaugural que dio inicio al gremio"
      },
      {
        name: "Valenciano - Figatells",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/06/Figatells-1200x828-1.webp",
        description: "Figatells tradicionales con toque moderno"
      }
    ],
    funFact: "Ha cocinado en más eventos que cualquier otro miembro del gremio"
  },
  {
    id: "2",
    name: "Tyler",
    nickname: "El Experimentador",
    avatar: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400",
    bio: "Conocido por sus creaciones atrevidas y su dominio de los sabores mediterráneos. Tyler no tiene miedo de experimentar con ingredientes poco convencionales.",
    specialty: "Pescados & Mariscos Creativos",
    stats: {
      eventsCooked: 28,
      signatureDishes: 35,
      hallOfFameEntries: 5
    },
    signatureDishes: [
      {
        name: "Epicurus - Sardinas",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/02/download-1.jpg",
        description: "Sardinas con escalivada y alioli de limón"
      },
      {
        name: "Tang - Calabaza Asada",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/02/long_french_bread_sandwhich_of_Calabaza_asada_salchicha_de_pavo_cebolla_asada_pinones_miel_de_limon_huevos_cocinado.png",
        description: "Calabaza asada con salchicha de pavo y piñones"
      },
      {
        name: "Calamares Siglo XIX",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/05/19th_century_calamari_dish_with_Tomate_pasas_pinones_cebolla_morada_aceitunas_alcaparras_Que_fantasia_png.png",
        description: "Receta histórica con tomate, pasas y piñones"
      }
    ],
    funFact: "Una vez cocinó con pneumonía y aún así ganó el Hall of Fame"
  },
  {
    id: "3",
    name: "Fede",
    nickname: "El Clásico",
    avatar: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400",
    bio: "Defensor de la cocina tradicional valenciana. Sus tortillas son legendarias y su técnica impecable. Fede demuestra que a veces lo simple es lo mejor.",
    specialty: "Tortillas & Cocina Tradicional",
    stats: {
      eventsCooked: 22,
      signatureDishes: 18,
      hallOfFameEntries: 2
    },
    signatureDishes: [
      {
        name: "Tortilla de Bar Pizcueta 14",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/01/Pizcueta-14-3-1024x680-1.jpg",
        description: "La tortilla que rompió todos los récords"
      },
      {
        name: "Lomo Adobado Empanizado",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/03/larga_bocadillo_con_bacalao_o_salmon_cebolla_ajo_tierna_mermelada_de_naranja_aceite_de_oliva_rucula_tapenade.png",
        description: "Con papas fritas y salsa de queso azul"
      }
    ],
    funFact: "Su primer hole-in-one en golf coincidió con su mejor almorzar"
  },
  {
    id: "4",
    name: "Molly",
    nickname: "La Vasca",
    avatar: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400",
    bio: "Aporta los sabores del País Vasco al gremio. Sus pintxos y bocadillos estilo Euskadi han conquistado a todos los miembros.",
    specialty: "Cocina Vasca & Pintxos",
    stats: {
      eventsCooked: 15,
      signatureDishes: 12,
      hallOfFameEntries: 1
    },
    signatureDishes: [
      {
        name: "Bocadillo Estilo Euskadi",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/01/bocadillo-de-anchoas-de-la-escala-foto-principal.webp",
        description: "Anchoas, pimientos y alioli vasco"
      }
    ],
    funFact: "Arregló su slice en golf el mismo día que cocinó su mejor bocadillo"
  },
  {
    id: "5",
    name: "Tang",
    nickname: "El Asiático",
    avatar: "https://images.unsplash.com/photo-1583394293214-28ece9ce8f7a?w=400",
    bio: "Fusiona sabores asiáticos con la tradición del almorzar valenciano. Sus creaciones con wasabi, atún y sabores umami son únicas en el gremio.",
    specialty: "Fusión Asiática",
    stats: {
      eventsCooked: 12,
      signatureDishes: 15,
      hallOfFameEntries: 1
    },
    signatureDishes: [
      {
        name: "Tokio - Atún Picante",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/04/bocadillo_larga_pan_de_frances_Mayonesa_de_wasabi_pepino_aguacate_atun_picante_edamame.png",
        description: "Atún picante con mayonesa de wasabi y edamame"
      }
    ],
    funFact: "Introdujo el wasabi al vocabulario del gremio"
  },
  {
    id: "6",
    name: "Óscar",
    nickname: "El Tradicional",
    avatar: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400",
    bio: "Maestro de la tortilla española clásica. Óscar defiende que la perfección está en la simplicidad y la técnica depurada.",
    specialty: "Tortilla Española Clásica",
    stats: {
      eventsCooked: 8,
      signatureDishes: 6,
      hallOfFameEntries: 1
    },
    signatureDishes: [
      {
        name: "Tortilla de toda la vida",
        image: "https://cfls.b-cdn.net/wp-content/uploads/2024/09/Spanish_Omelette.jpeg",
        description: "La tortilla española perfecta, sin adornos"
      }
    ],
    funFact: "Su primera almorzar fue un éxito rotundo"
  }
];

// Calculate total stats
export const gremioStats = {
  totalChefs: chefs.length,
  totalEvents: chefs.reduce((acc, chef) => acc + chef.stats.eventsCooked, 0),
  totalDishes: chefs.reduce((acc, chef) => acc + chef.stats.signatureDishes, 0),
  hallOfFameTotal: chefs.reduce((acc, chef) => acc + chef.stats.hallOfFameEntries, 0)
};
