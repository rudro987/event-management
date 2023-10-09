import React from 'react';

const NewsLetter = () => {
    return (
        <div className='h-80 flex gap-5 justify-center items-center bg-gray-500'>
            <div><p className='text-5xl'>Get the latest news of the upcoming events</p></div>
            <div className='flex justify-center items-center gap-5'>
            <input type="text" placeholder='Enter your email' className='h-14 w-96 rounded-lg px-5' />
            <button className='btn w-28 h-14 bg-btnColor text-white font-bold text-xl border-none hover:bg-gray-300 hover:text-black'>Send</button>
            </div>
        </div>
    );
};

export default NewsLetter;