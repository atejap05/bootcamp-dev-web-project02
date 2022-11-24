import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";

import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allbooks" element={<AllBooks />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
