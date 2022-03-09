import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';

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

  const getInitialData = async () => {
    setIsLoading(true);
    const fetchedAttacks = await axios.get(`${BASE_API_URL}/attacks`);
    setAttacks(fetchedAttacks.data);
    setIsLoading(false);
  };

  const handleEdit = (id) => {
    const url = `/admin/attacks/edit/${id}`;
    navigate(url);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <h2>Attacks list</h2>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Damage</th>
            <th>ManaCost</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            attacks.map((attack) => (
              <tr key={attack.id} onClick={() => handleEdit(attack.id)}>
                <AttackRow attack={attack} />
              </tr>
            ))}
        </tbody>
      </Table>
      {isLoading && <div>Loading...</div>}
    </>
  );
}

export default AttacksList;
