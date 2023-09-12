import { createContext, useContext } from "react";

export const CategoryContext = createContext("");

export function useCategoryContext() {
  const category = useContext(CategoryContext);
  return category;
}
