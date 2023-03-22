import React, { useState,useEffect } from 'react'
import styles from './CreateCarForm.module.css'
import axios from 'axios';
import {create} from 'zustand'

const clearData = {
    price:'',
    name:'',
    image:'',
}

const CreateCarForm = ({setCars,smenaVida}) => {
  // const [data,setData] = useState(clearData)
  const [value,setValue] = useState('')



  const createCar = (event,data) =>{
    event.preventDefault()
    
    // setCars(prev => [data,...prev])
    setCars(prev => [{
      id:prev.length + 1, data
      },...prev])

    // setData(clearData)    
  }

  const handleChange = (event)=>{
    setValue(event.target.value);
    console.log(value);
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/${value}/today/`)
      const data = response.data.content.text[0].content
      createCar(event,data)

      console.log(data);
      console.log(value);
      
      
    }
    ha()

    // const formData = new FormData(event.target);
    // axios.post('https://reqres.in/api/users', formData)
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    
    // setData(clearData)
    smenaVida();
  };
  

  const MDAs = ()=>{
    console.log(value);
    
  }
  

  return (
    <div>
        {/* <button onClick={MDAs}>MDA</button> */}
        <form className={styles.form} id='formElem' onSubmit={handleSubmit}> 
            <input className='CreateCarFileds'  placeholder='Имя' name="name" />
             {/* <input className='CreateCarFileds' value={data.price} onChange={event => setData(prev => ({...prev,price:event.target.value}))} placeholder='Фамилия' name="job" /> */} 
            <div className='sele'>
              <select   value={value} onChange={handleChange}>
                <option value=''></option>
                <option value='gemini'>Близнецы</option>
                <option value='capricorn'>Козерог</option>
              </select>
            </div>
            
            
            {/* <input className='CreateCarFileds' value={data.image} onChange={event => setData(prev => ({...prev,image:event.target.value}))} placeholder='Image' name="image" /> */}

            {/* <button className='btn'  onClick={event => {
              createCar(event);
              smenaVida();
              }}>УВИДЕТЬ СУДЬБУ</button> */}
              <button className='btn'  type="submit">Увидеть судьбу</button>
        </form>
    </div>
  )
}

export default CreateCarForm