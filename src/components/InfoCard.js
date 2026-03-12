import '../App.css'; //App's styling document
import Card from 'react-bootstrap/Card';

const InfoCard = () => {
    return (
        <Card className='shadow-lg info-card'>
            <Card.Body className='info-card-top'>
                <h3 className='info-card-title'>About TemSpec</h3>
                <Card>
                    <Card.Body className='info-card-body'>
                        TemSpec is an app designed to help players of the game Temtem compare different Tems quickly and easily. The app lets users select two Tems and view their stats, types, strengths, weaknesses, and abilities side-by-side. This makes it easier for players to decide which Tem is stronger for battles, team building, or specific strategies. By organizing the information in a clear comparison view, TemSpec helps players make smarter choices and improve their gameplay.
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );

};

export default InfoCard;