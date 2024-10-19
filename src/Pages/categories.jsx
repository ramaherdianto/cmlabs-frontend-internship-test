import { Link } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import CategoryList from '../components/Fragments/CategoryList';

export const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await Axios.get(
                    'https://www.themealdb.com/api/json/v1/1/categories.php'
                );

                console.log(response.data.categories);
                setCategories(response.data.categories);
            } catch (error) {
                console.log('Error fetching categories: ', error);
            }
        };

        getCategories();
    }, []);

    return (
        <>
            <MainLayout>
                <section className='container mx-auto -mt-[150px] px-4 py-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {categories.map((category) => (
                            <Link
                                key={category.idCategory}
                                href={`http://www.themealdb.com/api/json/v1/1/filter.php?c=${category.name}`}
                                className='group'
                            >
                                <CategoryList category={category} />
                            </Link>
                        ))}
                    </div>
                </section>
            </MainLayout>
        </>
    );
};
