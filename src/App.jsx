import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoriesPage } from './Pages/categories';
import CategoryDetailPage from './Pages/categoryDetail';
import MealDetailPage from './Pages/mealDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<CategoriesPage />} />
                <Route path='/category/:categoryName' element={<CategoryDetailPage />} />
                <Route path='/meals/:mealId' element={<MealDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
