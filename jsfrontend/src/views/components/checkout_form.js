import React, {Component} from 'react';
import CheckoutForm from '../components/checkout_form'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class CheckoutForm extends Component {

  render(){
    return(<div className="form">
      <form onSubmit={this.props.handleCheckout}>
      <Form.Row>
        <Form.Group controlId="payment">
        <Form.Label>Form of Payment</Form.Label>
        <Form.Control type="select" name="payment" placeholder="email@example.com" />
          <option>Visa</option>
          <option>MasterCard</option>
          <option>First Born Child</option>
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
  }
}
