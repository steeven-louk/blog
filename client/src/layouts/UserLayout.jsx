import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  let token =localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'));

  return (
    <>
        <Header token={token} />
        <Outlet/>
      <Footer />


    </>
  )
}

export default UserLayout