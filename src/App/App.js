import './App.css';
import mainPage from '../pages/mainPage/mainPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<mainPage />} />
                <Route path="/application" element={<div>qweqweqwe</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
