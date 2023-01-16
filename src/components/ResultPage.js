import React from 'react';
import { Link } from 'react-router-dom';

const ResultPage = ({name,sectors,agree}) => {
    return (
        <div className='lg:w-3/4 w-[90%] h-auto shadow-lg mx-auto block rounded-2xl lg:p-20 sm:p-12 p-6 mt-24'>
            
            <h1 className='text-slate-600 text-2xl font-semibold text-center'>Input data</h1>
            <p className='mt-4'> <span className='text-slate-600 text-base font-semibold'>Name:</span> {name}</p>
            <p className='mt-4'> <span className='text-slate-600 text-base font-semibold'>Sectors:</span> {sectors}</p>
            <p className='mt-4'> <span className='text-slate-600 text-base font-semibold'>Agree:</span> {agree ?'True':'False'}</p>

            <Link to='/'><p role='button' className='flex justify-end mt-4 underline hover:text-blue-500'>Click here to go to the form page</p></Link>

        </div>
    );
};

export default ResultPage;