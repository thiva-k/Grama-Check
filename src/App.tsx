// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";
import Apply from "./pages/Apply";
import Status from "./pages/status";
import Help from "./pages/Help";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={Home} />
        <Route path="/apply" Component={Apply} />
        <Route path="/status" Component={Status} />
        <Route path="/help" Component={Help} />
      </Routes>
    </Router>
  );
};

export default App;
