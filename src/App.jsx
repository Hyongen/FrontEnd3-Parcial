import { useState } from "react";
import './App.css'
import Card from './components/Card'

const validarDni = (dni) => {
  
  const cadenaCaracteres = dni.trim();
  const daniArray = cadenaCaracteres.split("");

  const hasNumber = daniArray.some((caracter) => {
    if (isNaN(caracter)) {
      return false;
    } else {
      return true;
    }
  });
  
  if (cadenaCaracteres.length > 6 && hasNumber) {
    return true;
  } else {
    return false;
  }
 };
 

const validarNombre = (nombre) => {
  if (nombre.length > 3 && nombre[0] !== " ") {
    return true;
  } else {
    return false;
  }
 };


function App() {

  const [stateNombre, setStateNombre] = useState("");
  const [stateDni, setStateDni] = useState("");
  const [stateError, setStateError] = useState(false);
  const [stateMostrar, setStateMostrar] = useState(false);

  const handleChangeNombre = (e) => setStateNombre(e.target.value);
  const handleChangeDni = (e) => setStateDni(e.target.value);

  const handleSubmit = (e)=>{
    console.log("Entra sumbit")
    e.preventDefault()
    const validacionNombre = validarNombre(stateNombre);
    const validacionDni = validarDni(stateDni);

    if(!validacionNombre || !validacionDni){
      setStateMostrar(false)
      setStateError(true)   
    }
    else {
      setStateMostrar(true)
      setStateError(false)
    }
  }

  return (
    <>
      <div>
        <h1>Carga de Estudiantes</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Nombre" onChange={handleChangeNombre} /><br></br>
          <input placeholder="DNI" onChange={handleChangeDni} /><br></br><br></br>
          <button type="submit" >Enviar</button><br></br>
          {stateError ? <p>Por favor chequea que la información sea correcta</p> : null}
        </form>
        
        {stateMostrar ? <Card nombre={stateNombre} dni={stateDni} /> : null}
      </div>
    </>
  )
}

export default App
