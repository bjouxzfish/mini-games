import React from 'react';
import { CATEGORIES, COLOR_SIDEBAR_BACKGROUND, COLOR_ACTIVE_CATEGORY, COLOR_INACTIVE_CATEGORY_BG, COLOR_INACTIVE_CATEGORY_TEXT, COLOR_INACTIVE_CATEGORY_HOVER_BG, COLOR_TEXT_PRIMARY } from '../constants';

interface CategorySidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isLoading: boolean;
  isOpen: boolean; // Add isOpen prop
  onToggleSidebar: () => void; // Add onToggleSidebar prop
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ activeCategory, onSelectCategory, isLoading, isOpen, onToggleSidebar }) => {
  return (
    <div
      className={`
        ${isOpen ? 'w-64' : 'w-16'} // Adjust width based on isOpen
        ${COLOR_SIDEBAR_BACKGROUND} p-5 space-y-3 overflow-y-auto h-full shadow-lg
        transition-all duration-300 ease-in-out flex flex-col relative
      `}
    >
      <button
        onClick={onToggleSidebar}
        className={`
          absolute top-4 ${isOpen ? 'right-4' : 'right-4'} // Position toggle button
          text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 rounded-full p-2
          ${COLOR_INACTIVE_CATEGORY_HOVER_BG}
        `}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        )}
      </button>

      <h2 className={`text-2xl font-bold mb-6 pb-2 ${COLOR_TEXT_PRIMARY} border-b border-slate-600 ${isOpen ? 'block' : 'hidden'}`}>Categories</h2>
      
      <div className={`${isOpen ? 'block' : 'hidden'} flex-grow space-y-3`}>
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
    </div>
  );
};

export default CategorySidebar;