import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardPelis from './CardPelis';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const Formulario = () => {
  const [peliculas, setPeliculas] = useState(JSON.parse(localStorage.getItem("peliculas")) || [])
  const [form,setForm]=useState({
    titulo: "",
    genero: "",
    descripcion: ""
  })
  const handleBorrar =(e,index)=>{
    const peliculasNuevas = peliculas.filter((_,i)=>(i!==index))
    setPeliculas(peliculasNuevas)
  }
    const handleSubmit = (e)=>{
      e.preventDefault()
     const {titulo,genero,descripcion} = form
     const pelicula = {titulo,genero,descripcion}
     setPeliculas([...peliculas,pelicula])
     
     setForm({
      titulo: "",
      genero: "",
      descripcion: ""
     })
    }
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
useEffect(()=>localStorage.setItem("peliculas",JSON.stringify(peliculas)),[peliculas])
    return (
        <>
      <Card className='my-5'>
        <Card.Header>Llenar el formulario para crear una cita</Card.Header>
        <Form onSubmit={handleSubmit}>
          <Card.Body className="celeste">
            <Form.Group className="mb-3" controlId="formPelicula">
              
              <Form.Control
                type="text"
                required
                value={form.titulo}
                onChange={handleChange}
                name="titulo"
                placeholder="Titulo"
              />
            </Form.Group>
            <Form.Select name="genero" value={form.genero} onChange={handleChange} aria-label="Default select example">
      <option value="" disabled>Genero</option>
      <option  value={form.comedia}>Comedia</option>
      <option value={form.drama}>Drama</option>
      <option  value={form.infantil}>Infantil</option>
              
    </Form.Select>
            
    <FloatingLabel controlId="floatingTextarea2" className='my-3' label="descripcion">
        <Form.Control
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
          as="textarea"
          placeholder="escribe la descripcion"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button className="celeste" type="submit">
              Enviar
            </Button>
          </Card.Footer>
        </Form>
      </Card>
        {peliculas.map((pelicula,index)=> <CardPelis pelicula={pelicula} index={index} handleBorrar={handleBorrar} key={index}/>)}
     
    </>
    );
};

export default Formulario;