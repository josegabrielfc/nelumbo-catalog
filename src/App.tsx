import { Navbar } from './components/ui/Navbar';
import { Main } from './components/layout/main';
import { Footer } from './components/ui/Footer';

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Navbar />
      <Main />
      <div className="my-4"></div>
      <Footer />
    </div>
  );
}

export default App;