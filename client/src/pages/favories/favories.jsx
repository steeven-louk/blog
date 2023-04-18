import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Favories = () => {

    const [favoris, setFavoris] = useState([]);

    const id = JSON.parse(localStorage.getItem('id'));

    const getFavoris = async() =>{
        const fav = await axios.get(`http://localhost:8080/api/user/${id}/favoris`)
        if(fav.status === 200){
            let {data} = fav;
            setFavoris(data?.favoris);
        }
    }

    useEffect(() => {
        getFavoris();
    }, []);

    console.log(favoris);


  return (
    <div className='favorie mb-5'>
        <h2 className='text-uppercase text-center my-3'>my favorie</h2>

        <div className="container">
            
        </div>
    </div>
  )
}

export default Favories