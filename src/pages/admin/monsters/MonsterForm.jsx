import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Label,Form,Input} from 'reactstrap'
import { BASE_API_URL } from '../../../const'

function MonsterForm() {
    const params = useParams()


    const [isLoading, setIsLoading] = useState(false)
    const [monster, setMonster] = useState({})
    const [attacks, setAttacks] = useState({}) 

    const getInitialData = async() =>{
        setIsLoading(true)
        const fetchedMonster = await axios.get(`${BASE_API_URL}/monsters/${params.id}`)
        setMonster(fetchedMonster.data)
        const fetchedAttacks = await axios.get(`${BASE_API_URL}/attacks`)
        setAttacks(fetchedAttacks.data)
        setIsLoading(false)
    }



    const handleChange = (value, key) => {
        const updatedValue = {...monster}
        updatedValue[key] = value
        setMonster(updatedValue)
    }

    useEffect(() => {
        getInitialData()
    }, [])
    


  return (
      <>
      
        <h2>MonsterForm</h2>
        {!isLoading && <Form className="formWrapper">
    <Label>
        Name
    </Label>
        <Input type='text' value={monster.name} /> 
    <Label>
        Life Point
    </Label>
        <Input type='number' value={monster.lifePoint} />
    <Label>
        Mana
    </Label>
        <Input type='number' value={monster.mana}/>


    {"Attacks" in monster && monster.Attacks.map((attack , index) => 
        <>
        <Label>
            Attack {index +1}
        </Label>    
            <Input key={attack.id} value={attack.name}type='select'>
                {attacks.map(attack =>
                <option key={attack.id}>{attack.name}</option>)}

            </Input>
        </>
    )}
    </Form>}
    {isLoading && <div>Loading...</div>}
      </>
    
  )
}

export default MonsterForm