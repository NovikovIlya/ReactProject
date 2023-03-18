
import { Link, useParams } from 'react-router-dom'
import { useEffect,useState,useContext } from 'react'
import {CarSevice} from './../../../../services/car.service'
import CarItem from '../car-item/CarItem'
import { AuthContext } from '../../../../providers/Auth.Provider'
import { withAuth } from '../../../HOC/withAuth'

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
        <div>
            <Link to='/'>Back</Link>
            <CarItem car={car}/>
        </div>
    )
}

export default withAuth(CarDetail) 