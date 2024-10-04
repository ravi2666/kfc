import React from "react";
import {
    Container, Row, Col
}from 'reactstrap';
import Photo1 from '../images/img1.jpg';
import Photo2 from '../images/img2.jpg';
import Photo3 from '../images/img3.jpg';
import Photo4 from '../images/img4.jpg';
import Photo5 from '../images/img5.jpg';
import Photo6 from '../images/img6.jpg';
import Photo7 from '../images/img7.jpg';
import Photo8 from '../images/img8.jpg';


function Containers() {
  return (
    <Container className="itemss">
      <Row>
         <p className = "itemheadtxt" width= "100%">BROWSE CATEGORIES</p>
        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos1"  src = {Photo1} alt = 'chocolate' width="100%"></img>
           <p className="txtitems">INTERNATIONAL BURGER </p>
        </Col>

        <Col xs= {6}  sm = {6} md = {4} lg = {3} >
           <img className = "photos1"  src = {Photo2} alt = 'chocolate' width="100%"></img>
           <p className="txtitems">MATCH DAY COMBO</p> 
        </Col>

        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos1"  src = {Photo3} alt = 'chocolate'width="100%"></img>
            <p className="txtitems">VALUE LUNCH SPECIALS</p>
        </Col>

        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos1"  src = {Photo4} alt = 'chocolate'width="100%"></img>
            <p className="txtitems">BOX MEALS</p>
        </Col>

        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos2"  src = {Photo5} alt = 'chocolate' width="100%"></img>
            <p className="txtitems">BURGERS</p>
        </Col>
        
        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos2"  src = {Photo6} alt = 'chocolate' width="100%"></img>
            <p className="txtitems">CHICKEN BUCKET</p>
        </Col>

        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos2"  src = {Photo7} alt = 'chocolate' width="100%"></img>
            <p className="txtitems">RICE BOWLZ</p>
        </Col>

        <Col xs= {6} sm = {6} md = {4} lg = {3} >
           <img className = "photos2"  src = {Photo8} alt = 'chocolate'  width="100%"></img>
           <p className="txtitems"> View All Menu--</p> 
        </Col>
      </Row>
    </Container>
    
    
  );
}
export default Containers;