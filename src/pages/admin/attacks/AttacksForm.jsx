import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import {Input, Form, Label, Button} from 'reactstrap'

import {BASE_API_URL,ATTACK_TYPES} from '../../../const.js'

import { ATTACK_TYPES, BASE_API_URL } from '../../../const.js';

const parseStringToNumber = (input) => {
  if (input) {
    return Number(input);
  } else {
    return null;
  }
};

function AttacksForm() {
  const params = useParams();
  const navigate = useNavigate();
  const isEdit = !!params?.id;

  const [attack, setAttack] = useState({});
  const [isError, setIserror] = useState(false);

  const getInitialData = async () => {
    const fetchedAttack = await axios.get(`${BASE_API_URL}/attacks/${params.id}`);
    setAttack(fetchedAttack.data);
  };

  const handleChange = (value, key) => {
    const updatedValue = { ...attack };
    updatedValue[key] = value;
    setAttack(updatedValue);
  };
  const handleSubmit = async () => {
    setIserror(false);
    const payload = {
      name: attack.name,
      damage: attack.damage,
      manaCost: attack.manaCost,
      attackType: attack.attackType,
      imgUrl: attack.imgUrl,
    };

    if (isEdit) {
      try {
        const response = await axios.put(`${BASE_API_URL}/attacks/${attack.id}`, payload);
        setAttack(response.data);
      } catch (error) {
        setIserror(true);
      }
    } else {
      try {
        const response = await axios.post(`${BASE_API_URL}/attacks`, payload);
        navigate(`/admin/attacks/edit/${response.data.id}`);
      } catch (error) {
        setIserror(true);
      }
    }
  };

  const handleDelete = async () => {
    setIserror(false);
    try {
      const response = await axios.delete(`${BASE_API_URL}/attacks/${attack.id}`);
      navigate('/admin/attacks');
    } catch (error) {
      setIserror(true);
    }
  };

  useEffect(() => {
    if (isEdit) {
      getInitialData();
    }
  }, []);

  return (
    <>
      <h2>Attack form</h2>
      <Form className="formWrapper">
        <Label>Name</Label>
        <Input
          type="text"
          value={attack.name}
          onChange={(event) => {
            handleChange(event.target.value, 'name');
          }}
        />
        <Label>Damage</Label>
        <Input
          type="number"
          value={attack.damage}
          onChange={(event) => {
            handleChange(parseStringToNumber(event.target.value), 'damage');
          }}
        />
        <Label>Mana Cost</Label>
        <Input
          type="number"
          value={attack.manaCost}
          onChange={(event) => {
            handleChange(parseStringToNumber(event.target.value), 'manaCost');
          }}
        />
        <Label>Type</Label>
        <Input
          type="select"
          value={attack.attackType}
          onChange={(event) => {
            handleChange(event.target.value, 'attackType');
          }}
        >
          {ATTACK_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Input>
    </Form>
    <Label>
        Image Url
    </Label>
        <Input type='url' value={attack.imgUrl} onChange={(event)=> {
            handleChange(event.target.value, "imgUrl")}}/>
        <img src={attack?.imgUrl} alt='image preview'/>
    <div>
        <Button onClick={()=>handleSubmit()}>
            Save
        </Button>
        <Button onClick={()=>handleDelete()}>
            Delete
        </Button>
    </div>
    {isError && <div>Ooupsss... something bad happened</div>}
    <Link to="/admin/attacks">
        <Button>
            Back
        </Button>
    </Link>
    </>
  );
}

export default AttacksForm;
