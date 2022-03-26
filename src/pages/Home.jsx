import React, {useState,useEffect} from 'react'
import MobCard from '../components/MobCard';
import {MONSTERS,BASE_API_URL} from '../const.js'
import './home.css'
import axios from 'axios'

function Home() {

    const [monsters, setMonsters] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getInitilaData = async () =>{
        setIsLoading(true)
        const fetchedMonsters = await axios.get(`${BASE_API_URL}/monsters`)
        setMonsters(fetchedMonsters.data)
        setIsLoading(false)
    }

useEffect(() => {
    getInitilaData()
},[])



  return (
    <div>
        <div className="carWrapper right">
            {!isLoading && monsters.map((monster) => <MobCard className='card' key={monster.name + "right"} monsterDetail={monster}/>)}
        </div>
        <div className="carWrapper left">{monsters.map((monster) => <MobCard className='card' key={monster.name + "left"} monsterDetail={monster}/>)}</div>
    </div>
  )
}

export default Home