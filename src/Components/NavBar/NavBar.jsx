//@ts-check

import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar(){
    return (
        <nav className="navBar">
            <article className="navLogo"> LogoGenerico™ </article>

            <article className="navList">
                <a href="">Menú</a>
                <a href="">Take-Away</a>
                <a href="">Establecimientos</a>
            </article>

            <article> <CartWidget/> </article>

        </nav>
    );
}