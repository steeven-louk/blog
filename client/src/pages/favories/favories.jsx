import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../../components/card/Card';
import { LoadingCard } from '../../components/Loading';


const Favories = () => {

    const [favoris, setFavoris] = useState([]);
    const [loading, setLoading] = useState(false);

    const id = JSON.parse(localStorage.getItem('id'));

    useEffect(() => {
        const getFavoris = async() =>{
            setLoading(true);
            const fav = await axios.get(`http://localhost:8080/api/favoris/${id}/favoris`)
            if(fav.status === 200){
                let {data} = fav;
                setFavoris(data?.favoris);
                setLoading(false);
            }
        }
        getFavoris();
    }, [id]);



  return (
    <div className='favorie mb-5'>
        <h2 className='text-uppercase text-center my-3'>my favories</h2>

        <div className="container card-container gap-3">
        {favoris?.map((items) =>(
            <>
                {loading ? <LoadingCard/> : <Card key={items._id} items={items} category={items?.category} />}
            </>
        ))}
        </div>
    </div>
  )
}

export default Favories