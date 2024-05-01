import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'

function Item(props) {
    const { name, desc, date} = props
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
        <Button variant="primary">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;