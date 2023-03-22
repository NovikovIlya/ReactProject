
import { Link, useParams } from 'react-router-dom'
import { useEffect,useState,useContext } from 'react'
import {CarSevice} from './../../../../services/car.service'
import CarItem from '../car-item/CarItem'
import axios from 'axios'
// import {useStore} from './../../../../store'


const CarDetail = ({car}) => {
    const {id} = useParams()
    // const [car,setCar] = useState()
    
    // useEffect(()=>{
    //   async function ha(){
    //     const response = await axios.get('https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/gemini/today/')
    //     const data = response.data.content.text[0].content
    //     setCar(data)
        
    //     console.log(data);
        
    //   }
    //   ha()
    // },[])

    // if (!car?.name) return <p>Loading</p>;

    // const {info} = useStore()
    
    

    return (
        <div className='main'>
            <Link className='linka' to='/'> ← Назад</Link>
            <CarItem car={car}/>
            
            
            
        </div>
    )
    
}

export default CarDetail