import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { getDb } from "./db";
import { events, foodItems, chefs, siteSettings } from "../drizzle/schema";
import { seedDatabase } from "./seed";

// Events Router
const eventsRouter = router({
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const result = await db.select().from(events).orderBy(desc(events.date));
    return result;
  }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(events).where(eq(events.id, input.id)).limit(1);
      return result[0] || null;
    }),

  create: publicProcedure
    .input(z.object({
      title: z.string().min(1),
      date: z.string().min(1),
      description: z.string().optional(),
      image: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      menuItems: z.array(z.string()).optional(),
      chef: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(events).values({
        title: input.title,
        date: input.date,
        description: input.description || null,
        image: input.image || null,
        gallery: input.gallery || null,
        menuItems: input.menuItems || null,
        chef: input.chef || null,
      });
      return { id: result[0].insertId };
    }),

  update: publicProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1).optional(),
      date: z.string().min(1).optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      menuItems: z.array(z.string()).optional(),
      chef: z.string().optional(),
      isPublished: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { id, ...data } = input;
      await db.update(events).set(data).where(eq(events.id, id));
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(events).where(eq(events.id, input.id));
      return { success: true };
    }),
});

// Food Items Router
const foodItemsRouter = router({
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const result = await db.select().from(foodItems).orderBy(foodItems.category, foodItems.rank);
    return result;
  }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(foodItems).where(eq(foodItems.id, input.id)).limit(1);
      return result[0] || null;
    }),

  create: publicProcedure
    .input(z.object({
      name: z.string().min(1),
      description: z.string().optional(),
      image: z.string().optional(),
      category: z.string().optional(),
      chef: z.string().optional(),
      eventId: z.number().optional(),
      rank: z.number().optional().nullable(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(foodItems).values({
        name: input.name,
        description: input.description || null,
        image: input.image || null,
        category: input.category || null,
        chef: input.chef || null,
        eventId: input.eventId || null,
        rank: input.rank || null,
      });
      return { id: result[0].insertId };
    }),

  update: publicProcedure
    .input(z.object({
      id: z.number(),
      name: z.string().min(1).optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      category: z.string().optional(),
      chef: z.string().optional(),
      eventId: z.number().optional(),
      rank: z.number().optional().nullable(),
      isPublished: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { id, ...data } = input;
      await db.update(foodItems).set(data).where(eq(foodItems.id, id));
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(foodItems).where(eq(foodItems.id, input.id));
      return { success: true };
    }),
});

// Chefs Router
const chefsRouter = router({
  list: publicProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const result = await db.select().from(chefs).orderBy(desc(chefs.eventsHosted));
    return result;
  }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(chefs).where(eq(chefs.id, input.id)).limit(1);
      return result[0] || null;
    }),

  create: publicProcedure
    .input(z.object({
      name: z.string().min(1),
      nickname: z.string().optional(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
      specialty: z.string().optional(),
      signatureDishes: z.array(z.string()).optional(),
      eventsHosted: z.number().optional(),
      dishesCreated: z.number().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(chefs).values({
        name: input.name,
        nickname: input.nickname || null,
        avatar: input.avatar || null,
        bio: input.bio || null,
        specialty: input.specialty || null,
        signatureDishes: input.signatureDishes || null,
        eventsHosted: input.eventsHosted || 0,
        dishesCreated: input.dishesCreated || 0,
      });
      return { id: result[0].insertId };
    }),

  update: publicProcedure
    .input(z.object({
      id: z.number(),
      name: z.string().min(1).optional(),
      nickname: z.string().optional(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
      specialty: z.string().optional(),
      signatureDishes: z.array(z.string()).optional(),
      eventsHosted: z.number().optional(),
      dishesCreated: z.number().optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { id, ...data } = input;
      await db.update(chefs).set(data).where(eq(chefs.id, id));
      return { success: true };
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(chefs).where(eq(chefs.id, input.id));
      return { success: true };
    }),
});

// Settings Router
const settingsRouter = router({
  get: publicProcedure
    .input(z.object({ key: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(siteSettings).where(eq(siteSettings.key, input.key)).limit(1);
      return result[0] || null;
    }),

  set: publicProcedure
    .input(z.object({
      key: z.string().min(1),
      value: z.string(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      
      // Check if setting exists
      const existing = await db.select().from(siteSettings).where(eq(siteSettings.key, input.key)).limit(1);
      
      if (existing.length > 0) {
        await db.update(siteSettings).set({ value: input.value }).where(eq(siteSettings.key, input.key));
      } else {
        await db.insert(siteSettings).values({
          key: input.key,
          value: input.value,
        });
      }
      
      return { success: true };
    }),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Seed endpoint (one-time use)
  seed: router({
    run: publicProcedure.mutation(async () => {
      const results = await seedDatabase();
      return results;
    }),
  }),

  // Feature routers
  events: eventsRouter,
  foodItems: foodItemsRouter,
  chefs: chefsRouter,
  settings: settingsRouter,
});

export type AppRouter = typeof appRouter;
