import '../App.css'; //App's styling document
import Card from 'react-bootstrap/Card';

const InfoCard = () => {
    return (
        <Card>
            <Card.Body className='info-card-top'>
                <h3 className='info-card-title'>About TemSpec</h3>
                <Card>
                    <Card.Body className='info-card-body'>This is some text within a card body.</Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );

};

export default InfoCard;