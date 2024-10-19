import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './Pages/categories';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<CategoriesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
