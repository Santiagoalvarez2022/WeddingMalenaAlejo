import axios from "axios"


//OBTENER LISTA
export const get_guest = async(setGuest) =>{
  
    //setGuest es una funcion que modifica el estado del componente 
    try {

        const {data} = await axios("https://sheet.best/api/sheets/051414f2-6ae3-43d7-92b9-e1f94c80c419?_raw=1");
        setGuest(data)
    } catch (error) {
        //validar y arrojar error
        console.log("Error en la peticion de lista de invitados ", {error:error.message})
        
    }
}



//MODIFICAR LISTA

export const confirm_guest = async(id) =>{
   
    try {
        //evaluo si ya la acepto?  

        //modifico lista
        const data = await axios.patch(`https://sheet.best/api/sheets/051414f2-6ae3-43d7-92b9-e1f94c80c419/${id}`,{Asiste:"SI"})
        return data

    } catch (error) {
        console.log("Error en la modificacion de lista de invitados ", {error:error.message})
      
    }
}