import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Simple function to merge classes for more dynamic styling
// of shared components

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
