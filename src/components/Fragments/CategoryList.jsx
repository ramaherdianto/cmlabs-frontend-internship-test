import React from 'react';

const CategoryList = ({ category }) => {
    return (
        <article className='bg-[#f8f8f8] flex flex-col justify-center items-center gap-6 rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out transform hover:scale-105'>
            <img
                src={category.strCategoryThumb}
                alt={`${category.strCategory} category`}
                className='transition-opacity w-3/4 md:w-full duration-300 group-hover:opacity-75'
            />
            <h3 className='text-xl text-slate-800 font-semibold text-center'>
                {category.strCategory}
            </h3>
        </article>
    );
};

export default CategoryList;
