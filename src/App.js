import {Route,Routes} from "react-router-dom";

import MoviesPage from "./pages/moviesPage/MoviesPage";
import AllMovies from "./pages/allMovies/AllMovies";
import MoviesInfoPage from "./pages/moviesInfoPage/MoviesInfoPage";


function App() {





    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route path={'all'} element={<AllMovies/>}/>
                    <Route path={'all/:id'} element={<MoviesInfoPage/>}/>

                </Route>

            </Routes>


        </div>
    );
}

export default App;
