
export const CATEGORIES: string[] = [
  'geography',
  'food_and_drink',
  'history',
  'mathematics',
  'entertainment',
  'people_and_places',
  'religion_and_mythology',
  'science_and_nature',
  'university_challenge'
];

export const BASE_TRIVIA_URL: string = process.env.NODE_ENV === 'production'
  ? '/mini-games/trivia/' // For production on GitHub Pages
  : '/mini-games/trivia/'; // For local development (Vite serves public from root)
  
export const DEFAULT_CATEGORY: string = 'geography';

export const APP_TITLE: string = "TRIVIA CHALLENGE";

// UI Colors: Nordic Cool Theme
export const COLOR_BACKGROUND = "bg-slate-800"; // Dark, desaturated blue-gray
export const COLOR_TEXT_PRIMARY = "text-slate-200"; // Light, cool gray
export const COLOR_SIDEBAR_BACKGROUND = "bg-slate-700"; // Medium-dark, desaturated blue-gray
export const COLOR_ACTIVE_CATEGORY = "bg-teal-600"; // Muted teal
export const COLOR_INACTIVE_CATEGORY_BG = "bg-slate-600"; // Slightly lighter gray for inactive items
export const COLOR_INACTIVE_CATEGORY_TEXT = "text-slate-300"; // Light gray for inactive text
export const COLOR_INACTIVE_CATEGORY_HOVER_BG = "hover:bg-slate-500"; // Hover for inactive items
export const COLOR_BUTTON_PRIMARY_BG = "bg-sky-700"; // Calm, medium blue
export const COLOR_BUTTON_PRIMARY_HOVER_BG = "hover:bg-sky-800"; // Darker blue for hover
export const COLOR_BUTTON_SECONDARY_BG = "bg-cyan-600"; // Muted, desaturated cyan/blue
export const COLOR_BUTTON_SECONDARY_HOVER_BG = "hover:bg-cyan-700"; // Darker cyan/blue for hover
export const COLOR_CARD_BACKGROUND = "bg-slate-700"; // Same as sidebar for cohesion
export const COLOR_ACCENT_SKY = "text-sky-400"; // Bright, clear sky blue accent
export const COLOR_ACCENT_GREEN = "text-teal-400"; // Muted teal accent (was emerald)
export const COLOR_ERROR_BG = "bg-rose-700"; // Desaturated, deep red for errors
export const COLOR_ERROR_TEXT = "text-rose-100"; // Off-white for error text
