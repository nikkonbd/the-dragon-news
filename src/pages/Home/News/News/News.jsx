import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsigts from '../EditorsInsigts/EditorsInsigts';

const News = () => {

    const news = useLoaderData();

    const { category_id, title, details, image_url, } = news;
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger">All news in this Category.</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsigts></EditorsInsigts>
        </div>
    );
};

export default News;