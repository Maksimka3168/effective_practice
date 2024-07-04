import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Characters from "./pages/characters/Characters";
import Comics from "./pages/comics/Comics";
import CharacterInfo from "./pages/characterInfo/CharacterInfo";
import ComicsInfo from "./pages/comicsInfo/ComicsInfo";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Characters />} />
    <Route path="/comics" element={<Comics />} />
    <Route path="/:id" element={<CharacterInfo />} />
    <Route path="/comics/:id" element={<ComicsInfo />} />
  </Routes>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container">
          <AppRoutes />
        </main>
        <div style={{ height: 32 }} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
