import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreCard from '../components/StoreCard';
// import items from '../data/items.json';

const Store = () => {
    const [items, setItems] = useState<any[]>([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setItems(res))
    })
    console.log(items);
    
    return (
        <div>
            <Row md={2} sm={1} lg={3}>
                {items.map((item) => (
                    <Col key={item.id}>
                        <StoreCard {...item}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Store