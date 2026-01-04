/**
 * Hook to fetch events from the database
 * Falls back to static data if database is not available
 */

import { trpc } from "@/lib/trpc";
import { events as staticEvents } from "@/data/events";

export interface DbEvent {
  id: number;
  title: string;
  date: string;
  description: string | null;
  image: string | null;
  chef: string | null;
  menuItems: string[] | null;
  gallery: string[] | null;
  isPublished?: boolean;
}

export function useEvents() {
  const { data: dbEvents, isLoading, error } = trpc.events.list.useQuery();

  // If database has events, use them; otherwise fall back to static data
  const events: DbEvent[] = dbEvents && dbEvents.length > 0 
    ? dbEvents.map(e => ({
        ...e,
        menuItems: e.menuItems as string[] | null,
        gallery: e.gallery as string[] | null,
      }))
    : staticEvents.map((e, i) => ({
        id: parseInt(e.id) || i + 1,
        title: e.title,
        date: e.date,
        description: e.description,
        image: e.image,
        chef: (e as any).chef || null,
        menuItems: e.menuItems || null,
        gallery: e.gallery || null,
      }));

  return {
    events,
    isLoading,
    error,
    isFromDatabase: dbEvents && dbEvents.length > 0,
  };
}

export function useEvent(id: number | string) {
  const numericId = typeof id === 'string' ? parseInt(id) : id;
  const { data: dbEvent, isLoading, error } = trpc.events.get.useQuery({ id: numericId });

  // Fall back to static data if not found in database
  let event: DbEvent | null = null;
  
  if (dbEvent) {
    event = {
      ...dbEvent,
      menuItems: dbEvent.menuItems as string[] | null,
      gallery: dbEvent.gallery as string[] | null,
    };
  } else {
    const staticEvent = staticEvents.find(e => e.id === String(id) || parseInt(e.id) === numericId);
    if (staticEvent) {
      event = {
        id: parseInt(staticEvent.id) || 0,
        title: staticEvent.title,
        date: staticEvent.date,
        description: staticEvent.description,
        image: staticEvent.image,
        chef: (staticEvent as any).chef || null,
        menuItems: staticEvent.menuItems || null,
        gallery: staticEvent.gallery || null,
      };
    }
  }

  return {
    event,
    isLoading,
    error,
  };
}
