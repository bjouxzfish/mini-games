
import React, { useState, useEffect, useCallback } from 'react';
import { TriviaQuestion } from './types';
import { CATEGORIES, DEFAULT_CATEGORY, APP_TITLE, COLOR_BACKGROUND, COLOR_TEXT_PRIMARY, COLOR_ACCENT_SKY } from './constants';
import { fetchAllCategoriesData } from './services/triviaService';
import CategorySidebar from './components/CategorySidebar';
import QuestionDisplay from './components/QuestionDisplay';
import AnswerDisplay from './components/AnswerDisplay';
import ControlButtons from './components/ControlButtons';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {
  const [allQuestions, setAllQuestions] = useState<Map<string, TriviaQuestion[]>>(new Map());
  const [currentCategory, setCurrentCategory] = useState<string>(DEFAULT_CATEGORY);
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion | null>(null);
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(true);
  const [isLoadingNextQuestion, setIsLoadingNextQuestion] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadInitialData = useCallback(async () => {
    setIsLoadingInitialData(true);
    setError(null);
    try {
      const data = await fetchAllCategoriesData(CATEGORIES);
      if (data.size === 0) {
        setError("No trivia data could be loaded. Please check your connection or try again later.");
      } else {
        setAllQuestions(data);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unknown error occurred while fetching data.");
    } finally {
      setIsLoadingInitialData(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectNewQuestion = useCallback((category: string) => {
    setIsLoadingNextQuestion(true);
    const questionsInCategory = allQuestions.get(category);
    if (questionsInCategory && questionsInCategory.length > 0) {
      const randomIndex = Math.floor(Math.random() * questionsInCategory.length);
      setCurrentQuestion(questionsInCategory[randomIndex]);
      setError(null);
    } else {
      setCurrentQuestion(null);
      if (allQuestions.size > 0) { // Only show error if categories are loaded but this one is empty
         setError(`No questions found for category: ${category}. Try another one.`);
      }
    }
    setIsAnswerVisible(false);
    setIsLoadingNextQuestion(false);
  }, [allQuestions]);

  useEffect(() => {
    if (!isLoadingInitialData && allQuestions.size > 0) {
      if (!currentQuestion || currentQuestion.category_id !== currentCategory.toLowerCase().replace(/ /g, '_')) {
         selectNewQuestion(currentCategory);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allQuestions, isLoadingInitialData, currentCategory, selectNewQuestion]); // currentQuestion removed to prevent re-triggering on nextQuestion for same category. selectNewQuestion dependency implies allQuestions.

  const handleSelectCategory = useCallback((category: string) => {
    setCurrentCategory(category);
    // selectNewQuestion will be called by the useEffect above when currentCategory changes
  }, []);

  const handleNextQuestion = useCallback(() => {
    selectNewQuestion(currentCategory);
  }, [currentCategory, selectNewQuestion]);

  const handleToggleAnswer = () => {
    setIsAnswerVisible(prev => !prev);
  };

  const questionsInCurrentCat = allQuestions.get(currentCategory);
  const numQuestionsInCurrentCategory = questionsInCurrentCat ? questionsInCurrentCat.length : 0;
  const answerText = currentQuestion ? currentQuestion.answers.join(', ') : null;

  if (isLoadingInitialData) {
    return (
      <div className={`flex items-center justify-center h-screen ${COLOR_BACKGROUND}`}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={`flex h-screen ${COLOR_BACKGROUND} ${COLOR_TEXT_PRIMARY} overflow-hidden`}>
      <CategorySidebar 
        activeCategory={currentCategory} 
        onSelectCategory={handleSelectCategory}
        isLoading={isLoadingInitialData || isLoadingNextQuestion}
      />
      <main className="flex-1 flex flex-col p-4 md:p-8 space-y-6 overflow-y-auto">
        <header className="text-center">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${COLOR_ACCENT_SKY} tracking-tight`}>{APP_TITLE}</h1>
          {allQuestions.size > 0 && (
             <p className="text-md md:text-lg text-slate-400 mt-2">
              Category: <span className="font-semibold">{currentCategory.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              &nbsp;({numQuestionsInCurrentCategory} questions)
            </p>
          )}
        </header>

        {error && !isLoadingInitialData && (
          <ErrorMessage message={error} />
        )}

        {!error && allQuestions.size === 0 && !isLoadingInitialData && (
          <ErrorMessage title="No Data" message="Could not load any trivia questions. The source might be unavailable." />
        )}
        
        {(allQuestions.size > 0 || currentQuestion) && (
          <>
            <QuestionDisplay questionText={currentQuestion?.question || null} isLoading={isLoadingNextQuestion} />
            <ControlButtons
              onNextQuestion={handleNextQuestion}
              onToggleAnswer={handleToggleAnswer}
              isAnswerVisible={isAnswerVisible}
              isQuestionLoaded={!!currentQuestion && !isLoadingNextQuestion}
              isLoadingNext={isLoadingNextQuestion}
            />
            <AnswerDisplay answerText={answerText} isVisible={isAnswerVisible} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
