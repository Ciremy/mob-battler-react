import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Table } from 'reactstrap'
import {useNavigate,Link} from 'react-router-dom'
import {BASE_API_URL} from '../../../const.js'

import { BASE_API_URL } from '../../../const.js';

function AttackRow({ attack }) {
  return (
    <>
      <td>{attack.name}</td>
      <td>{attack.damage}</td>
      <td>{attack.manaCost}</td>
      <td>{attack.attackType}</td>
    </>
  );
}

function AttacksList() {
  const [attacks, setAttacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [attacks, setAttacks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const getInitialData = async () => {
    setIsLoading(true)
    const fetchedAttacks = await axios.get(`${BASE_API_URL}/attacks`)
    setAttacks(fetchedAttacks.data)
    setIsLoading(false)
  }

  const handleEdit = (id) => {
  const url = `/admin/attacks/edit/${id}`
  navigate(url)
  }

  useEffect(()=> {
    getInitialData()
  },[])

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
    <h2>Attacks list</h2>
    <Table hover>
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>
          Damage
        </th>
        <th>
          ManaCost
        </th>
        <th>
          Type
        </th>
      </tr>
    </thead>
    <tbody>
      {!isLoading && attacks.map(attack => 
        <tr key={attack.id} onClick={()=> handleEdit(attack.id)}>
        <AttackRow attack={attack}/>
        </tr>
     )}
    </tbody>
    </Table>
    {isLoading && <div>Loading...</div>}
    <Link to="/admin/attacks/new">
      <Button>Add New</Button>
    </Link>
    <Link to="/admin">
      <Button>Back</Button>
    </Link>
    
    </>
  );
}

export default AttacksList;
