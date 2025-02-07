import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';


var intervalID = setInterval(myCallback, 1000);
let contador=0
function myCallback() {
  // Tu código debe ir aquí
  // Los parámetros son totalmente opcionales
  console.log("paso un segundo=60");
  console.log("paso un segundo=1");
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter seconds={contador}/>
    </React.StrictMode>,
  )
  contador++
  console.log(contador);
  console.log(segundos);

}

