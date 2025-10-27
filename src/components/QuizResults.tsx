import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuizResultsProps {
  answers: ('A' | 'B' | 'C' | 'D')[];
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ answers, onRestart }) => {
  const getResult = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => counts[answer]++);
    
    const total = answers.length;
    const aPercent = (counts.A / total) * 100;
    const bPercent = (counts.B / total) * 100;
    const cPercent = (counts.C / total) * 100;
    const dPercent = (counts.D / total) * 100;

    if (aPercent === 100) {
      return {
        title: "You're All Set! 🎉",
        message: "Sounds like You're all Set. Enjoy that time Away!",
        color: "#99e6d8"
      };
    } else if (aPercent >= 50 && bPercent >= 25) {
      return {
        title: "Almost Ready! 🌟",
        message: "You'll likely have success stepping away, but running a test run before you step away fully unavailable is important.",
        color: "#99e6d8"
      };
    } else if (cPercent >= 50) {
      return {
        title: "Work to Do 📋",
        message: "You've got work to do. Focus on documenting those SOPs. Let's talk about how K Feather Solutions LLC can assist.",
        color: "#99e6d8"
      };
    } else {
      return {
        title: "Let's Talk 🤝",
        message: "Let's talk - your business will likely stop or experience quality challenges when you step away. Let's begin to design processes to ensure you can get away.",
        color: "#99e6d8"
      };
    }
  };

  const result = getResult();

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader style={{ backgroundColor: result.color }} className="text-slate-800 rounded-t-lg">
        <CardTitle className="text-2xl text-center">{result.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-8 text-center bg-white">
        <p className="text-lg mb-6 text-slate-700">{result.message}</p>
        <Button 
          onClick={onRestart}
          style={{ backgroundColor: '#78a2b6' }}
          className="hover:opacity-90 text-white px-8 py-2"
        >
          Take Quiz Again
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizResults;