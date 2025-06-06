import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"

const baseUrl = "https://jsonplaceholder.typicode.com/users"
class App extends React.Component {
  componentDidMount() {
  axios.get(baseUrl)
    .then((res) => {
      this.setState({ users: res.data})
    })
    .catch((err) => {
      console.error("Ошибка при загрузке пользователей:", err.message)
    })
}
    constructor(props) {
    super(props)

    this.state = {
      users : []
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  render() {
    return (<div className="name">
      <Header titel="Список пользователей" />
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user
    this.setState({ users: []}, () =>{
    this.setState({ users: [...allUsers]})
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })
  }

}

export default App
