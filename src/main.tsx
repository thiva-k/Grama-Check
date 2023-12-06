import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: "http://localhost:3000",
        signOutRedirectURL: "http://localhost:3000",
        clientID: "6ZX7RT5D7yFhefksvrk4g9O0EEAa",
        baseUrl: "https://api.asgardeo.io/t/thivaorg",
        scope: ["openid", "profile"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
