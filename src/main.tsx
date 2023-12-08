import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider
      config={{
        // signInRedirectURL: "http://localhost:3000",
        // signOutRedirectURL: "http://localhost:3000",
        signInRedirectURL:
          "https://20f0b99c-0324-442e-9481-45912e1d28f8.e1-us-east-azure.choreoapps.dev",
        signOutRedirectURL:
          "https://20f0b99c-0324-442e-9481-45912e1d28f8.e1-us-east-azure.choreoapps.dev",
        clientID: "fm_FGzPlUsGGWDpKWqcyHPSpkbMa",
        baseUrl: "https://api.asgardeo.io/t/thivaorg",
        scope: ["openid", "profile"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
