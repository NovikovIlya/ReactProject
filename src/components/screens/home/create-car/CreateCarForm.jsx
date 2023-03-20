import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'


const clearData = {
    price:'',
    name:'',
    image:'',
}

const CreateCarForm = ({setCars,smenaVida}) => {
  const [data,setData] = useState(clearData)

 


  const createCar = (event) =>{
    event.preventDefault()
    
    setCars(prev => [{
      id:prev.length + 1, ...data
      },...prev])

    setData(clearData)
  }
  

  return (
    <div>
        <form className={styles.form} > 
            <input className='CreateCarFileds' value={data.name} onChange={event => setData(prev => ({...prev,name:event.target.value}))} placeholder='Name'/>
            <input className='CreateCarFileds' value={data.price} onChange={event => setData(prev => ({...prev,price:event.target.value}))} placeholder='Price'/>
            <input className='CreateCarFileds' value={data.image} onChange={event => setData(prev => ({...prev,image:event.target.value}))} placeholder='Image'/>

            <button className='btn'  onClick={event => {
              createCar(event);
              smenaVida();
              }}>УВИДЕТЬ СУДЬБУ</button>
        </form>
    </div>
  )
}

export default CreateCarForm