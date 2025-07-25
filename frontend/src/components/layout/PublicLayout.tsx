import { useState } from 'react';
import Navbar from "./Navbar"
import Footer from './Footer';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import DesignsPage from '../../pages/DesignsPage';

const PublicLayout = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      case 'designs':
        return <DesignsPage />;
      case 'login':
        return <LoginPage setPage={setPage} />;
      case 'signup':
        return <SignupPage setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Navbar setPage={setPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;