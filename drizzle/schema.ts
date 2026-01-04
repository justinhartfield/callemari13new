import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Events table for storing almorzar events
 */
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  date: varchar("date", { length: 10 }).notNull(), // YYYY-MM-DD format
  description: text("description"),
  image: text("image"), // Main event image URL
  gallery: json("gallery").$type<string[]>(), // Array of gallery image URLs
  menuItems: json("menuItems").$type<string[]>(), // Array of menu item names
  chef: varchar("chef", { length: 100 }), // Chef name
  isPublished: boolean("isPublished").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

/**
 * Food items table for Hall of Fame
 */
export const foodItems = mysqlTable("foodItems", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  image: text("image"), // Food item image URL
  category: varchar("category", { length: 100 }), // Bocadillos, Tortillas, etc.
  chef: varchar("chef", { length: 100 }), // Chef who created it
  eventId: int("eventId"), // Reference to event where it was served
  rank: int("rank"), // Ranking within category (1, 2, 3 for top items)
  isPublished: boolean("isPublished").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type FoodItem = typeof foodItems.$inferSelect;
export type InsertFoodItem = typeof foodItems.$inferInsert;

/**
 * Chefs table for Los Cocineros section
 */
export const chefs = mysqlTable("chefs", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  nickname: varchar("nickname", { length: 100 }),
  avatar: text("avatar"), // Chef avatar image URL
  bio: text("bio"),
  specialty: varchar("specialty", { length: 255 }),
  signatureDishes: json("signatureDishes").$type<string[]>(), // Array of signature dish names
  eventsHosted: int("eventsHosted").default(0),
  dishesCreated: int("dishesCreated").default(0),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Chef = typeof chefs.$inferSelect;
export type InsertChef = typeof chefs.$inferInsert;

/**
 * Site settings table for configurable content
 */
export const siteSettings = mysqlTable("siteSettings", {
  id: int("id").autoincrement().primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: text("value"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SiteSetting = typeof siteSettings.$inferSelect;
export type InsertSiteSetting = typeof siteSettings.$inferInsert;