import React from "react";

import avatar from './../../assets/avatar.jpg'

import './Home.scss'

const Home = () => {
  return <div className="home">
      <div className="home__content">
          <img src={avatar} alt='avatar' />
          <div className='home__content-info'>
              <p>Привет!</p>
              <p>Меня зовут Денис Морозкин и я студент универститета УлГПУ, 1 курс, МПИТОз-20</p>
          </div>
      </div>
  </div>;
};

export default Home;
