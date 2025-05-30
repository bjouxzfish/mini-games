
import React from 'react';
import { COLOR_CARD_BACKGROUND, COLOR_ACCENT_GREEN } from '../constants';

interface AnswerDisplayProps {
  answerText: string | null;
  isVisible: boolean;
}

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ answerText, isVisible }) => {
  if (!isVisible) {
    return (
      <div className={`p-6 rounded-xl shadow-xl min-h-[100px] flex items-center justify-center ${COLOR_CARD_BACKGROUND} opacity-50`}>
        <p className="text-xl text-center text-slate-500 italic">Answer hidden</p>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl shadow-2xl min-h-[100px] flex items-center justify-center ${COLOR_CARD_BACKGROUND}`}>
      <p className={`text-xl md:text-2xl text-center font-semibold ${COLOR_ACCENT_GREEN}`}>
        {answerText || "No answer available."}
      </p>
    </div>
  );
};

export default AnswerDisplay;
