import React from "react";
import "./ItemListContainer.css"
import { array } from "../../data/data.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer(){

    const getArray = (array) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(array)
            },  2000)
        })
    }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        getArray(array)
            .then(res=>setProducts(res))
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
    }, [])

    return(
        <div> 
            {
                loading?
                    <p id="itemLoading">Cargando, Por Favor Espere...</p>
                :
                    <ItemList items={products}/>
            }            
        </div>
    );
}