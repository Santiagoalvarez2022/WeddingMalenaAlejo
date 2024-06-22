import axios from "axios"


//OBTENER LISTA DE REGALOS 
export const get_gifts = async(setGift,navigate) =>{
    //setGift es una funcion que modifica el estado del componente 
    try {
        const {data} = await axios("https://sheet.best/api/sheets/528ef662-8551-4ab5-8f04-f0f4e964b1b0?raw=1");

        //solo enviaremos aquellos elementos cuyo status sea igual a "no" es decir que aun falta elegir.
        const  gift_list = data.filter((g)=> g.selected === "no" && g)
        setGift(gift_list)

    } catch (error) {
        //validar y arrojar error
        console.log("Error en la peticion de lista de regalos", {error:error.message})
        navigate("/Error");
        throw Error("Ocurrio un error")
    }
}

