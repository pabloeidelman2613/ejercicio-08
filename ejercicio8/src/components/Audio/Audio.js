import React, {Component} from "react";
import audio from './horse.ogv';

export default class Audio extends Component{
    render(){
        return(
            <div>
                <h3>3 Audios</h3>
                <ul>
                    <li><audio controls><source src={audio} type="audio/mp3"/></audio></li>
                </ul>
                <ul>
                    <li><audio controls><source src={audio} type="audio/mp3"/></audio></li>
                </ul>
                <ul>
                    <li><audio controls><source src={audio} type="audio/mp3"/></audio></li>
                </ul>
            </div>
        );
    }
}