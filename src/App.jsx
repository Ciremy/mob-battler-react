import logo from './logo.svg';
import './App.css';
import MobCard from './components/MobCard';
import {MONSTERS} from './const.js'

function App() {
  return (
    <div className="App">
        <div className="carWrapper">{MONSTERS.map((monster) => <MobCard key={monster.name} monsterDetail={monster}/>)}</div>
    </div>
  );
}

export default App;
