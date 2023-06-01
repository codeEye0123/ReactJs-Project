import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseState } from "./contexts/firebaseState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseState>
  </React.StrictMode>
);
