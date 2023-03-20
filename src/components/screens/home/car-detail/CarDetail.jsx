
import { Link, useParams } from 'react-router-dom'
import { useEffect,useState,useContext } from 'react'
import {CarSevice} from './../../../../services/car.service'
import CarItem from '../car-item/CarItem'



const CarDetail = () => {
    const {id} = useParams()
    const [car,setCar] = useState({})
    

    useEffect(()=>{
        if (!id) return;

        const fetchData = async () =>{
          const data = await CarSevice.getById(id); 
          setCar(data)
        }
        fetchData()
      },[id])

    if (!car?.name) return <p>Loading</p>;

    
    
    

    return (
        <div className='main'>
            <Link to='/'>Back</Link>
            <CarItem car={car}/>
        </div>
    )
    
}

export default CarDetail