import React from "react"
class Users extends React.Component {
  users = [
    {
      id: 1,
      firstname: 'Bob',
      lastname: 'Marley',
      bio: 'Lorem asdfasdfadsf',
      age: 40,
      isHappy: true
    },
    {
      id: 2,
      firstname: 'John',
      lastname: 'Doe',
      bio: 'Lorem asdfasdfadsf',
      age: 22,
      isHappy: false
    },
  ]
  render() {
    return (<div>
      {this.users.map((element) => (<div className="user" key={element.id}>
        <h3>{element.firstname} {element.lastname}</h3>
        <p>{element.bio}</p>
      </div>))}
    </div>
    )
  }


}

export default Users