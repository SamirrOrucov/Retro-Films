import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/Home/HomePage";
import NoPage from "./pages/NoPage/NoPage";
import Actors from "./pages/Actors/Actors";
import OldFilmsPage from "./pages/OldFilms/OldFilmsPage";
import ActorsDetail from "./pages/ActorsDetail/ActorsDetail";
import FilmsDetail from "./pages/FilmsDetail/FilmsDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/films" element={<OldFilmsPage />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/actors/:id" element={<ActorsDetail />} />
            <Route path="/films/:id" element={<FilmsDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit" element={<EditProfile />} />


            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
