import './App.css';
import MainPage from '../pages/MainPage/MainPage'
import RequestPage from '../pages/RequestPage/RequestPage'
import HistoryPage from '../pages/HistoryPage/HistoryPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/request" element={<RequestPage/>} />
                <Route path="/history" element={<HistoryPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
