
import './../../../assets/styles/global.css'
import {useContext, useEffect, useMemo, useState}  from 'react';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car/CreateCarForm';
import { CarSevice } from '../../../services/car.service';
import { AuthContext } from '../../../providers/Auth.Provider';
import axios from 'axios';

import CarDetail from './car-detail/CarDetail';






function Home(){

    const [cars,setCars] = useState([
      // id: 1,
      // data: 'asdasdasda',
      // dataName : 's'
    ])
    const [isLoading,setLoading] = useState(true)
    const [open,setOpen] = useState(false)
    

    // useEffect(()=>{
    //   const fetchData = async () =>{
    //     //Получаем все карточки
    //     // const response = await CarSevice.getAll(); 
    //     const response = await axios.get('https://reqres.in/api/users')
    //     // console.log(response.data);
    //     console.log(response.data.data);
    //     // setCars(response.data)
    //     setCars(response.data.data)
    //     setLoading(false)
    //   }
    //   fetchData()
    // },[CreateCarForm])

    

    const smenaVida = ()=>{
      setOpen(false);
    }
    
    const inf = ()=>{
      console.log(cars);
      
      
    }


  
    return (
      <>
      <div className='main'>
      <div className={`modale animated ${open ? 'showed' : ''}`}>
          <CreateCarForm setCars={setCars} smenaVida={smenaVida} />
      </div> 
        {/* <button onClick={inf}>CLICK</button> */}
        <h1 className='title'>❤️ЛЮБОВНЫЙ ГОРОСКОП</h1>
      
        {/* {user ? (<> <h2>Welcome,{user.name}{user.famil}</h2><button onClick={()=>setUser(null)}>Logout</button></>) : (<button onClick={()=>setUser({name:'Max',famil:'lol'})}>Login</button>) } */}
        <button onClick={()=>setOpen(true)}  className='btn'>Прочитать судьбу</button>

        {/* <div className={`modale animated ${open ? 'showed' : ''}`}>
          <CreateCarForm setCars={setCars} smenaVida={smenaVida} />
        </div>  */}

        <div >
            {
              
              cars.length 
            ? cars.map(car => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className='images' src="https://i.ibb.co/PDKtVXX/image.jpg" alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <CarItem key={car.id} car={car}/>
                    
                  </div>
                </div>
              </div>
                
            ))
            : 
            <p className='textHome'></p> 
            }
        </div>
      </div>
      </>
    );
    
  }

export default Home;

