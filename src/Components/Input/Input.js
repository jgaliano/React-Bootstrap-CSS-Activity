import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Input.scss'

function Input() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Nombre" />
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="desc" placeholder="Descripción" />
        <Form.Label>Fecha Objetivo</Form.Label>
        <Form.Control type="date" placeholder="Fecha" />
        <Button variant="success" className='button-form'>Agregar</Button>{' '}
      </Form.Group>
    </Form>
  );
}

export default Input;