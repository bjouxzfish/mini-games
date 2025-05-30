
import React from 'react';
import { CATEGORIES, COLOR_SIDEBAR_BACKGROUND, COLOR_ACTIVE_CATEGORY, COLOR_INACTIVE_CATEGORY_BG, COLOR_INACTIVE_CATEGORY_TEXT, COLOR_INACTIVE_CATEGORY_HOVER_BG, COLOR_TEXT_PRIMARY } from '../constants';

interface CategorySidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isLoading: boolean;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ activeCategory, onSelectCategory, isLoading }) => {
  return (
    <div className={`w-64 ${COLOR_SIDEBAR_BACKGROUND} p-5 space-y-3 overflow-y-auto h-full shadow-lg`}>
      <h2 className={`text-2xl font-bold mb-6 ${COLOR_TEXT_PRIMARY} border-b border-slate-600 pb-2`}>Categories</h2>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          disabled={isLoading}
          className={`
            w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
            ${activeCategory === category 
              ? `${COLOR_ACTIVE_CATEGORY} text-white shadow-md` 
              : `${COLOR_INACTIVE_CATEGORY_BG} ${COLOR_INACTIVE_CATEGORY_TEXT} ${COLOR_INACTIVE_CATEGORY_HOVER_BG} hover:text-white`}
          `}
        >
          {category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;
