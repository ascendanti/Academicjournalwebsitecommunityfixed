import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { BoardPage } from './components/pages/BoardPage';
import { SubmitPage } from './components/pages/SubmitPage';
import { ReviewPage } from './components/pages/ReviewPage';
import { PublicationsPage } from './components/pages/PublicationsPage';
import { JoinPage } from './components/pages/JoinPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'board':
        return <BoardPage />;
      case 'submit':
        return <SubmitPage />;
      case 'review':
        return <ReviewPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'join':
        return <JoinPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
