import React from 'react';
import Link from 'next/link';

export const metadata = {
    title:'Property Finder',
    keywords: 'property, finder, real estate rental buy sell',
    description: 'Find your perfect rental property or home to buy in the UK',
}

const HomePage = () => {
    return (
        <div className='text-2xl'>
            <h1 className='text-2xl'>
                Welcome to Property Finder
            </h1>
            <Link href={{
                pathname: '/properties',
                query: {name: 'test'}
            }}>Go To Properties</Link>
        </div>
    );
};

export default HomePage;