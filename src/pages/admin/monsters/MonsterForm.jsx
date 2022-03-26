import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Label,Form,Input, Button} from 'reactstrap'
import { BASE_API_URL } from '../../../const'


const DEFAULT_ATTACK = {
    name : "",
}


function MonsterForm() {
    const params = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [monster, setMonster] = useState({})
    const [attacks, setAttacks] = useState([]) 

    const getInitialData = async() =>{
        setIsLoading(true)
        const fetchedMonster = await axios.get(`${BASE_API_URL}/monsters/${params.id}`)
        setMonster(fetchedMonster.data)
        const fetchedAttacks = await axios.get(`${BASE_API_URL}/attacks`)
        setAttacks([DEFAULT_ATTACK, ...fetchedAttacks.data])
        setIsLoading(false)
    }

    const handleChange = (value, key) => {
        const updatedValue = {...monster}
        updatedValue[key] = value
        setMonster(updatedValue)

    }

const handleAddAttack = () => {
    const updatedMonster = {...monster}
    updatedMonster.Attacks.push(DEFAULT_ATTACK)
    setMonster(updatedMonster)
}


const handleChangeAttack = (attackId, idx) => {
    const updatedAttacks = [...monster.Attacks]
    const newAttackOjb = attacks.find(attack => attack.id === attackId)
    updatedAttacks[idx] = newAttackOjb
    setMonster({...monster, Attacks : updatedAttacks})
}

    useEffect(() => {
        getInitialData()
    }, [])
    
// TODO : filter available attacks
// TODO : add validation before submitting
// TODO : parse payload before posting => Attacks {}[] => POST Attacks id[]

if (isLoading) {
    return <div>loading...</div>
}


  return (
      <>
        <h2>MonsterForm</h2>
        <Form className="formWrapper">
    <Label>
        Name
    </Label>
        <Input type='text' value={monster.name} onChange={event=>handleChange(event.target.value, "name")}/>
    <Label>
        Life Point
    </Label>
        <Input type='number' value={monster.lifePoint} onChange={event =>handleChange(event.target.value, "lifePoint")}/>
    <Label>
        Mana
    </Label>
        <Input type='number' value={monster.mana} onChange={event =>handleChange(event.target.value, "mana")}/>


    {monster.Attacks?.map((attack , index) => 
        <>
        <Label>
            Attack {index +1}
        </Label>    
            <Input key={attack.id} value={attack.id} type='select' onChange={event =>{handleChangeAttack(event.target.value, index)}} >
                {attacks.map(attack =>
                <option key={attack.id} value={attack.id}>{attack.name}</option>)}
            </Input>
        </>
    )}
    </Form>
    {monster.Attacks?.length < 4 && <Button onClick={()=> handleAddAttack()}>add attack</Button>}
      </>    
  )
}

export default MonsterForm