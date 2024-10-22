import React, { useState, useEffect } from 'react';
import { AlertCircle, Send, Moon, Sun } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';

const Logo = ({ size = 'normal', darkMode }) => {
  const dimensions = {
    small: {
      fontSize: 'text-3xl',
      triangleWidth: 'w-6',
      triangleHeight: 'h-5',
      triangleMargin: 'ml-4'
    },
    normal: {
      fontSize: 'text-8xl',
      triangleWidth: 'w-20',
      triangleHeight: 'h-16',
      triangleMargin: 'ml-8'
    }
  };

  const { fontSize, triangleWidth, triangleHeight, triangleMargin } = dimensions[size];

  return (
    <div className="relative flex items-center">
      <span className={`${fontSize} font-bold tracking-tighter ${darkMode ? 'text-green-400' : 'text-green-500'}`}>GT</span>
      <div className={`${triangleMargin} ${triangleHeight} flex items-center`}>
        <svg 
          viewBox="0 0 40 30" 
          className={`${triangleWidth} ${triangleHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M5,25 L20,5 L35,25"
            fill={darkMode ? '#60A5FA' : '#3B82F6'}
            className="drop-shadow-md"
          />
        </svg>
      </div>
    </div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock subscription without backend
    setStatus({
      type: 'success',
      message: 'Subscription feature will be available soon!'
    });
    setEmail('');
  };

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-40 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="hover:opacity-80 transition-opacity"
          >
            <Logo size="small" darkMode={darkMode} />
          </button>

          <nav className="hidden md:flex space-x-8">
            {['home', 'manifest', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page 
                    ? darkMode ? 'text-green-400' : 'text-green-500'
                    : darkMode ? 'text-gray-300' : 'text-gray-600'
                } hover:text-green-500 capitalize transition-colors`}
              >
                {page}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <Logo size="normal" darkMode={true} />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Giovani per il Trentino
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Unisciti alla nostra comunità per il futuro del Trentino
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Inserisci la tua email"
                required
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 
                  bg-white/10 border border-white/20 text-white placeholder-gray-300 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const ManifestPage = () => (
    <div className="min-h-screen pt-24 px-4">
      <h1 className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Il Nostro Manifesto
      </h1>
      {/* Add content later */}
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-24 px-4">
      <h1 className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Chi Siamo
      </h1>
      {/* Add content later */}
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-24 px-4">
      <h1 className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Contattaci
      </h1>
      {/* Add content later */}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'manifest' && <ManifestPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {status.message && (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto z-50">
          <Alert variant={status.type === 'success' ? 'default' : 'destructive'}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>
              {status.type === 'success' ? 'Success' : 'Error'}
            </AlertTitle>
            <AlertDescription>
              {status.message}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default App;