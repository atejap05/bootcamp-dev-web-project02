import { Routes, Route } from "react-router-dom";
import classes from "./css/styles.module.css";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/allbooks" element={<AllBooks />}></Route>
      <Route path="/books/:id" element={<BookDetails />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
    </Routes>
  );
}

export default App;
