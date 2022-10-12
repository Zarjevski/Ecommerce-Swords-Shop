import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)    
    const getData = async(query)=>{
        try {
            const data = axios.get(`http://localhost:80/products`)
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getData()
    },[])


    return {products, loading, getData}
}
