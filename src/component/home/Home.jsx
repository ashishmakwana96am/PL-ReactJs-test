import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Link to="/ModalA">
          <button className='btnA'>Button A</button>
        </Link>
        <Link to="/ModalB">
          <button className='btnB'>Button B</button>
        </Link>
      </div>
    </>
  )
}

export default Home