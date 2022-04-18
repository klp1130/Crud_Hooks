import React, {useState} from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    { id: 1, name: 'Shilah', username: 'Shishi123' },
    { id: 2, name: 'Mahina', username: 'Grace321' },
    { id: 3, name: 'Keenan', username: 'LP253' },
  ]
  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App