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



  const createCar = (event,data,dataName) =>{
    event.preventDefault()
    
    // setCars(prev => [data,...prev])
    setCars(prev => [{
      id:prev.length + 1, data,dataName
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

  const handleSubmitKozerog = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/capricorn/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Козерог'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitOven = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/aries/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Овен'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitTaurus = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/taurus/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Телец'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitGemini = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/gemini/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Близнецы'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitCancer = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/cancer/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Рак'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitLeo = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/leo/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Лев'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitVirgio = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/virgo/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Дева'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitLibra = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/libra/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Весы'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitScorpio = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/scorpio/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Скорпион'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitSagittarius = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/sagittarius/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Стрелец'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitAquarius = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/aquarius/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Водолей'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };
  const handleSubmitPisces = (event) => {
    event.preventDefault();
    async function ha(){
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://horoscopes.rambler.ru/api/front/v3/horoscope/sex/pisces/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Рыбы'
      createCar(event,data,dataName)
      console.log(data);
      console.log(value);
    }
    ha()
    smenaVida();
  };

  

  return (
    <div>
        {/* <button onClick={MDAs}>MDA</button> */}
        <form className={styles.form} id='formElem' onSubmit={handleSubmit}> 
            {/* <input className='CreateCarFileds'  placeholder='Имя' name="name" /> */}
             {/* <input className='CreateCarFileds' value={data.price} onChange={event => setData(prev => ({...prev,price:event.target.value}))} placeholder='Фамилия' name="job" /> */} 
            <div className=''>
              {/* <select   value={value} onChange={handleChange}>
                <option value=''></option>
                <option value='gemini'>Близнецы</option>
                <option value='capricorn'>Козерог</option>
              </select> */}
              <button className='btn1'  onClick={handleSubmitKozerog}>Козерог</button>
              <button className='btn1'  onClick={handleSubmitOven}>Овен</button>
              <button className='btn1'  onClick={handleSubmitTaurus}>Телец</button>
              <button className='btn1'  onClick={handleSubmitGemini}>Близнецы</button>
              <button className='btn1'  onClick={handleSubmitCancer}>Рак</button>
              <button className='btn1'  onClick={handleSubmitLeo}>Лев</button>
              <button className='btn1'  onClick={handleSubmitVirgio}>Дева</button>
              <button className='btn1'  onClick={handleSubmitLibra}>Весы</button>
              <button className='btn1'  onClick={handleSubmitScorpio}>Скорпион</button>
              <button className='btn1'  onClick={handleSubmitSagittarius}>Стрелец</button>
              <button className='btn1'  onClick={handleSubmitAquarius}>Водолей</button>
              <button className='btn1'  onClick={handleSubmitPisces}>Рыбы</button>
            </div>
            
            
            {/* <input className='CreateCarFileds' value={data.image} onChange={event => setData(prev => ({...prev,image:event.target.value}))} placeholder='Image' name="image" /> */}

            {/* <button className='btn'  onClick={event => {
              createCar(event);
              smenaVida();
              }}>УВИДЕТЬ СУДЬБУ</button> */}
              {/* <button className='btn'  type="submit">Увидеть судьбу</button> */}
        </form>
    </div>
  )
}

export default CreateCarForm