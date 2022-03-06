import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

import './mobcard.css';

function MobCard({ monsterDetail }) {
  return (
    <div>
      <Card className="globalCard">
        <CardTitle className="cardText">{monsterDetail.name}</CardTitle>
        <CardImg className="cardImg" src={monsterDetail.imgUrl} alt="Card image" />
      </Card>
    </div>
  );
}

export default MobCard;
