import React from "react"
class AddUser extends React.Component {
  userAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      username: "",
      email: "",
      age: 1,
      isHappy: false
    }
  }
  render() {
    return (
      <form ref={(el) => this.myForm = el}>
        <input placeholder="Имя" onChange={(e) => this.setState({ name: e.target.value })} />
        <input placeholder="Фамилия" onChange={(e) => this.setState({ username: e.target.value })} />
        <textarea placeholder="Почта" onChange={(e) => this.setState({ email: e.target.value })} />
        <input placeholder="Возвраст" onChange={(e) => this.setState({ age: e.target.value })} />
        <label htmlFor="isHappy">Счастлив?</label>
        <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
        <button type="button" onClick={() => {
          this.myForm.reset()
          this.userAdd = {
            firstname: this.state.name,
            lastname: this.state.username,
            bio: this.state.email,
            age: this.state.age,
            isHappy: this.state.isHappy
          }
          if(this.props.user)
            this.userAdd.id = this.props.user.id
          this.props.onAdd(this.userAdd)
        }
        }>Добавить</button>
      </form>
    )
  }

}

export default AddUser