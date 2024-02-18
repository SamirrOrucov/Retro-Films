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
import Watchlist from "./pages/Watchlist/Watchlist";
import AdminMainLayout from "./layouts/AdminMainLayout/AdminMainLayout";
import Admin from "./pages/Admin/Admin";
import AdminFilms from "./pages/Admin/AdminFilms/AdminFilms";
import AdminActors from "./pages/Admin/AdminActors/AdminActors";
import AdminUsers from "./pages/Admin/AdminUsers/AdminUsers";
import AddFilm from "./pages/Admin/AdminFilms/AddFilm/AddFilm";
import EditFilm from "./pages/Admin/AdminFilms/EditFilm/EditFilm";

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
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/admin" element={<AdminMainLayout />}>
            <Route index element={<Admin />} />
            <Route path="/admin/films" element={<AdminFilms />} />
            <Route path="/admin/actors" element={<AdminActors />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/films/add" element={<AddFilm />} />
            <Route path="/admin/films/edit/:id" element={<EditFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
