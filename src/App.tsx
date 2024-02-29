import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import { Header } from "./components";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${process.env.API_KEY}`;

  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
