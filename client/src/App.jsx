import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import Header from "../src/components/header/Header"
import Home from "../src/components/home/Home";
import Register from "../src/components/register/Register";
import Login from "../src/components/login/Login";
import Logout from "../src/components/logout/Logout";
import AuthGuard from "../src/components/routeGuards/AuthGuard";
import CarList from "./components/car-list/CarList";
import CarCreate from "./components/car-create/CarCreate";
import CarDetails from "./components/car-details/CarDetails";
import CarEdit from "./components/car-edit/CarEdit";
import ErrorPage from "./components/error-page/ErrorPage";
import EngineList from "./components/engine-list/EngineList";
import EngineCreate from "./components/engine-create/EngineCreate";
import EngineDetails from "./components/engine-details/EngineDetails";
import EngineEdit from "./components/engine-edit/EngineEdit";


function App() {
  return (
    <AuthProvider>
      <div id="container">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.CarList} element={<CarList />} />
          <Route path={Path.CarDetails} element={<CarDetails />} />
          <Route path={Path.EngineList} element={<EngineList />} />
          <Route path={Path.EngineDetails} element={<EngineDetails />} />

          <Route element={<AuthGuard />}>
            <Route path={Path.Logout} element={<Logout />} />
            <Route path={Path.CarCreate} element={<CarCreate />} />
            <Route path={Path.EngineCreate} element={<EngineCreate />} />
            <Route path={Path.CarEdit} element={<CarEdit />} />
            <Route path={Path.EngineEdit} element={<EngineEdit />} />

          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>


      </div>
    </AuthProvider>
  )
}

export default App
