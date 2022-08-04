import {Route,Routes,Navigate} from "react-router-dom";

import MoviesPage from "./pages/moviesPage/MoviesPage";
import GenrePage from "./pages/genrePage/GenrePage";
import AllMovies from "./pages/allMovies/AllMovies";
import FilterGanrePage from "./pages/filterGanrePage/FilterGanrePage";


function App() {





    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route index element={<Navigate to={'all'}/>}/>
                    <Route path={'genre'} element={<GenrePage/>}>
                        <Route path={':id'} element={<FilterGanrePage/>}/>
                    </Route>
                    <Route path={'all'} element={<AllMovies/>}/>

                </Route>

            </Routes>


        </div>
    );
}

export default App;
