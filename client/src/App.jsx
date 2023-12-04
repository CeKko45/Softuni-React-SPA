import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/authContext";
import Path from "./paths";

import Header from "../components/header/Header"
import Home from "../components/Home/Home";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import Logout from "../components/logout/Logout";
import AuthGuard from "../components/routeGuards/AuthGuard";


function App() {
  return (
    <AuthProvider>
      <div id="container">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />

          <Route element={<AuthGuard />}>
            <Route path={Path.Logout} element={<Logout />} />

          </Route>

        </Routes>


      </div>
    </AuthProvider>
  )
}

export default App
