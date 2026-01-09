const mysql = require('mysql2/promise');
const fs = require('fs');

// Import static data
const eventsFile = fs.readFileSync('./client/src/data/events.ts', 'utf-8');
const foodItemsFile = fs.readFileSync('./client/src/data/allFoodItems.ts', 'utf-8');
const chefsFile = fs.readFileSync('./client/src/data/chefs.ts', 'utf-8');

// Simple parser for TypeScript exports
function parseEvents(content) {
  const events = [];
  const regex = /{\s*id:\s*["'](\d+)["'],\s*title:\s*["']([^"']+)["'],\s*date:\s*["']([^"']+)["'],\s*description:\s*["']([^"']*?)["'],\s*image:\s*["']([^"']*?)["'],(?:\s*chef:\s*["']([^"']*?)["'],)?(?:\s*menuItems:\s*\[([^\]]*)\],)?(?:\s*gallery:\s*\[([^\]]*)\],)?/g;
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    const menuItems = match[7] ? match[7].split(',').map(s => s.trim().replace(/["']/g, '')).filter(s => s) : [];
    const gallery = match[8] ? match[8].split(',').map(s => s.trim().replace(/["']/g, '')).filter(s => s) : [];
    
    events.push({
      id: parseInt(match[1]),
      title: match[2],
      date: match[3],
      description: match[4] || null,
      image: match[5] || null,
      chef: match[6] || 'Justin',
      menuItems: menuItems,
      gallery: gallery
    });
  }
  return events;
}

async function seedDatabase() {
  const conn = await mysql.createConnection({
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '27uAS2YbEebyHJd.root',
    password: 'yhV4sd0C6sk6oH2H',
    database: 'test',
    ssl: { rejectUnauthorized: true }
  });

  console.log('Connected to TiDB');

  // Seed events - use a simpler approach
  const eventMatches = eventsFile.matchAll(/id:\s*["'](\d+)["']/g);
  const eventIds = [...eventMatches].map(m => m[1]);
  console.log(`Found ${eventIds.length} events in static file`);

  // Insert events one by one from the static data
  const eventRegex = /{\s*id:\s*["'](\d+)["'],\s*title:\s*["'`]([^"'`]+)["'`],\s*date:\s*["']([^"']+)["'],\s*description:\s*["'`]([^"'`]*?)["'`],\s*image:\s*["']([^"']*?)["']/gs;
  
  let eventCount = 0;
  let match;
  while ((match = eventRegex.exec(eventsFile)) !== null) {
    try {
      await conn.query(
        'INSERT INTO events (title, date, description, image, chef, menuItems, gallery, isPublished) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [match[2], match[3], match[4] || null, match[5] || null, 'Justin', '[]', '[]', true]
      );
      eventCount++;
    } catch (e) {
      // Skip duplicates
    }
  }
  console.log(`Seeded ${eventCount} events`);

  // Seed food items
  const foodRegex = /name:\s*["']([^"']+)["'],\s*description:\s*["']([^"']*?)["'],\s*image:\s*["']([^"']*?)["'],\s*chef:\s*["']([^"']*?)["'],\s*category:\s*["']([^"']*?)["'],\s*rank:\s*(null|\d+)/gs;
  
  let foodCount = 0;
  while ((match = foodRegex.exec(foodItemsFile)) !== null) {
    try {
      const rank = match[6] === 'null' ? null : parseInt(match[6]);
      await conn.query(
        'INSERT INTO foodItems (name, description, image, chef, category, `rank`, isPublished) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [match[1], match[2] || null, match[3] || null, match[4] || null, match[5] || null, rank, true]
      );
      foodCount++;
    } catch (e) {
      // Skip duplicates
    }
  }
  console.log(`Seeded ${foodCount} food items`);

  // Seed chefs
  const chefData = [
    { name: 'Justin', nickname: 'El Gringo', specialty: 'Texas BBQ & Fusion', eventsHosted: 30, dishesCreated: 25 },
    { name: 'Tyler', nickname: 'Rabbi Tyler', specialty: 'Mediterranean & Seafood', eventsHosted: 20, dishesCreated: 18 },
    { name: 'Fede', nickname: 'El Maestro', specialty: 'Tortillas & Traditional', eventsHosted: 15, dishesCreated: 12 },
    { name: 'Óscar', nickname: 'El Valenciano', specialty: 'Valencian Classics', eventsHosted: 12, dishesCreated: 10 },
    { name: 'Tang', nickname: 'El Asiático', specialty: 'Asian Fusion', eventsHosted: 8, dishesCreated: 8 },
    { name: 'Nero', nickname: 'El Italiano', specialty: 'Italian Fusion', eventsHosted: 5, dishesCreated: 5 }
  ];

  for (const chef of chefData) {
    try {
      await conn.query(
        'INSERT INTO chefs (name, nickname, specialty, eventsHosted, dishesCreated, isActive) VALUES (?, ?, ?, ?, ?, ?)',
        [chef.name, chef.nickname, chef.specialty, chef.eventsHosted, chef.dishesCreated, true]
      );
    } catch (e) {
      // Skip duplicates
    }
  }
  console.log(`Seeded ${chefData.length} chefs`);

  await conn.end();
  console.log('Database seeding complete!');
}

seedDatabase().catch(e => console.error('Error:', e));
