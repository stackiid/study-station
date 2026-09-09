import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Loader } from "./components/ui/Loader";

export function Root() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Matches the Loader's own fade-out timing; unmounts it afterwards so
    // it never intercepts clicks once invisible.
    const id = window.setTimeout(() => setShowLoader(false), 2400);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {showLoader && <Loader />}
      <App />
    </BrowserRouter>
  );
}
