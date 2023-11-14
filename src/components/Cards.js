import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Latest on the Hotels Listing</h1>
      <hr className='h'></hr>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='ABCD Hotel'
              label='9.0'
              loc='100 Smart Street, LA, USA'
              price='Starting from Rs10000'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='ABCD Hotel'
              label='9.0'
              loc='100 Smart Street, LA, USA'
              price='Starting from Rs10000'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='ABCD Hotel'
              label='9.0'
              loc='100 Smart Street, LA, USA'
              price='Starting from Rs10000'
              path='/services'
            />
          </ul>
          <h1 className='heading2'>Experience the Magic!</h1>
          <hr className='b'></hr>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;