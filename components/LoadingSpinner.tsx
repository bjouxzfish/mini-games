
import React from 'react';
import { COLOR_TEXT_PRIMARY } from '../constants';

const LoadingSpinner: React.FC<{ message?: string }> = ({ message = "Loading Trivia..." }) => (
  <div className={`flex flex-col justify-center items-center h-full ${COLOR_TEXT_PRIMARY}`}>
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500 mb-4"></div>
    <p className="text-xl">{message}</p>
  </div>
);

export default LoadingSpinner;
