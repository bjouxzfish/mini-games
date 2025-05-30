
import React from 'react';
import { COLOR_BUTTON_PRIMARY_BG, COLOR_BUTTON_PRIMARY_HOVER_BG, COLOR_BUTTON_SECONDARY_BG, COLOR_BUTTON_SECONDARY_HOVER_BG } from '../constants';

interface ControlButtonsProps {
  onNextQuestion: () => void;
  onToggleAnswer: () => void;
  isAnswerVisible: boolean;
  isQuestionLoaded: boolean;
  isLoadingNext: boolean; // For disabling during question load
}

const ControlButton: React.FC<{ onClick: () => void; disabled: boolean; className: string; children: React.ReactNode}> = ({ onClick, disabled, className, children}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1D]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none
      ${className}
    `}
  >
    {children}
  </button>
);


const ControlButtons: React.FC<ControlButtonsProps> = ({ onNextQuestion, onToggleAnswer, isAnswerVisible, isQuestionLoaded, isLoadingNext }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 my-8">
      <ControlButton
        onClick={onNextQuestion}
        disabled={!isQuestionLoaded || isLoadingNext}
        className={`${COLOR_BUTTON_PRIMARY_BG} ${COLOR_BUTTON_PRIMARY_HOVER_BG} text-white focus:ring-sky-400 hover:scale-105`}
      >
        {isLoadingNext ? 'Loading...' : 'Next Question'}
      </ControlButton>
      <ControlButton
        onClick={onToggleAnswer}
        disabled={!isQuestionLoaded || isLoadingNext}
        className={`${COLOR_BUTTON_SECONDARY_BG} ${COLOR_BUTTON_SECONDARY_HOVER_BG} text-white focus:ring-emerald-400 hover:scale-105`}
      >
        {isAnswerVisible ? 'Hide Answer' : 'Show Answer'}
      </ControlButton>
    </div>
  );
};

export default ControlButtons;
