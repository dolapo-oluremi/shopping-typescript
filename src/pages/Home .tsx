import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import HeaderCarousel from '../components/HeaderCarousel'
import ModalComp from '../components/ModalComp'


const Home = () => {


  return (
    <Row>
      <HeaderCarousel />
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <Row style={{marginTop: "5px" }}>
          <Col style={{ width: "49.8%", height: "70vh", backgroundColor: "red" }}>Big Lef</Col>
          <Col style={{ width: "49.8%", height: "70vh", backgroundColor: "blue", display: "flex", flexDirection: "column"}}>
            <Row style={{height:"49.8%%", backgroundColor:"yellow"}}>Top right</Row>
            <Row>
              <Col>Bottom right left</Col>
              <Col>Bottom right right</Col>
            </Row>
          </Col>
        </Row>
        <div style={{ backgroundColor: "yellow", width: "100%", height: "12vh", marginTop:"5px" }}></div>
      </Row>
    </Row>
  )
}

export default Home 