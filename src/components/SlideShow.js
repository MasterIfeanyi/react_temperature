import { Card } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'


const SlideShow = ({ imagesOfABreed, breedName }) => {
return (
    <Container>
    <Row xs={1} md={3} className="g-4">
   
            {imagesOfABreed.map((image, index) => {
        return (
            <Col>
                <Card key={index}
                    bg="primary"
                    id="card"
                    style={{ width: '18rem' }}
                >
                    <Card.Img id="cardImg" className="img-fluid" variant="top" src={image} fluid />
                    <Card.Body>
                        <Card.Title>{ breedName } dog specie</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )}
    )}
    
</Row >
</Container>
  
    )
}

export default SlideShow
