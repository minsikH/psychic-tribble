import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard } from '../component/ProductCard';

export const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    //json-server에 있는 db.json 데이터를 요청 -> api 요청
    const getProduts = async() => {
        try {
            let url = 'http://localhost:5000/products';
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setProductList(data);
        } catch(error) {
            console.log('error:', error)
        }
    }

    useEffect(()=>{
        getProduts(); //json server에 있는 데이터를 불러오는 함수->api
    }, [])

  return (
    <Container>
        <Row className='product_list'>
            {
                productList.map((item, index)=>(
                    <Col key={index} lg={3}><ProductCard item={item} /></Col>
                ))
            }
        </Row>
    </Container>
  )
}
