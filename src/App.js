import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Homepage from "pages/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
