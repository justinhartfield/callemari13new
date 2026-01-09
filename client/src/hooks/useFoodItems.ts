/**
 * Hook to fetch food items - now uses static data
 */
import { allFoodItems } from "@/data/allFoodItems";

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
  // Use static data instead of database
  const foodItems: FoodItem[] = allFoodItems.map((item, index) => ({
    id: index + 1,
    name: item.name,
    description: item.description || null,
    image: item.image || null,
    chef: item.chef || null,
    category: item.category || null,
    rank: item.rank || null,
    isPublished: true,
  }));

  return {
    foodItems,
    isLoading: false,
    error: null,
  };
}

export function useFoodItem(id: number) {
  const { foodItems } = useFoodItems();
  const foodItem = foodItems.find(item => item.id === id) || null;
  
  return {
    foodItem,
    isLoading: false,
    error: null,
  };
}
