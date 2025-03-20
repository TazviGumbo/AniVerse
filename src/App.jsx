import "./css/App.css";
import Home from "./Pages/Home";
import Favorites from "./pages/Favorites";
import Trending from "./pages/Trending";
import Recent from "./pages/Recent";
import { Routes, Route } from "react-router-dom"; 
import NavBar from "./Components/NavBar";
import { AnimeProvider } from "./context/AnimeContext"; 

function App() {
 
  return (
<AnimeProvider>
    <NavBar />
    <main className="main-content">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Favorites" element={<Favorites />} />
       <Route path ="/Trending" element={<Trending />} />
       <Route path="/Recent" element={<Recent />} />
      </Routes>
    </main>
    </AnimeProvider>
  );
}

export default App;
