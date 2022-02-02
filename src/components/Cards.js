import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Fitpro Products </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Get the insights of nutrition'
              label='Fitpro Advance'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Get Huge recovery in just few hours. Make it count'
              label='OverPro'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Huge recovery in just few hours. Make it count'
              label='BePro'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Nutritions will give you strength to propel'
              label='FitPro Special'
              path='/products'
            />
            <CardItem
              src='images/img-15.jpg'
              text='Make muscles count your Strength'
              label='FitPro Special'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
