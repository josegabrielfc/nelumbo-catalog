import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import Routes from './routes/Routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen grid grid-rows-[auto_1fr]">
        <Navbar />
        <Routes />
        <div className="my-4"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;