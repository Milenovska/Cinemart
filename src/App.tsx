import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import { Header } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
