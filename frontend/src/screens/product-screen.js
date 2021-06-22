import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/rating'
import axios from 'axios'
export default function Product({ match }) {

  const [product, setProduct] = useState({})

  useEffect(()=>{
    fetchProduct()
  })
  const fetchProduct = async () =>{
    const { data } = await axios.get(`/api/products/${match.params.id}`)
    setProduct(data)
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          {/* Variant flush takes away side borders */}
          <ListGroup variant='flush' >
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                text={`${product.numberOfReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup >
            <ListGroup.Item>
              <Row>
                <Col>
                  Price :
                </Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup >
            <ListGroup.Item>
              <Row>
                <Col>
                  Status
                </Col>
                <Col>
                  <strong> {product.countInStock > 0 ? 'In stock' : 'Out of stock'}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button 
              disabled={product.countInStock === 0}
              className="btn-block" 
              type="button">
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
