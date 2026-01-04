/**
 * Hook to fetch chefs from the database
 */

import { trpc } from "@/lib/trpc";
import { chefs as staticChefs, Chef as StaticChef } from "@/data/chefs";

export interface DbChef {
  id: number;
  name: string;
  nickname: string | null;
  avatar: string | null;
  bio: string | null;
  specialty: string | null;
  signatureDishes: string[] | null;
  eventsHosted: number | null;
  dishesCreated: number | null;
  isActive?: boolean;
}

// Convert static chef to DB format
function staticToDbChef(chef: StaticChef, index: number): DbChef {
  return {
    id: parseInt(chef.id) || index + 1,
    name: chef.name,
    nickname: chef.nickname,
    avatar: chef.avatar,
    bio: chef.bio,
    specialty: chef.specialty,
    signatureDishes: chef.signatureDishes.map(d => d.name),
    eventsHosted: chef.stats.eventsCooked,
    dishesCreated: chef.stats.signatureDishes,
  };
}

export function useChefs() {
  const { data: dbChefs, isLoading, error } = trpc.chefs.list.useQuery();

  const chefs: DbChef[] = dbChefs && dbChefs.length > 0 
    ? dbChefs.map(chef => ({
        ...chef,
        signatureDishes: chef.signatureDishes as string[] | null,
      }))
    : staticChefs.map((chef, i) => staticToDbChef(chef, i));

  return {
    chefs,
    isLoading,
    error,
    isFromDatabase: dbChefs && dbChefs.length > 0,
  };
}

export function useChef(id: number | string) {
  const numericId = typeof id === 'string' ? parseInt(id) : id;
  const { data: dbChef, isLoading, error } = trpc.chefs.get.useQuery({ id: numericId });

  let chef: DbChef | null = null;
  
  if (dbChef) {
    chef = {
      ...dbChef,
      signatureDishes: dbChef.signatureDishes as string[] | null,
    };
  } else {
    const staticChef = staticChefs.find(c => c.id === String(id) || parseInt(c.id) === numericId);
    if (staticChef) {
      chef = staticToDbChef(staticChef, numericId - 1);
    }
  }

  return {
    chef,
    isLoading,
    error,
  };
}
