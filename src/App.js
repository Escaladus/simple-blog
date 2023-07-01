import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

export default function App() {

  return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/create"} element={<Create/>}/>
                  <Route path={"/blogs/:id"} element={<BlogDetails/>}/>
                  <Route element={<NotFound/>} path={"*"}/>
              </Routes>
          </BrowserRouter>
      </div>

  );
}


