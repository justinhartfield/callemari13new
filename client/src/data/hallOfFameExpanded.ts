// Expanded Hall of Fame with categories
// Signature dishes that have earned legendary status

export interface HallOfFameCategory {
  name: string;
  icon: string;
  items: HallOfFameItem[];
}

export interface HallOfFameItem {
  id: string;
  name: string;
  date: string;
  eventTitle: string;
  image: string;
  chef: string;
  description?: string;
}

export const expandedHallOfFame: HallOfFameCategory[] = [
  {
    name: "Bocadillos Legendarios",
    icon: "🥖",
    items: [
      {
        id: "1",
        name: "Chivito Estilo California",
        date: "2024-01-19",
        eventTitle: "Inaugural Almorzar",
        image: "http://marti13.es/wp-content/uploads/2017/03/chivito_valenciano_NoticiaAmpliada.jpg",
        chef: "Justin"
      },
      {
        id: "2",
        name: "Texas Pulled Conejo",
        date: "2024-02-09",
        eventTitle: "Fede's Primero Hole-en-uno",
        image: "http://marti13.es/wp-content/uploads/2024/02/GAwDIFWXsAAZdTb.jpeg",
        chef: "Justin"
      },
      {
        id: "3",
        name: "Epicurus - Sardinas",
        date: "2024-02-16",
        eventTitle: "Cara con pneumonia",
        image: "http://marti13.es/wp-content/uploads/2024/02/download-1.jpg",
        chef: "Tyler"
      },
      {
        id: "4",
        name: "Tang - Calabaza Asada",
        date: "2024-02-22",
        eventTitle: "Tyler hacen el sushidillo",
        image: "http://marti13.es/wp-content/uploads/2024/02/long_french_bread_sandwhich_of_Calabaza_asada_salchicha_de_pavo_cebolla_asada_pinones_miel_de_limon_huevos_cocinado.png",
        chef: "Tyler"
      },
      {
        id: "5",
        name: "Melisa - Sobrasada",
        date: "2024-03-08",
        eventTitle: "Dia de las Mujeres",
        image: "http://marti13.es/wp-content/uploads/2024/03/7jeMorcjS5ariAb2e9lanQ.png",
        chef: "Justin"
      },
      {
        id: "6",
        name: "Tokio - Atún Picante",
        date: "2024-04-05",
        eventTitle: "Carlos Primera Almorzar",
        image: "http://marti13.es/wp-content/uploads/2024/04/bocadillo_larga_pan_de_frances_Mayonesa_de_wasabi_pepino_aguacate_atun_picante_edamame.png",
        chef: "Tang"
      },
      {
        id: "7",
        name: "Bocadillo Estilo Euskadi",
        date: "2024-01-26",
        eventTitle: "Molly arreglando su slice",
        image: "http://marti13.es/wp-content/uploads/2024/01/bocadillo-de-anchoas-de-la-escala-foto-principal.webp",
        chef: "Molly"
      },
      {
        id: "8",
        name: "SENECA - Contramuslo de Pollo",
        date: "2024-02-23",
        eventTitle: "Sushidillo",
        image: "http://marti13.es/wp-content/uploads/2024/02/bocata-feb-24.jpg",
        chef: "Justin"
      },
      {
        id: "9",
        name: "Mafioso - Pollo Parma",
        date: "2024-05-03",
        eventTitle: "Corto en gente pero largo en diversión",
        image: "http://marti13.es/wp-content/uploads/2024/05/make_a_long_french_bread_style_bocadillo_featuring_Baked_Chicken_Parm.png",
        chef: "Justin"
      },
      {
        id: "10",
        name: "Valenciano - Figatells",
        date: "2024-06-28",
        eventTitle: "Verano Empiezan",
        image: "http://marti13.es/wp-content/uploads/2024/06/Figatells-1200x828-1.webp",
        chef: "Justin"
      },
    ]
  },
  {
    name: "Tortillas Memorables",
    icon: "🍳",
    items: [
      {
        id: "11",
        name: "Tortilla de Bar Pizcueta 14",
        date: "2024-02-02",
        eventTitle: "Aniversario y Pizcuetzario 14",
        image: "http://marti13.es/wp-content/uploads/2024/01/Pizcueta-14-3-1024x680-1.jpg",
        chef: "Fede"
      },
      {
        id: "12",
        name: "Tortilla de Tyler",
        date: "2024-05-10",
        eventTitle: "Tortilla francesa especial",
        image: "http://marti13.es/wp-content/uploads/2024/05/Tortilla_francesa_de_espincas_y_cebolla_habas_con_ajo_y_crema_de_queso_de_cabra.png",
        chef: "Tyler"
      },
      {
        id: "13",
        name: "ÓSCAR: Tortilla de toda la vida",
        date: "2024-09-20",
        eventTitle: "Óscar Primera Almorzar",
        image: "http://marti13.es/wp-content/uploads/2024/09/Spanish_Omelette.jpeg",
        chef: "Óscar"
      },
    ]
  },
  {
    name: "Bandejas Épicas",
    icon: "🍽️",
    items: [
      {
        id: "14",
        name: "Bandeja Deportista",
        date: "2024-02-23",
        eventTitle: "Para los atletas",
        image: "http://marti13.es/wp-content/uploads/2024/02/Bandeja_deportista__Huevos_cocido_boniatos_fritos_salchichas_de_pavo_97_proteina.png",
        chef: "Justin"
      },
      {
        id: "15",
        name: "Bandeja de Conejo",
        date: "2024-04-12",
        eventTitle: "Semana Santa",
        image: "http://marti13.es/wp-content/uploads/2024/04/BANDEJA_de_muslo_de_conejo_huevos_batata_cebolla_y_manzana_caramelizada_salsa_de_oenogarum.png",
        chef: "Tyler"
      },
    ]
  },
  {
    name: "Pescados y Mariscos",
    icon: "🐟",
    items: [
      {
        id: "16",
        name: "Calamares Siglo XIX",
        date: "2024-05-24",
        eventTitle: "Batalla de puntuación más alta",
        image: "http://marti13.es/wp-content/uploads/2024/05/19th_century_calamari_dish_with_Tomate_pasas_pinones_cebolla_morada_aceitunas_alcaparras_Que_fantasia_png.png",
        chef: "Tyler"
      },
      {
        id: "17",
        name: "Rabbi Tyler - Salmón",
        date: "2024-06-14",
        eventTitle: "Mery Jane Berlin",
        image: "http://marti13.es/wp-content/uploads/2024/09/Brown_Sugar_Salmon.jpeg",
        chef: "Tyler"
      },
      {
        id: "18",
        name: "Sardinas Agridulces Medieval",
        date: "2024-05-24",
        eventTitle: "Receta del siglo XIV",
        image: "http://marti13.es/wp-content/uploads/2024/05/Screenshot-2024-05-25-at-6.12.15 AM.png",
        chef: "Justin"
      },
    ]
  },
  {
    name: "Hamburguesas de Leyenda",
    icon: "🍔",
    items: [
      {
        id: "19",
        name: "Hamburguesas de Potro y Pavo",
        date: "2024-07-05",
        eventTitle: "4 de Julio",
        image: "http://marti13.es/wp-content/uploads/2024/07/Hamburguesas_de_Potro_y_Pavo.png",
        chef: "Justin"
      },
      {
        id: "20",
        name: "Hamburguesas Estilo Americana",
        date: "2024-04-19",
        eventTitle: "Inn & Out style",
        image: "http://marti13.es/wp-content/uploads/2024/04/a_spead_of_inn__out_burgers.png",
        chef: "Justin"
      },
    ]
  },
];
