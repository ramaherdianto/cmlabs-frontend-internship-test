import React, { useEffect, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import CategoryDetailList from '../components/Fragments/CategoryDetailList';

const CategoryDetailPage = () => {
    const [meals, setMeals] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const getMeals = async () => {
            try {
                const response = await Axios.get(
                    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
                );
                console.log(response.data.meals);
                setMeals(response.data.meals);
            } catch (error) {
                console.log('Error fetching meals data: ', error.message);
            }
        };

        getMeals();
    }, [categoryName]);

    useEffect(() => {
        document.title = `Category || ${categoryName}`;
    }, [categoryName]);

    return (
        <MainLayout breadcrumb={true} heading={categoryName}>
            <section className='container mx-auto -mt-[180px] px-4 py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {meals.map((meal) => (
                        <Link key={meal.idMeal} to={`/category/${''}`} className='group'>
                            <CategoryDetailList meal={meal} />
                        </Link>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default CategoryDetailPage;
