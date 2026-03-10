import '../App.css'; //App's styling document
import logoBlue from './temspecLogoBlue.svg';

const Buffer = () => {
    return (
        <div className='col-12 d-flex flex-column justify-content-center' id="buffer-logo">
            <img src={logoBlue} className='App-logo'></img>
            <h1 className='align-self-center m-5 blue-text-color primary-text-font'>Loading . . .</h1>
        </div>
    );
};

export default Buffer;