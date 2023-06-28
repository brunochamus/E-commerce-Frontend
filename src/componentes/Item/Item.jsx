import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cards-prod'>
      <Card className='cards-total' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className='cards-font'>
          <Card.Title className='prod' >Producto:</Card.Title>
          <Card.Text> {nombre} </Card.Text>
          <Card.Text>${precio} </Card.Text>
          <Card.Text>ID: {id} </Card.Text>
          <Link to={`/item/${id}`} className='btn-add' variant="primary">Mas detalles</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
