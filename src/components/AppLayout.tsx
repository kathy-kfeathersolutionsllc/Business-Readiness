import React from 'react';
import Quiz from './Quiz';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-slate-800">
            Is Your Business Getaway Ready?
          </h1>
          <p className="text-center text-slate-600 mt-2">
            Discover if your business can thrive while you're away
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <Quiz />
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#78a2b6' }} className="text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 K Feather Solutions LLC. Ready to optimize your business processes?
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;