import React from "react";
import "./ItemDetail.css"
export default function ItemDetail({title, description, price, imageUrl}){
    return(
        <div id="itemDetail">
            <section>
                <img src={imageUrl} alt={title} className="imgDetail"/>
            </section>

            <section id="itemArticle">
                <h2> {title} </h2>
                <p> {price} </p>
                <article> {description} </article>
            </section>
        </div>
    )
}