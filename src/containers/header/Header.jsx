import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>
          Lets Build something amazing with GPT Open Ai
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Alias, ullam beatae.
           At assumenda, nostrum corrupti dolorem 
           ipsam, quam neque quod consequuntur aliquam 
        </p>
        <div className="gpt3__header-content__input">
          <input type='email' placeholder='your email address'/>
          <button type='button'>Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access</p>
        </div>        
          </div>
          <div className="gpt3__header-image">
          <img src={ai} alt='ai' />
      </div>
      </div>
  )
}

export default Header