import React from "react";
import "./SecondsCounter.css"
const SecondsCounter = (props) => {
    let unidades= Math.floor((props.seconds % 10) / 1);
    let decenas= Math.floor((props.seconds % 100) / 10);
    let centenas= Math.floor((props.seconds % 1000) / 100);
    let unidadesmillar= Math.floor((props.seconds % 10000) / 1000);
    let decenasmillar= Math.floor((props.seconds % 100000) / 10000);
    let centenasmillar= Math.floor((props.seconds % 1000000) / 100000);
    return (
        <div className="seconds-counter">
             

        
    
    <h1>Seconds </h1>

<p className="digit">{centenasmillar}</p>
<p className="digit">{decenasmillar}</p>
<p className="digit">{unidadesmillar}</p>
<p className="digit">{centenas}</p>
<p className="digit">{decenas}</p>
<p className="digit">{unidades}</p>

<h1> Counter</h1>
    </div>
    
    );
};

export default SecondsCounter;