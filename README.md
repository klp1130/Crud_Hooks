# Crud_Hooks 🎣

For this project I wanted to deepend me undertanding of  state by creating another project using react hooks/UseState

# notes
App js logic: A real API and database would have auto-incremented the user.id. Since I used neither in this project, I incremented the ID of the user manually. The function takes a user object as a parameter, and then add them the the users array of objects. the spread opperatoed (...users) ensures that all of the previous users remain in the array. 

//App.js//
const addUser = (user) => {
  user.id = users.length + 1
  setUser([...users, user])
}

AddUserForm.js logic: Once forms were created I added temporary state to keep track of what was in the add user form. An initial stae was created usuing empty value. User state was set to the empty values. Initial state was put into a variable, because after someone submits the form, we can return it to the inital, empty value. 

//AddUserForm.js//
const initialFormState = { id: null, name: '', username: '' }
const [user, setUser] = useState(initialFormState)

Event handling: Event always gets passed through any on event in the DOM. name(key) and value are gathered from form using destructuring. User was set by using computed property names to dynamically set the name using [name] and value. 

const handleInputChange = (event) => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
}

value were then extracted from the state object, and function referenced in the onChange event. 

Submitting the form: I created an onSubmit function and prevented the dafault page load. 

Validation was added to make sure empty values cannon be submitted. Finally the setter was used to reset the form to its initial value after successfull submission. 

<form
  onSubmit={event => {
    event.preventDefault()
    if (!user.name || !user.username) return

    props.addUser(user)
    setUser(initialFormState)
  }}
>


# edtRow function 

# edit Toggle
"use a ternary operation to check if the editing state is true or not. If true, show the edit form. If false, show the add form. "

# Effect Hook 
initially when editing a user and trying to switch to another user, nothing would happen. The component was already open and although the state on the parent as changed it was not registered down to the props. Use effect came into use here. I let the EditUSerForm component know the props have changed, which I had done with componentDidOpdate.

    useEffect(() => {
  setUser(props.currentUser)
}, [props])

Here a callbacl function was created that updates the user state with the new prop thats being sent through. with Effect hook we can pass [props] through to le it know we are watching the props. 


