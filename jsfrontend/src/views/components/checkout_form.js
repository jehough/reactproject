import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CheckoutForm = props => (<div className="form">
      <form onSubmit={props.handleCheckout}>
      <Form.Row>
        <Form.Group controlId="payment">
        <Form.Label>Form of Payment</Form.Label>
        <Form.Control as="select" name="payment">
          <option>Visa</option>
          <option>MasterCard</option>
          <option>First Born Child</option>
        </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="cardnumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="text" name="cardnumber" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="cardname">
        <Form.Label>Name on Card</Form.Label>
        <Form.Control type="text" name="cardname" />
        </Form.Group>

        <Form.Group controlId="cardzip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" name="cardzip" />
        </Form.Group>
      </Form.Row>

      <Button variant="info" type="submit">Checkout</Button>

      </form>

    </div>)
export default CheckoutForm
