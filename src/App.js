import {Route,Routes,Navigate} from "react-router-dom";

import css from './App.module.css'
import MoviesPage from "./pages/moviesPage/MoviesPage";
import AllMovies from "./pages/allMovies/AllMovies";
import MoviesInfoPage from "./pages/moviesInfoPage/MoviesInfoPage";


function App() {





    return (
        <div className={css.container}>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route index element={<Navigate to={'all'}/>}/>
                    <Route path={'all'} element={<AllMovies/>}/>
                    <Route path={'all/:id'} element={<MoviesInfoPage/>}/>

                </Route>

            </Routes>


        </div>
    );
}

export default App;
