import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound";
import NewsMe from "./pages/newsme";
import LightBroswer from "./pages/lightbrowser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LightBroswer />} />
        <Route path="/news" element={<NewsMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
