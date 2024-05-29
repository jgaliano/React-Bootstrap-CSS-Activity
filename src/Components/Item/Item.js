import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import { 
  removeTodo 
} from '../../reducers/todoSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React from 'react';




function Item(props) {

    const { name, desc, date} = props

    const dispatch = useDispatch();

    const handleRemove = (e) => {
      dispatch(removeTodo({ name }));
    };
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Nombre</Card.Title>
        <Card.Text>
          {name}
        </Card.Text>
        <Card.Title>Descripción</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Title>Fecha</Card.Title>
        <Card.Text>
          {date}
        </Card.Text>
        <Button variant="primary" onClick={handleRemove}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;