import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { appLogo, searchIcon, settingsIcon } from '../../resources/icons.js';

export default function Nav() {   
  return (
    <div className='navBar' id='navBar'>
        <div className='appLogo'>
            <Link to='/'>{appLogo()}</Link>
        </div>
        <div className='navButton'>
           <Link to='/popular'> <button>Popular</button></Link>
        </div>
        <div className='navButton'>
            <Link to='/categories'><button>Categories</button></Link>
        </div>
        <div className='navButton'>
            <Link to='/search'>{searchIcon()}</Link>
        </div>
        <div className='settingsIcon'>
        <Link to='/settings'>{settingsIcon()}</Link>
        </div>
    </div>
  );
}

