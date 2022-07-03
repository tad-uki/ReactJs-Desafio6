//@ts-check
import React from "react";
import "./ItemListContainer.css"

export default function Item( {title, description, price, imageUrl}){
    return(
        <section className="itemEach">
            <div>
                <img src={imageUrl}/>
            </div>

            <div>
                <h3> {title} </h3>
                <p> ${price} </p>
                <article> {description} </article>
                <button> Ver más... </button>
            </div>
        </section>
    );
}