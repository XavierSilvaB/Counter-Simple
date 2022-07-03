import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  return (
    <div className="card">
      <div className="card ">
      <h1>{props.unidad} </h1> 
      </div>
    </div>
  );
}


Counter.propTypes = {
	/*se define el nombre que adquiera la propiedad se define Second para definir la cantidad de segundos, se iguala a PropTypes que es el objeto que devuelve la libreria */
	unidad: PropTypes.number,
}


export default Counter;