import './App.css';
import MainPage from '../pages/MainPage/MainPage';
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
