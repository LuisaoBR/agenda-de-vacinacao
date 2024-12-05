import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
