import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "pages/HomePage";
import Movies from "pages/MoviesPage";
import MovieDetails from "pages/MovieDetailsPage";
import NotFoundPage from "pages/NotFoundPage";
import { AppLayout } from "./AppLayout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
