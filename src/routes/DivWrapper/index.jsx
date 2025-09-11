import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DivWrapper } from "./screens/DivWrapper";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <DivWrapper />
  </StrictMode>,
);
