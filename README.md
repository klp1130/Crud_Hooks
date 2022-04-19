# Crud_Hooks 🎣

For this project i wanted to practice creating another projects using react hooks and to deepen my understanding of UseState

#notes
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