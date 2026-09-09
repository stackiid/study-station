import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SearchResultsPage from "./pages/SearchResultsPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="resources" element={<Resources />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
