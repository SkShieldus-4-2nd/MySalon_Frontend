import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { OutfitProvider } from "./context/OutfitContext";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <OutfitProvider>
        <App />
      </OutfitProvider>
    </BrowserRouter>
  </StrictMode>
);
