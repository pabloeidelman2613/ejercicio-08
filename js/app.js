'use strict';

const ReactElement = React.createElement;

export default class Button extends React.Component{
    // render no puedo escribirlo...
  /*  render(){
        return(
            <div>
                <label>Hello there </label>
                <button className="Button"> Hello Button World from React!</button>
            </div>
        );
    }*/

    render(){
        return ReactElement(
            'button',
            { },
            'Super Boton'
        );

    }
}

const domContainer = document.getElementById("myApp");
ReactDOM.render(ReactElement(Button) , domContainer);