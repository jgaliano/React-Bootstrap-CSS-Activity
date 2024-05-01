import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grid.scss'
import '../Item/Item'
import Item from '../Item/Item';
import Input from '../Input/Input';

function Grid() {
  return (
    <Container>
      <Row className='contenedorInicial'>
        <Col className='col-1'>
           <Input></Input>
        </Col>
        <Col className='col-2'>
            <Item
              name="Hacer Senderismo"
              desc="Rutina de ejercicio semanal"
              date="12/04/2025"  
            ></Item>
            <Item
              name="Prácticar Natación"
              desc="Ejercicio Diario"
              date="02/07/2024"  
            ></Item>
            <Item
              name="Hacer Senderismo"
              desc="Rutina de ejercicio semanal"
              date="12/04/2025"  
            ></Item>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;