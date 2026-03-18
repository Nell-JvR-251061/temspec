import '../App.css'; //App's styling document
import logo from "../components/temspecLogo.svg";

import { useState, useEffect } from 'react';
import InfoCard from '../components/InfoCard';
import Buffer from '../components/Buffer';
import TemDisplay from '../components/TemDisplay';
import TemEvolutionCard from '../components/TemEvolutionCard';
import Compare from './Compare';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let chosenTem;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://temtem-api.mael.tech/api/temtems');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

            setLoading(false);
        };


        getData();

    }, []);

    if (isLoading) {
        return (
            <Buffer />
        );
    }
    else {
        chosenTem = Math.floor(Math.random() * (data.length));
        console.log(data[0]);

        return (
            <div className='d-flex flex-row flex-wrap'>
                <div className='landing-left col-lg-5 col-12'>
                    <InfoCard />
                    <TemEvolutionCard
                        _dataBase={data}
                        _tem={data[chosenTem]}
                    />
                </div>
                <div className='landing-right col-lg-7 col-12'>
                    <TemDisplay>
                        {data[chosenTem]}
                    </TemDisplay>
                </div>

            </div>
        );
    }
};

export default Landing;