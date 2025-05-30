
import React from 'react';
import { COLOR_CARD_BACKGROUND, COLOR_TEXT_PRIMARY } from '../constants';

interface QuestionDisplayProps {
  questionText: string | null;
  isLoading: boolean;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ questionText, isLoading }) => {
  let displayText = "Select a category or click 'Next Question'.";
  if (isLoading) {
    displayText = "Loading question...";
  } else if (questionText) {
    displayText = questionText;
  }

  return (
    <div className={`p-8 rounded-xl shadow-2xl min-h-[200px] flex items-center justify-center ${COLOR_CARD_BACKGROUND}`}>
      <p className={`text-2xl md:text-3xl text-center font-medium ${COLOR_TEXT_PRIMARY}`}>
        {displayText}
      </p>
    </div>
  );
};

export default QuestionDisplay;
