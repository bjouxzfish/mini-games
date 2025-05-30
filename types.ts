
export interface TriviaQuestion {
  category_id: string;
  lang: string;
  tags: string[];
  question: string;
  answer: number | string; // Original JSON uses 'answer' as index, 'answers' as array of choices
  answers: string[];
  source: string;
}
