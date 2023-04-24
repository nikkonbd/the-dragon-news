import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsCart.css';
import moment from 'moment/moment';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-3 mt-4">
            <Card.Header>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-4 '>
                        <Image className='author-img' src={author?.img} roundedCircle />
                        <div className='pt-3'>
                            <h6 className='mb-0'>{author.name}</h6>
                            <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye></FaEye>  {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;