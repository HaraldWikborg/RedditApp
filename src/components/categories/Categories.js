import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {   
  return (
    <div className='categories'>
        <h1>Categories</h1>
        <ul className='category-list'>
            <Link to='/categories/animals'><li className='category-item'>Animals</li></Link>
            <Link to='/categories/art'><li className='category-item'>Art</li></Link>
            <Link to='/categories/automotive'><li className='category-item'>Automotive</li></Link>
            <Link to='/categories/education'><li className='category-item'>Education</li></Link>
            <Link to='/categories/fashion'><li className='category-item'>Fashion</li></Link>
            <Link to='/categories/food'><li className='category-item'>Food</li></Link>
            <Link to='/categories/health'><li className='category-item'>Health</li></Link>
            <Link to='/categories/nature'><li className='category-item'>Nature</li></Link>
            <Link to='/categories/people'><li className='category-item'>People</li></Link>
        </ul>
    </div>
  );
}
