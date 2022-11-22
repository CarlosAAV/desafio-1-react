import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function cards(prop) {
  return (
    <div>

      <CardGroup className="kittyGap">
        <Card >
          
          {/*cards image*/}
          <Card.Img variant="top" src={prop.Image} />

          <Card.Body>
            <div className="card-flex">

              {/*card title*/}
              <Card.Title>{prop.Title}</Card.Title>

              <hr></hr>
              <Card.Text>

                {/*card description*/}
                {prop.Text}

              </Card.Text>

              {/*button*/}
              <Button variant="primary">Primary</Button>

            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default cards