const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Read the events.ts file and extract the events array
const eventsFile = fs.readFileSync(path.join(__dirname, 'client/src/data/events.ts'), 'utf-8');

// Parse the events from the TypeScript file
function parseEvents(content) {
  const events = [];
  
  // Find the events array
  const eventsMatch = content.match(/export const events: Event\[\] = \[([\s\S]*?)\n\];/);
  if (!eventsMatch) {
    console.error('Could not find events array');
    return [];
  }
  
  const eventsContent = eventsMatch[1];
  
  // Split by event objects
  const eventBlocks = eventsContent.split(/\n  \{/).slice(1);
  
  for (const block of eventBlocks) {
    const event = {};
    
    // Extract id
    const idMatch = block.match(/id: ["'](\d+)["']/);
    if (idMatch) event.id = parseInt(idMatch[1]) + 1; // DB IDs start at 1
    
    // Extract title
    const titleMatch = block.match(/title: ["'](.+?)["']/);
    if (titleMatch) event.title = titleMatch[1];
    
    // Extract gallery
    const galleryMatch = block.match(/gallery: \[([\s\S]*?)\]/);
    if (galleryMatch) {
      const galleryContent = galleryMatch[1];
      const urls = galleryContent.match(/"https?:\/\/[^"]+"/g) || [];
      event.gallery = urls.map(u => u.replace(/"/g, ''));
    } else {
      event.gallery = [];
    }
    
    // Extract menuItems
    const menuMatch = block.match(/menuItems: \[([\s\S]*?)\]/);
    if (menuMatch) {
      const menuContent = menuMatch[1];
      const items = menuContent.match(/"[^"]+"/g) || [];
      event.menuItems = items.map(i => i.replace(/"/g, ''));
    } else {
      event.menuItems = [];
    }
    
    if (event.id && event.title) {
      events.push(event);
    }
  }
  
  return events;
}

async function updateGalleries() {
  const conn = await mysql.createConnection({
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '27uAS2YbEebyHJd.root',
    password: 'yhV4sd0C6sk6oH2H',
    database: 'test',
    ssl: { rejectUnauthorized: true }
  });

  const events = parseEvents(eventsFile);
  console.log(`Found ${events.length} events to update`);

  let updated = 0;
  for (const event of events) {
    try {
      const galleryJson = JSON.stringify(event.gallery);
      const menuItemsJson = JSON.stringify(event.menuItems);
      
      await conn.query(
        'UPDATE events SET gallery = ?, menuItems = ? WHERE id = ?',
        [galleryJson, menuItemsJson, event.id]
      );
      
      if (event.gallery.length > 0 || event.menuItems.length > 0) {
        console.log(`Updated event ${event.id}: ${event.title} - ${event.gallery.length} gallery photos, ${event.menuItems.length} menu items`);
        updated++;
      }
    } catch (err) {
      console.error(`Error updating event ${event.id}:`, err.message);
    }
  }

  console.log(`\nUpdated ${updated} events with gallery/menu data`);
  
  // Verify a few events
  const [rows] = await conn.query('SELECT id, title, gallery, menuItems FROM events WHERE id IN (1, 2, 3) ORDER BY id');
  console.log('\nVerification:');
  for (const row of rows) {
    const gallery = JSON.parse(row.gallery || '[]');
    const menuItems = JSON.parse(row.menuItems || '[]');
    console.log(`Event ${row.id}: ${gallery.length} gallery photos, ${menuItems.length} menu items`);
  }

  await conn.end();
}

updateGalleries().catch(console.error);
