import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const questions = [
  "Do you have documented standard operating procedures (SOPs) for key business processes?",
  "Can your team handle day-to-day operations without your direct involvement?",
  "Do you have reliable systems in place for customer communication and support?",
  "Are your financial processes automated or well-documented for others to manage?",
  "Do you have backup plans for critical business functions?",
  "Can your business maintain quality standards when you're not present?",
  "Do you have clear delegation of responsibilities to trusted team members?",
  "Are your key business metrics tracked and accessible to your team?",
  "Do you have emergency contacts and procedures documented?",
  "Can your business operate profitably without your daily input?"
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<('A' | 'B' | 'C' | 'D')[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | undefined>();
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(undefined);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(undefined);
    setShowResults(false);
  };

  const progress = ((currentQuestion + (selectedAnswer ? 1 : 0)) / questions.length) * 100;

  if (showResults) {
    return <QuizResults answers={answers} onRestart={handleRestart} />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="mb-6">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-slate-600 mt-2 text-center">
          {Math.round(progress)}% Complete
        </p>
      </div>
      
      <QuizQuestion
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />
      
      <div className="flex justify-center">
        <Button
          onClick={handleNext}
          disabled={!selectedAnswer}
          style={{ backgroundColor: '#78a2b6' }}
          className="hover:opacity-90 text-white px-8 py-2"
        >
          {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;