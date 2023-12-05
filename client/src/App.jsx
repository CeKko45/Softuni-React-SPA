import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import Header from "../src/components/header/Header"
import Home from "../src/components/home/Home";
import Register from "../src/components/register/Register";
import Login from "../src/components/login/Login";
import Logout from "../src/components/logout/Logout";
import AuthGuard from "../src/components/routeGuards/AuthGuard";


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
