
import './../../../assets/styles/global.css'
import {useContext, useEffect, useMemo, useState}  from 'react';
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car/CreateCarForm';
import { CarSevice } from '../../../services/car.service';
import { AuthContext } from '../../../providers/Auth.Provider';



function Home(){
    const [cars,setCars] = useState([])
    const [isLoading,setLoading] = useState(true)

    
    
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
      <div className=''>
        <h1>Cars catalog </h1>
        {user ? (<> <h2>Welcome,{user.name}{user.famil}</h2><button onClick={()=>setUser(null)}>Logout</button></>) : (<button onClick={()=>setUser({name:'Max',famil:'lol'})}>Login</button>) }
        <CreateCarForm setCars={setCars}/>
        <div>
          
            {isLoading ? <p>Грузится...</p> :
              cars.length 
            ? cars.map(car => (
                <CarItem key={car.id} car={car}/>
            ))
            : <p>Нет машин</p> }
          
           

        </div>
      </div>
    );
  }

export default Home;
