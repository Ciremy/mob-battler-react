import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Label,Form,Input} from 'reactstrap'
import { BASE_API_URL } from '../../../const'

function MonsterForm() {
    const params = useParams()



    const [monster, setMonster] = useState({})


    const getInitialData = async() =>{
        const fetchedMonster = await axios.get(`${BASE_API_URL}/monsters/${params.id}`)
        console.log(fetchedMonster.data)
        setMonster(fetchedMonster.data)
    }
    useEffect(() => {
        getInitialData()
    
    }, [])
    


  return (
      <>
        <h2>MonsterForm</h2>
        <Form className="formWrapper">
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
    </Form>
      </>
    
  )
}

export default MonsterForm