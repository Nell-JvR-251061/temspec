import '../App.css';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const TemEvolutionCard = ({_dataBase, _tem }) => {
    let tem = _tem;
    let data = _dataBase;

    console.log(tem);
    console.log(data);

    let evos = tem.evolution.evolutionTree.map(e => e.number);
    let names = tem.evolution.evolutionTree.map(e => e.name)


    let imgs = evos.map(element => {
        return data[element - 1].wikiRenderStaticUrl;
    });

    return (
        <Container className='tem-evo'>
            <Row className='evo-title'>
                <h2 className='text-center primary-text-font blue-text-color no-margin'>Evolution Chain</h2>
            </Row>

            <Row className='evo-card'>
                {imgs.map((url, index) => (
                    <Col key={index} className='d-flex flex-column justify-content-center align-items-center justify-content-evenly'>
                        <img src={url} className='img-fluid justify-self-center'></img>
                    </Col>
                ))}
            </Row>

            <Row className='evo-names'>
                {imgs.map((url, index) => (
                    <Col key={index} className='d-flex flex-column justify-content-center align-items-center justify-content-evenly'>
                        <h4 className='blue-text-color'>{names[index]}</h4>
                    </Col>
                ))}
            </Row>
        </Container>
    );


};

export default TemEvolutionCard;