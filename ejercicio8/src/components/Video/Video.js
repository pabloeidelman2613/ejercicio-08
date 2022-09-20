import React, {Component} from "react";
import video from './movie.mp4';

export default class Video extends Component{
    render(){
        return(
            <div>
                <h3>Elemento Video</h3>
                <video width={315} height={315} controls><source src={video} type="video/mp4"/></video>
            </div>
        );
    }
}