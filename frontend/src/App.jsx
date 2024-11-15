import React, { useState, useEffect } from 'react';
import { AlertCircle, Send, Moon, Sun, Mail, MapPin, Phone } from 'lucide-react';
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
      <span className={`${fontSize} font-bold tracking-tighter ${darkMode ? 'text-green-400' : 'text-green-600'}`}>GT</span>
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    // Add or remove dark class on body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({
      type: 'success',
      message: 'Subscription feature will be available soon!'
    });
    setEmail('');
  };

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-40 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="hover:opacity-80 transition-opacity"
          >
            <Logo size="small" darkMode={darkMode} />
          </button>

          <nav className="flex space-x-8">
            {['home', 'manifest', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page 
                    ? darkMode ? 'text-green-400' : 'text-green-600'
                    : darkMode ? 'text-gray-300' : 'text-gray-600'
                } hover:text-green-500 capitalize transition-colors duration-200`}
              >
                {page}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors duration-200`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );

  // Home Page with appropriate light/dark styles
  const HomePage = () => (
    <div className={`relative min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-white via-gray-100 to-white'}`}>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <Logo size="normal" darkMode={darkMode} />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Giovani per il Trentino
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
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
                className={`flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 
                  ${darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } transition-colors duration-200`}
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

  // Other pages with proper light/dark styles
  const ManifestPage = () => (
    <div className={`min-h-screen pt-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <h1 className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Il Nostro Manifesto
      </h1>
    </div>
  );

  const AboutPage = () => (
    <div className={`min-h-screen pt-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <h1 className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Chi Siamo
      </h1>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Contattaci
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <form className="space-y-6">
              <div>
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
                  } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
                  } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
                  } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded-lg ${
                  darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'
                } text-white transition-colors`}
              >
                Send Message
              </button>
            </form>
          </div>
  
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className={darkMode ? 'text-green-400' : 'text-green-500'} />
              <div>
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>info@gtmountains.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className={darkMode ? 'text-green-400' : 'text-green-500'} />
              <div>
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className={darkMode ? 'text-green-400' : 'text-green-500'} />
              <div>
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Address</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>123 Mountain View, CO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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