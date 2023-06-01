import React from 'react'

const Card = ({nombre, dni}) => {
  return(
  <div className='card'>
    <h3>Estudiante añadido correctamente</h3>
    <p>Nombre: {nombre}</p>
    <p>DNI: {dni}</p>
  </div>
  )
}

export default Card