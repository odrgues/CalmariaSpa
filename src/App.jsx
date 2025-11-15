import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage/index.jsx";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage/index.jsx";
// import AboutUsPage from "./pages/AboutUsPage";
// import CreatorsPage from "./pages/CreatorsPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServicesPage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* <Route path="/quem-somos" element={<AboutUsPage />} />
        <Route path="/nossos-criadores" element={<CreatorsPage />} />   */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
