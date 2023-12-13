// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Status from "./pages/Status";
import Help from "./pages/Help";
import { useAuthContext } from "@asgardeo/auth-react";
import { useStatusItems } from "./utils/statusContext";
import Profile from "./pages/profile";
import Certificate from "./admin/CertficateHist";

interface WrapperProps {
  component: React.ComponentType<any>;
}

const Wrapper: React.FC<WrapperProps> = ({ component: Component }) => {
  const { state } = useAuthContext();
  if (state.isAuthenticated) {
    return <Component />;
  } else {
    return <Home />;
  }
};

const AdminWrapper: React.FC<WrapperProps> = ({ component: Component }) => {
  const { state } = useAuthContext();
  const { decodedToken } = useStatusItems();
  if (state.isAuthenticated && decodedToken?.app_role_gdki == "GramaNiladhari") {
    return <Component />;
  } else {
    return <Home />;
  }
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/" Component={Home} />
        <Route path="/apply" element={<Wrapper component={Apply} />} />
        {/* <Route path="/apply" Component={Apply} /> */}
        <Route path="/status" element={<Wrapper component={Status} />} />
        {/* <Route path="/status" Component={Status} /> */}
        {/* <Route path="/profile" element={<Wrapper component={Profile} />} /> */}
        <Route path="/profile" Component={Profile} />
        <Route path="/help" Component={Help} />
        {/* <Route path="/adminstatus" Component={Certificate} /> */}
        <Route
          path="/adminstatus"
          element={<AdminWrapper component={Certificate} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
