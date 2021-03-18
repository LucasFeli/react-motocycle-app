import React from 'react';
import * as ReactBootCard from 'react-bootstrap'
import BMW from "./assets/bmw.jpg";

const HomeImages = () => {
  return ( 
    <ReactBootCard.CardGroup>
    <ReactBootCard.Card>
      <ReactBootCard.Card.Img variant="top" src={BMW} />
      <ReactBootCard.Card.Body>
        <ReactBootCard.Card.Title>Card title</ReactBootCard.Card.Title>
        <ReactBootCard.Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </ReactBootCard.Card.Text>
      </ReactBootCard.Card.Body>
      <ReactBootCard.Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </ReactBootCard.Card.Footer>
    </ReactBootCard.Card>
    <ReactBootCard.Card>
      <ReactBootCard.Card.Img variant="top" src={BMW} />
      <ReactBootCard.Card.Body>
        <ReactBootCard.Card.Title>Card title</ReactBootCard.Card.Title>
        <ReactBootCard.Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </ReactBootCard.Card.Text>
      </ReactBootCard.Card.Body>
      <ReactBootCard.Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </ReactBootCard.Card.Footer>
    </ReactBootCard.Card>
    <ReactBootCard.Card>
      <ReactBootCard.Card.Img variant="top" src={BMW} />
      <ReactBootCard.Card.Body>
        <ReactBootCard.Card.Title>Card title</ReactBootCard.Card.Title>
        <ReactBootCard.Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </ReactBootCard.Card.Text>
      </ReactBootCard.Card.Body>
      <ReactBootCard.Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </ReactBootCard.Card.Footer>
    </ReactBootCard.Card>
  </ReactBootCard.CardGroup>
   );
}
 
export default HomeImages;