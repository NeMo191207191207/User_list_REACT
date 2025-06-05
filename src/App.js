import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
class App extends React.Component {
  render() {
    return (<div className="name">
      <Header titel="Список пользователей" />
      <main>
        <Users />
      </main>
      <aside></aside>
    </div>)
  }

}

export default App
