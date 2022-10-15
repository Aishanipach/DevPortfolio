import './App.css';
import NavScroll from './components/NavScroll';
import Home from "./components/Home";
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import { useState, useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const article = fetch(`https://dev.to/api/articles?username=aishanipach`)
      .then((res) => res.json())
      .then(data => setArticles(data));

  }, [])


  return (
    <div className="App">
      <NavScroll />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog articles={articles} />} />
          <Route path="about" element={<About />} />

        </Routes>
      </BrowserRouter>
      {/* {console.log(articles)}
       <Home />
      <Blog articles={articles} />
      <About /> */}

    </div>
  );
}

export default App;
