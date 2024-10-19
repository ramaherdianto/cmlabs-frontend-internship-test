import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './Pages/categories';
import CategoryDetailPage from './Pages/categoryDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<CategoriesPage />} />
                <Route path='/category/:categoryName' element={<CategoryDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
