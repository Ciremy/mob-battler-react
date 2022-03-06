import React from 'react'
import { Card } from 'react-bootstrap';
import {MONSTERS} from '../const.js'
import "./mobcard.css";


function MobCard({monsterDetail}) {
  console.log(monsterDetail)
  return (
    <div>
        <Card className="globalCard">
          <Card.Title className='cardText'>{monsterDetail.name}</Card.Title>
          <Card.Img className ="cardImg"src={monsterDetail.imgUrl} alt="Card image" />
      </Card>
    </div>
  )
}

export default MobCard