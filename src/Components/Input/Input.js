import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Input.scss'
import {
  addTodo
} from '../../reducers/todoSlice'

import { useDispatch } from 'react-redux';
import { useRef  } from 'react';


function Input() {

  const inputRefName = useRef();
  const inputRedDescription = useRef();
  const inputDueDate = useRef();

  const disptach = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    disptach(addTodo({'name':inputRefName.current.value, 'description': inputRedDescription.current.value, 'dueDate':inputDueDate.current.value}))
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="nombre" placeholder="Nombre" ref={inputRefName} />
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="desc" placeholder="Descripción" ref={inputRedDescription} />
        <Form.Label>Fecha Objetivo</Form.Label>
        <Form.Control type="date" placeholder="Fecha" ref={inputDueDate}/>
        <Button variant="success" className='button-form' onClick={addItem} >Agregar</Button>{' '}
      </Form.Group>
    </Form>
  );
}

export default Input;