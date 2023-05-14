import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Trailer from "./components/Trailer";





function App() {
  
  
  
  return (
    <div className="container ">
      
      
    <Routes>

      
      <Route path="/" element={<MovieList/>}/>
      <Route path="/:id" element={<Trailer />} />



    </Routes>


    </div>
  );
}

export default App;
