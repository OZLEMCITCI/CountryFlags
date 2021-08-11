import React from 'react';
import { Card, Button } from "react-bootstrap";
import datas from "./data.js";
import "./Main.css"

const Kart = (probs) => {
    
    console.log(probs);
    
    const { name, text, img } = datas[probs.index];
    
  
    return (
   <div>
  <Card style={{ width: '18rem', float: "left"}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
                    <Card.Title>{name }</Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  
        </div>
    )
}


const Main = () => {
    return (
        <div>
            <Kart index="0"/>
            <Kart index="1" />
            <Kart index="2"/> 
            
        </div>
    )
}

export default Main

