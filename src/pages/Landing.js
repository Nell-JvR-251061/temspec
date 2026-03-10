import '../App.css'; //App's styling document

import { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from '../components/InfoCard';


const Landing = () => {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('https://temtem-api.mael.tech/api/temtems')
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);



    return (

        <div className='landing-left col-md-5 col-12'>
            <InfoCard />
        </div>
    );

};

export default Landing;