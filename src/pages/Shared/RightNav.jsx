import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';

const RightNav = () => {
    return (
        <div>
            <h4 className='py-3'>Login With</h4>
            <Button className='px-5' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button className='mt-2 px-5' variant="outline-secondary"><FaGithub /> Login With GitHub</Button>
            <div>
                <h4 className='mt-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightNav;