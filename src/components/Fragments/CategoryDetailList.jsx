import React from 'react';

const CategoryDetailList = ({ meal }) => {
    return (
        <article className='bg-[#f8f8f8] overflow-hidden flex flex-col justify-center items-center gap-6 rounded-lg shadow-md transform'>
            <div className='relative overflow-hidden'>
                <img
                    src={meal.strMealThumb}
                    alt={`${meal.strMeal} category`}
                    className='w-full aspect-video object-cover object-center transition-all duration-300 rounded-t-lg group-hover:opacity-75 group-hover:scale-125'
                />

                <div className='absolute inset-0 bg-black/30'></div>
            </div>
            <div className='p-4'>
                <h3 className='text-xl text-slate-800 font-semibold text-center'>
                    {meal.strMeal.length >= 25
                        ? meal.strMeal.substring(0, 25) + '...'
                        : meal.strMeal}
                </h3>
            </div>
        </article>
    );
};

export default CategoryDetailList;
