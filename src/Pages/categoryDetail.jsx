import React, { useEffect, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import CategoryDetailList from '../components/Fragments/CategoryDetailList';

const CategoryDetailPage = () => {
    const [meals, setMeals] = useState([]);
    const { categoryName } = useParams();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const getMeals = async () => {
            try {
                const response = await Axios.get(
                    `http://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
                );
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
        <MainLayout breadcrumb={true} breadcrumbTitle={'Category'} heading={categoryName}>
            <section className='container mx-auto -mt-[180px] px-4 py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {meals?.map((meal) => (
                        <Link
                            key={meal.idMeal}
                            to={`/meals/${meal.idMeal}`}
                            className='group'
                            onClick={scrollToTop}
                        >
                            <CategoryDetailList meal={meal} />
                        </Link>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default CategoryDetailPage;
