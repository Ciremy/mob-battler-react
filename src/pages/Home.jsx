import React from 'react';

import MobCard from '../components/MobCard';
import { MONSTERS } from '../const.js';

function Home() {
  return (
    <div>
      <div className="carWrapper">
        {MONSTERS.map((monster) => (
          <MobCard key={monster.name} monsterDetail={monster} />
        ))}
      </div>
    </div>
  );
}

export default Home;
