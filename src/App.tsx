import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import { Header } from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
