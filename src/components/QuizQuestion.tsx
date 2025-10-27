import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuizQuestionProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: 'A' | 'B' | 'C' | 'D') => void;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D';
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer
}) => {
  const answers = [
    { key: 'A' as const, text: 'Yes' },
    { key: 'B' as const, text: 'Somewhat' },
    { key: 'C' as const, text: 'Not Really' },
    { key: 'D' as const, text: 'Not at all' }
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader style={{ backgroundColor: '#78a2b6' }} className="text-white rounded-t-lg">
        <CardTitle className="text-xl">
          Question {questionNumber} of {totalQuestions}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-white">
        <h3 className="text-lg font-semibold mb-6 text-slate-800">{question}</h3>
        <div className="space-y-3">
          {answers.map((answer) => (
            <Button
              key={answer.key}
              variant={selectedAnswer === answer.key ? "default" : "outline"}
              className={`w-full justify-start text-left p-4 h-auto ${
                selectedAnswer === answer.key 
                  ? 'text-white border-opacity-0' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
              style={selectedAnswer === answer.key ? { backgroundColor: '#78a2b6' } : {}}
              onClick={() => onAnswer(answer.key)}
            >
              <span className="font-semibold mr-3">{answer.key}.</span>
              {answer.text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;