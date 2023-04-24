import React from 'react';
import Qzone1 from '../../assets/qZone1.png';
import Qzone2 from '../../assets/qZone2.png';
import Qzone3 from '../../assets/qZone3.png';
import './Qzone.css';

const Qzone = () => {
    return (
        <div className='bg-light mt-4'>
            <h4 className='ms-4 pt-4'>Q zone</h4>
            <div className='img-size text-center'>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;