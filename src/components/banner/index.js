import React from 'react';
import './banner.css';
import BannerImg from '../../assets/imgs/banner.png';

export function Banner() {
     return (
          <header className='banner'>

               <img src={BannerImg} alt='Banner ' />
          </header>
     )
}