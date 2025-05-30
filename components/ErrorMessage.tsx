
import React from 'react';
import { COLOR_ERROR_BG, COLOR_ERROR_TEXT } from '../constants';

interface ErrorMessageProps {
  message: string;
  title?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, title = "An Error Occurred" }) => (
  <div className={`p-6 ${COLOR_ERROR_BG} ${COLOR_ERROR_TEXT} rounded-lg shadow-xl text-center`}>
    <p className="font-bold text-xl mb-2">{title}</p>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
