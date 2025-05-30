
import { TriviaQuestion } from '../types';
import { BASE_TRIVIA_URL } from '../constants';

export async function fetchQuestionsForCategory(categoryName: string): Promise<TriviaQuestion[]> {
  const response = await fetch(`${BASE_TRIVIA_URL}${categoryName}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch questions for ${categoryName}: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchAllCategoriesData(categories: string[]): Promise<Map<string, TriviaQuestion[]>> {
  const dataMap = new Map<string, TriviaQuestion[]>();
  
  const fetchPromises = categories.map(async (category) => {
    try {
      const questions = await fetchQuestionsForCategory(category);
      return { category, questions, success: true };
    } catch (error) {
      console.warn(`Could not load category: ${category}`, error);
      return { category, questions: [], success: false }; // Return empty for resilience
    }
  });

  const results = await Promise.all(fetchPromises);
  
  results.forEach(result => {
    if (result.success) {
      dataMap.set(result.category, result.questions);
    }
  });
  
  return dataMap;
}
