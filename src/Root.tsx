import { useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Loader } from "./components/ui/Loader";
import { useReducedMotion } from "./hooks/useReducedMotion";

export function Root() {
  const [showLoader, setShowLoader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  // Passed to Loader so the two stay in sync: content only starts fading
  // in once the loader has actually finished its own fade-out, instead of
  // both racing against separately-guessed timers.
  const handleLoaderFinished = useCallback(() => {
    setShowLoader(false);
    setContentVisible(true);
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {showLoader && <Loader onFinished={handleLoaderFinished} />}
      <div
        className={
          reducedMotion
            ? undefined
            : `transition-opacity duration-500 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`
        }
      >
        <App />
      </div>
    </BrowserRouter>
  );
}
