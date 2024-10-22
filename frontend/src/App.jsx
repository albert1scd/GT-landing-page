import React, { useState, useEffect } from 'react';
import { AlertCircle, Send, Moon, Sun, Mail, MapPin, Phone } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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

const HomePage = ({ darkMode, onSubscribe }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail('');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <Logo size="normal" darkMode={true} />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Explore the Heights
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Join our community of mountain enthusiasts and discover the world's most breathtaking peaks.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
};

const ManifestPage = ({ darkMode }) => (
  <div className="min-h-screen pt-24">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Our Manifest
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Vision', content: 'To inspire and enable sustainable mountain adventures.' },
          { title: 'Mission', content: 'Providing expert guidance and fostering a community of responsible mountaineers.' },
          { title: 'Values', content: 'Safety, sustainability, community, and respect for nature.' }
        ].map((item, index) => (
          <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`}>{item.title}</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = ({ darkMode }) => (
  <div className="min-h-screen pt-24">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Us</h1>
      <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Welcome to GT Mountains. We're passionate about connecting people with the beauty and challenge of mountain adventures.
      </p>
    </div>
  </div>
);

const ContactPage = ({ darkMode }) => (
  <div className="min-h-screen pt-24">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Contact Us
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
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const handleSubscribe = async (email) => {
    try {
      const response = await fetch('http://localhost:8000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      setStatus({
        type: response.ok ? 'success' : 'error',
        message: data.message
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again.'
      });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'manifest':
        return <ManifestPage darkMode={darkMode} />;
      case 'about':
        return <AboutPage darkMode={darkMode} />;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage darkMode={darkMode} onSubscribe={handleSubscribe} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm`}>
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

      {renderPage()}

      {status.message && (
        <div className="fixed bottom-4 right-4">
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