import React from "react";
import Counter from "./Counter.jsx" /*Importamos el componento Couter que contienen el codigo de la card */
import PropTypes from "prop-types" /*Aqui importamos los proptypes */

//create your first component
const Home = (props) => {
    return (

		<div className=" bg-black mx-auto py-3">
			<h2 className=" d-flex justify-content-center text-light bg-dark py-2"> Counter Simple </h2>
			<div className="data">
			<h4 className=" d-flex justify-content-center text-light ms-4 col-4 bg-dark py-2 rounded-3 border border-secondary"> 4geeks Academy / Xavier Silva</h4>
			<img src=".../img/Logo4Geeks.png" alt="" />
			</div>
			
	
			<div className="d-flex  justify-content-center align-items-center vh-100 bg-black ">


				<div className="text-center mt-4 py-4 px-5 d-flex justify-content-around bg-dark align-items-center col-md-8 rounded-2 border border-white">
					<div className="col-2 mx-2 bg-white py-2 px-3  border border-info rounded-2"><img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" height="45px"></img></div>
					<div className="col-2 mx-2 border border-info  rounded-3"> <Counter unidad={Math.floor(props.seconds/10000)%10}/></div>
					<div className="col-2 mx-2 border border-info rounded-3"> <Counter unidad={Math.floor(props.seconds/1000)%10}/></div>
					<div className="col-2 mx-2 border border-info rounded-3"> <Counter unidad={Math.floor(props.seconds/100)%10}/></div>
					<div className="col-2 mx-2 border border-info rounded-3"> <Counter unidad={Math.floor(props.seconds/10)%10}/></div>
					<div className="col-2 mx-2 border border-info rounded-3"> <Counter unidad={Math.floor(props.seconds/1)%10}/></div>
				
				
				</div>
			</div>
		</div>
    );
}

/*Home va importar el resultado del Counter por eso defeinimos con tipo de propiedades */
Home.propTypes = {
	/*se define el nombre que adquiera la propiedad se define Second para definir la cantidad de segundos, se iguala a PropTypes que es el objeto que devuelve la libreria */
	seconds: PropTypes.number,
}

export default Home;
