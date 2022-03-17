import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Button, Table} from 'reactstrap'
import { BASE_API_URL } from '../../../const'
import { Link, useNavigate } from 'react-router-dom'



const MonsterRow = ({monster}) =>{
  return(
    <>
      <td>{monster.name}</td>
      <td>{monster.lifePoint}</td>
      <td>{monster.mana}</td>
    </>
  )
}





function MonstersAdmin() {
  const [monsters, setMonsters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const getInitialData = async () =>{
    setIsLoading(true)
    const fetchedMonsters = await axios.get(`${BASE_API_URL}/monsters`)
    setMonsters(fetchedMonsters.data)
    setIsLoading(false)
  }

  
  useEffect(()=> {
    getInitialData()
  },[])


  const handleEdit =(id) => {
    navigate(`/admin/monsters/edit/${id}`)
  }





  return (
    <>
     <h2>MonsterList</h2>
     <Table hover>
     <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Life Point
        </th>
        <th>
          Mana
        </th>
      </tr>
    </thead>
    <tbody>
    {
      !isLoading && monsters.map(monster => 
      <tr key={monster.id} onClick={()=> handleEdit(monster.id)}>
        <MonsterRow monster={monster}/>
      </tr>
      )
      }
    </tbody>
     </Table>
     <Link to="/admin">
       <Button>
         Back
       </Button>
     </Link>
    </>
  )
}

export default MonstersAdmin