import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grid.scss'
import '../Item/Item'
import Item from '../Item/Item';
import Input from '../Input/Input';
import { useSelector } from 'react-redux';


function Grid() {

  const todos = useSelector ((state)=>state.todos.value)

  // const tareas = [{
  //   name: 'Programar',
  //   desc: 'Renderizar proyecto',
  //   date: '12/04/2025'
  // },
  // {
  //   name: 'Running',
  //   desc: '10km pista',
  //   date: '12/12/2024'
  // }]
  return (
    <Container>
      <Row className='contenedorInicial'>
        <Col className='col-1'>
           <Input></Input>
        </Col>
        <Col className='col-2'>
          { todos.map((tarea)=>(
            <Item name={tarea.name} desc={tarea.desc} date={tarea.date}  
            ></Item>
          )) }
           
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;