/**
 * Seed script to import existing static data into the database
 * Run with: node seed-data.mjs
 */

import mysql from 'mysql2/promise';

// Database connection
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

// Parse the events data from the static file
// We'll read the TypeScript file and extract the data
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function seedDatabase() {
  const connection = await mysql.createConnection(DATABASE_URL);
  
  try {
    console.log('Connected to database');
    
    // Read the events.ts file
    const eventsFile = readFileSync(join(__dirname, 'client/src/data/events.ts'), 'utf-8');
    
    // Extract events array using regex
    const eventsMatch = eventsFile.match(/export const events: Event\[\] = \[([\s\S]*?)\];/);
    if (!eventsMatch) {
      console.error('Could not find events array');
      return;
    }
    
    // Parse events manually (simplified approach)
    const eventBlocks = eventsFile.split(/\n  \{[\s]*\n    id:/g).slice(1);
    
    console.log(`Found ${eventBlocks.length} events to import`);
    
    // Insert events
    for (let i = 0; i < eventBlocks.length; i++) {
      const block = eventBlocks[i];
      
      // Extract fields
      const titleMatch = block.match(/title: "([^"]+)"/);
      const dateMatch = block.match(/date: "([^"]+)"/);
      const descMatch = block.match(/description: "([^"]+)"/);
      const imageMatch = block.match(/image: "([^"]+)"/);
      const chefMatch = block.match(/chef: "([^"]+)"/);
      
      // Extract menuItems array
      const menuMatch = block.match(/menuItems: \[([\s\S]*?)\]/);
      let menuItems = [];
      if (menuMatch) {
        const menuStr = menuMatch[1];
        menuItems = menuStr.match(/"([^"]+)"/g)?.map(s => s.replace(/"/g, '')) || [];
      }
      
      // Extract gallery array
      const galleryMatch = block.match(/gallery: \[([\s\S]*?)\]/);
      let gallery = [];
      if (galleryMatch) {
        const galleryStr = galleryMatch[1];
        gallery = galleryStr.match(/"([^"]+)"/g)?.map(s => s.replace(/"/g, '')) || [];
      }
      
      if (titleMatch && dateMatch) {
        try {
          await connection.execute(
            `INSERT INTO events (title, date, description, image, chef, menuItems, gallery, isPublished) 
             VALUES (?, ?, ?, ?, ?, ?, ?, true)`,
            [
              titleMatch[1],
              dateMatch[1],
              descMatch ? descMatch[1] : null,
              imageMatch ? imageMatch[1] : null,
              chefMatch ? chefMatch[1] : null,
              JSON.stringify(menuItems),
              JSON.stringify(gallery)
            ]
          );
          console.log(`Imported event: ${titleMatch[1]}`);
        } catch (err) {
          console.error(`Error importing event ${titleMatch[1]}:`, err.message);
        }
      }
    }
    
    // Extract and import Hall of Fame items
    const hofMatch = eventsFile.match(/export const hallOfFame: HallOfFameItem\[\] = \[([\s\S]*?)\];/);
    if (hofMatch) {
      const hofBlocks = hofMatch[1].split(/\n  \{[\s]*\n    id:/g).slice(1);
      console.log(`Found ${hofBlocks.length} Hall of Fame items to import`);
      
      for (const block of hofBlocks) {
        const nameMatch = block.match(/name: "([^"]+)"/);
        const descMatch = block.match(/description: "([^"]+)"/);
        const imageMatch = block.match(/image: "([^"]+)"/);
        const chefMatch = block.match(/chef: "([^"]+)"/);
        const categoryMatch = block.match(/category: "([^"]+)"/);
        const rankMatch = block.match(/rank: (\d+)/);
        
        if (nameMatch) {
          try {
            await connection.execute(
              `INSERT INTO foodItems (name, description, image, chef, category, \`rank\`, isPublished) 
               VALUES (?, ?, ?, ?, ?, ?, true)`,
              [
                nameMatch[1],
                descMatch ? descMatch[1] : null,
                imageMatch ? imageMatch[1] : null,
                chefMatch ? chefMatch[1] : null,
                categoryMatch ? categoryMatch[1] : null,
                rankMatch ? parseInt(rankMatch[1]) : null
              ]
            );
            console.log(`Imported food item: ${nameMatch[1]}`);
          } catch (err) {
            console.error(`Error importing food item ${nameMatch[1]}:`, err.message);
          }
        }
      }
    }
    
    // Import chefs from chefs.ts
    const chefsFile = readFileSync(join(__dirname, 'client/src/data/chefs.ts'), 'utf-8');
    const chefsMatch = chefsFile.match(/export const chefs: Chef\[\] = \[([\s\S]*?)\];/);
    if (chefsMatch) {
      const chefBlocks = chefsMatch[1].split(/\n  \{[\s]*\n    id:/g).slice(1);
      console.log(`Found ${chefBlocks.length} chefs to import`);
      
      for (const block of chefBlocks) {
        const nameMatch = block.match(/name: "([^"]+)"/);
        const nicknameMatch = block.match(/nickname: "([^"]+)"/);
        const avatarMatch = block.match(/avatar: "([^"]+)"/);
        const bioMatch = block.match(/bio: "([^"]+)"/);
        const specialtyMatch = block.match(/specialty: "([^"]+)"/);
        const eventsMatch = block.match(/eventsHosted: (\d+)/);
        const dishesMatch = block.match(/dishesCreated: (\d+)/);
        
        // Extract signatureDishes array
        const sigMatch = block.match(/signatureDishes: \[([\s\S]*?)\]/);
        let signatureDishes = [];
        if (sigMatch) {
          const sigStr = sigMatch[1];
          signatureDishes = sigStr.match(/"([^"]+)"/g)?.map(s => s.replace(/"/g, '')) || [];
        }
        
        if (nameMatch) {
          try {
            await connection.execute(
              `INSERT INTO chefs (name, nickname, avatar, bio, specialty, signatureDishes, eventsHosted, dishesCreated, isActive) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, true)`,
              [
                nameMatch[1],
                nicknameMatch ? nicknameMatch[1] : null,
                avatarMatch ? avatarMatch[1] : null,
                bioMatch ? bioMatch[1] : null,
                specialtyMatch ? specialtyMatch[1] : null,
                JSON.stringify(signatureDishes),
                eventsMatch ? parseInt(eventsMatch[1]) : 0,
                dishesMatch ? parseInt(dishesMatch[1]) : 0
              ]
            );
            console.log(`Imported chef: ${nameMatch[1]}`);
          } catch (err) {
            console.error(`Error importing chef ${nameMatch[1]}:`, err.message);
          }
        }
      }
    }
    
    console.log('Seed completed!');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await connection.end();
  }
}

seedDatabase();
