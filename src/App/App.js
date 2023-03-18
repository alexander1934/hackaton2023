import './App.css';
<<<<<<< HEAD
import MainPage from '../pages/MainPage/MainPage';
=======
>>>>>>> 4c2536d65a0f42fd676160d7875a7f850fee3a2a
import MainPage from '../pages/mainPage/mainPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/application" element={<div>qweqweqwe</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
