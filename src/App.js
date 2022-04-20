import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  // data
  const usersData = [
    { id: 1, name: 'Shilah', username: 'Shishi123' },
    { id: 2, name: 'Mahina', username: 'Grace321' },
    { id: 3, name: 'Keenan', username: 'LP253' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  //Setting state
  const [users, setUser] = useState(usersData)
  const [currentUSer, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1 
    setUser([...users, user])
  }

  const deleteUser = (id) => {
    setUser(users.filter((user)=> user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App