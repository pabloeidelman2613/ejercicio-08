import React, { Component } from "react";
import './Button.css';

export default class Button extends Component{
    render(){
        return(
            <div>
                <label>Hola</label>
                <button className="Button">Hola Mundo!</button>
            </div>

        );
    }
}