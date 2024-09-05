import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const CardPelis =  React.memo(({ pelicula, handleBorrar, index })  => {
    return (
        <Card style={{ width: '18rem' }}>
            {console.log(index)}
        <Card.Body>
          <Card.Title>{pelicula.titulo}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pelicula.genero}</Card.Subtitle>
          <Card.Text>
            {pelicula.descripcion}
          </Card.Text>
          <Button onClick={(e)=>{
handleBorrar(e,index)
          }} variant="danger" type="submit">
              Enviar
            </Button>
        </Card.Body>
      </Card>
     );
    });

export default CardPelis;