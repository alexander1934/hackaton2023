import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Главная</div>} />
                <Route path="/applications/:id" element={<div>Заявка</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
