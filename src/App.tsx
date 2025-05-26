import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Error } from "./views/Error404";
import RoutesApp from "./routes/Routes";
import { useValidRoute } from "./hooks/useValidRoute";

const AppContent = () => {
  const isValidRoute = useValidRoute();

  if (!isValidRoute) {
    return (
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <RoutesApp />
        <div className="my-4"></div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;