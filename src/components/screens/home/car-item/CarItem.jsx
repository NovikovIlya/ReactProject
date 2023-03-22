import styles from './../Home.module.css'
import { Link } from 'react-router-dom';
import {useStore} from './../../../../store'
import axios from 'axios';
import { useState,useEffect } from 'react';
import CarDetail from '../car-detail/CarDetail';






function CarItem({car}){


    

    // useEffect(()=>{
    //     async function Ha(){
    //         let resp =  await axios.post('https://aztro.sameerkumar.website/?sign=aries&day=today')
    //         let text2 = resp.data.description;
    //         setFes(text2)
    //         console.log(text2);
        
    //     }
    //     Ha()
    // },[])
    
    console.log(car)
    return(
        <div className={styles.item}>
            <Link className='linka' to='/'> ← Назад</Link>
            {/* <div className={styles.image} style={{backgroundImage:`url(${car.image})`}}></div> */}
            <div className={styles.info}>
            {/person/ig.test(window.location.href)? <img className='images' src="https://img.freepik.com/premium-vector/occult-esoteric-tarot-card-symbol-baphomet-skull_8071-24482.jpg" alt="Avatar" /> : '' }
            <h2>Узнайте</h2>
            {/* {/person/ig.test(window.location.href)? '' : <Link to={`person/${car.id}`} className='btn'>Узнать больше</Link> } */}
            <p>{car.data}</p>

            </div>
        </div>
    )
}

export default CarItem;