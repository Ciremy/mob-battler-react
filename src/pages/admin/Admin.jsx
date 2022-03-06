import React from 'react'
import {Button} from "reactstrap"
import {Link} from 'react-router-dom'

function Admin() {
  return (
    <div>
        <Link to="/admin/monsters">
          <Button>Monsters</Button>
        </Link>
        <Link to="/admin/attacks">
          <Button>Attacks</Button>
        </Link>
    </div>
  )
}

export default Admin