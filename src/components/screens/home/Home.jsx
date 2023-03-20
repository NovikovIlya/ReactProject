
import './../../../assets/styles/global.css'
import {useContext, useEffect, useMemo, useState}  from 'react';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car/CreateCarForm';
import { CarSevice } from '../../../services/car.service';
import { AuthContext } from '../../../providers/Auth.Provider';




function Home(){
    const [cars,setCars] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [open,setOpen] = useState(false)


    const smenaVida = ()=>{
      setOpen(false);
    }
    
    useEffect(()=>{
      const fetchData = async () =>{
        //Получаем все карточки
        const response = await CarSevice.getAll(); 
        console.log(response.data);
        setCars(response.data)
        setLoading(false)
      }
      fetchData()
    },[])

    const {user,setUser} = useContext(AuthContext)
  
    return (
      <div className='main'>
        <h1 className='title'>ПРЕДСКАЗАНИЯ </h1>
      
        {/* {user ? (<> <h2>Welcome,{user.name}{user.famil}</h2><button onClick={()=>setUser(null)}>Logout</button></>) : (<button onClick={()=>setUser({name:'Max',famil:'lol'})}>Login</button>) } */}
        <button onClick={()=>setOpen(true)}  className='btn'>Добавить данные</button>

        <div className={`modale animated ${open ? 'showed' : ''}`}>
          <CreateCarForm setCars={setCars} smenaVida={smenaVida}/>
        </div> 

        <div >
            {
              isLoading ? <p>Загружаются...</p> :
              cars.length 
            ? cars.map(car => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className='images' src="https://i.guim.co.uk/img/media/e99aa20518d325acc2dadaba906bac28b4ab9be7/0_0_960_1323/master/960.jpg?width=700&quality=85&auto=format&fit=max&s=f870dd7021777bd6bdce5c83aea43a6b" alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <CarItem key={car.id} car={car}/>
                  </div>
                </div>
              </div>
                
            ))
            : <p>Нет данных</p> 
            }
        </div>
      </div>
    );
  }

export default Home;

