/**
 * Hook to fetch food items - now uses static data with likes functionality
 */
import { useState, useEffect, useCallback } from "react";
import { allFoodItems } from "@/data/allFoodItems";

export interface FoodItem {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  chef: string | null;
  category: string | null;
  rank: number | null;
  likes: number;
  isLiked: boolean;
  isPublished?: boolean;
}

// Storage key for likes
const LIKES_STORAGE_KEY = "marti13_food_likes";
const USER_LIKES_KEY = "marti13_user_liked_items";

// Get likes from localStorage
function getLikesFromStorage(): Record<number, number> {
  try {
    const stored = localStorage.getItem(LIKES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

// Get user's liked items from localStorage
function getUserLikedItems(): Set<number> {
  try {
    const stored = localStorage.getItem(USER_LIKES_KEY);
    return new Set(stored ? JSON.parse(stored) : []);
  } catch {
    return new Set();
  }
}

// Save likes to localStorage
function saveLikesToStorage(likes: Record<number, number>) {
  try {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likes));
  } catch {
    // Ignore storage errors
  }
}

// Save user's liked items to localStorage
function saveUserLikedItems(items: Set<number>) {
  try {
    localStorage.setItem(USER_LIKES_KEY, JSON.stringify([...items]));
  } catch {
    // Ignore storage errors
  }
}

export function useFoodItems() {
  const [likesMap, setLikesMap] = useState<Record<number, number>>({});
  const [userLikedItems, setUserLikedItems] = useState<Set<number>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    setLikesMap(getLikesFromStorage());
    setUserLikedItems(getUserLikedItems());
    setIsInitialized(true);
  }, []);

  // Toggle like for an item
  const toggleLike = useCallback((itemId: number) => {
    setUserLikedItems(prev => {
      const newSet = new Set(prev);
      const isCurrentlyLiked = newSet.has(itemId);
      
      if (isCurrentlyLiked) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      
      saveUserLikedItems(newSet);
      return newSet;
    });

    setLikesMap(prev => {
      const currentLikes = prev[itemId] || 0;
      const isCurrentlyLiked = userLikedItems.has(itemId);
      const newLikes = {
        ...prev,
        [itemId]: isCurrentlyLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1
      };
      saveLikesToStorage(newLikes);
      return newLikes;
    });
  }, [userLikedItems]);

  // Build food items with likes data, sorted by likes (most liked first)
  const foodItems: FoodItem[] = allFoodItems
    .map((item, index) => {
      const id = index + 1;
      return {
        id,
        name: item.name,
        description: item.description || null,
        image: item.image || null,
        chef: item.chef || null,
        category: item.category || null,
        rank: item.rank || null,
        likes: likesMap[id] || 0,
        isLiked: userLikedItems.has(id),
        isPublished: true,
      };
    })
    .sort((a, b) => b.likes - a.likes); // Sort by likes descending

  return {
    foodItems,
    isLoading: !isInitialized,
    error: null,
    toggleLike,
  };
}

export function useFoodItem(id: number) {
  const { foodItems, toggleLike } = useFoodItems();
  const foodItem = foodItems.find(item => item.id === id) || null;
  
  return {
    foodItem,
    isLoading: false,
    error: null,
    toggleLike,
  };
}
