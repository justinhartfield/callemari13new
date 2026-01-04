/**
 * Hook to fetch food items from the database
 */

import { trpc } from "@/lib/trpc";

export interface FoodItem {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  chef: string | null;
  category: string | null;
  rank: number | null;
  isPublished?: boolean;
}

export function useFoodItems() {
  const { data: dbItems, isLoading, error } = trpc.foodItems.list.useQuery();

  const foodItems: FoodItem[] = dbItems 
    ? dbItems.map(item => ({
        ...item,
      }))
    : [];

  return {
    foodItems,
    isLoading,
    error,
  };
}

export function useFoodItem(id: number) {
  const { data: dbItem, isLoading, error } = trpc.foodItems.get.useQuery({ id });

  return {
    foodItem: dbItem || null,
    isLoading,
    error,
  };
}
