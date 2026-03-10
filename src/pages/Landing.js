import '../App.css'; //App's styling document
import logo from "../components/temspecLogo.svg";

import { useState, useEffect } from 'react';
import InfoCard from '../components/InfoCard';
import Buffer from '../components/Buffer';


const Landing = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

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

    console.log(isLoading);
    console.log(data);

    if (isLoading) {
        return (
            <Buffer/>
        );
    }
    else {
        return (
            <div className='landing-left col-md-5 col-12'>
                <InfoCard />
                <div>
                    <h4 className='blue-text-color'>{data[Math.floor(Math.random() * data.length)].name}</h4>
                </div>
            </div>
        );
    }
};

export default Landing;