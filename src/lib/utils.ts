import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // For merging Tailwind classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
