import axios from "axios";

export const CarSevice = {
    //Для всех
    async getAll(){
        const response = await axios.get('https://63c682584ebaa802854750c5.mockapi.io/test1'); 
        
        return response;
    },
    //Для одной карточки
    async getById(id){
        const response = await axios.get(`https://63c682584ebaa802854750c5.mockapi.io/test1?${id}`); 
        console.log(response);
        
        return response.data[0];
    }
}