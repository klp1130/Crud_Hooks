import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  // data
  const usersData = [
    { id: 1, name: 'Shilah', username: 'Shishi123' },
    { id: 2, name: 'Mahina', username: 'Grace321' },
    { id: 3, name: 'Keenan', username: 'LP253' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  //Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1 
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user)=> user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
              />
            </div>
          ) : (
        <div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        )}
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