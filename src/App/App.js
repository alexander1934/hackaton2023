import './App.css';
import MainPage from '../pages/mainPage/mainPage'
import RequestPage from '../pages/RequestPage/RequestPage'
import HistoryPage from '../pages/HistoryPage/HistoryPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/request/:id" element={<RequestPage/>} />
                <Route path="/request/:id/history" element={<HistoryPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
