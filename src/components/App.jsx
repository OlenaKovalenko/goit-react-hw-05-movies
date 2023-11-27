import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import { AppLayout } from "./AppLayout/AppLayout";

const Home = lazy(() => import("pages/HomePage"));
const Movies = lazy(() => import("pages/MoviesPage"));
const MovieDetails = lazy(() => import("pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
