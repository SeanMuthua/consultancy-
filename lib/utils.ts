import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names with tailwind-merge and clsx.
 * This ensures that Tailwind utility classes don't conflict.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
