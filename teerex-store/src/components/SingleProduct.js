import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../context/Context';

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className='products'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={prod.imageURL} alt={prod.name} className='image' />
        <Card.Body className='card-body'>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>{prod.quantity}</Card.Text>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove
            </Button>
          ) : (
            <Button
              onClick={() => {
                if (prod.quantity === 0) {
                  alert('This item is not available')
                }
                else {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
              }
              }
            >
              Add to Cart
            </Button>)}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct