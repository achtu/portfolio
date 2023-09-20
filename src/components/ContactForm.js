import React from 'react'
import { Button, Form } from "react-bootstrap";


export default function ContactForm() {

 
  
  return (
    <div className='form-wrp'>
      <h1>Do you have any questions or comments?</h1>
      <br/>
   <Form  >
      <Form.Group className="mb-3" controlId="submit">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="submit">
        <Form.Label>Comment here</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Button variant="warning" type="submit"  value="Submit"   onClick={(e) => {window.location.href ='mailto:oblakop9@gmail.com'}}>
          Submit
        </Button>
    </Form>
    </div>
  )
}
