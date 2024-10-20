import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Axios from 'axios';

const MealDetailPage = () => {
    const [meal, setMeal] = useState([]);
    const { mealId } = useParams();
    const [isReadMore, setIsReadMore] = useState(false);

    const handleReadMore = () => {
        setIsReadMore((isReadMore) => !isReadMore);
    };

    useEffect(() => {
        const getMealDetail = async () => {
            const response = await Axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
            );
            setMeal(response.data.meals[0]);
        };

        getMealDetail();
    }, [mealId]);

    return (
        <MainLayout breadcrumb={true} breadcrumbTitle={'Meal'} heading={meal.strMeal}>
            <section className='container mx-auto -mt-[140px] sm:-mt-[180px] px-4 py-12'>
                <article className='flex flex-col gap-20'>
                    <div className='flex flex-col justify-center items-center gap-6'>
                        <div className='relative overflow-hidden cursor-pointer group flex justify-center items-center rounded-lg shadow-lg transform'>
                            <img
                                src={meal.strMealThumb}
                                alt={`${meal.strMeal || '...'}`}
                                loading='lazy'
                                className='w-[500px] aspect-video object-cover object-center transition-all duration-500 rounded-lg group-hover:scale-125'
                            />
                            <div className='absolute inset-0 bg-black/15'></div>
                        </div>
                        <div className='flex flex-wrap justify-start gap-4'>
                            <span className='text-slate-800'>Category: {meal.strCategory}</span>{' '}
                            <span className='text-slate-800'>From: {meal.strArea}</span>
                            <span className='text-slate-800'>Tags: {meal.strTags || '-'}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 border border-slate-300 shadow-lg px-6 pb-6 rounded-lg'>
                        <div className=''>
                            <h2 className='text-xl mt-6 text-slate-800 md:text-3xl font-bold mb-4'>
                                Ingredients
                            </h2>
                            <span>
                                {meal.strMeasure1} {meal.strIngredient1}
                            </span>
                            {', '}
                            <span>
                                {meal.strMeasure2} {meal.strIngredient2}
                            </span>
                            {', '}
                            <span>
                                {meal.strMeasure3} {meal.strIngredient3}
                            </span>
                            {', '}
                            <span>
                                {meal.strMeasure4} {meal.strIngredient4}
                            </span>
                            {', '}
                            <span>
                                {meal.strMeasure5} {meal.strIngredient5}
                            </span>
                        </div>
                        <div className=''>
                            <h2 className='text-xl mt-6 text-slate-800 md:text-3xl font-bold mb-4'>
                                Instructions
                            </h2>
                            <p className='text-justify'>
                                {isReadMore
                                    ? meal.strInstructions
                                    : meal.strInstructions?.substring(0, 420)}{' '}
                                {meal.strInstructions?.length >= 420 && (
                                    <span
                                        onClick={handleReadMore}
                                        className='font-semibold cursor-pointer text-slate-400'
                                    >
                                        {isReadMore ? '...Read Less' : 'Read More...'}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div>
                            <h2 className='text-xl mt-6 text-slate-800 md:text-3xl font-bold mb-4'>
                                Video Tutorial
                            </h2>
                            <div className='aspect-video'>
                                <iframe
                                    src={`https://www.youtube.com/embed/${
                                        meal.strYoutube?.split('v=')[1]
                                    }`}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                    className='w-full h-full rounded-lg'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </MainLayout>
    );
};

export default MealDetailPage;
